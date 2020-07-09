import { createSlice } from '@reduxjs/toolkit'
import mergeByKey from "array-merge-by-key";

const initialViewportObject = { isInitial : true };

export const pointToCentre = point => ({ lat: point.lat, lng: point.long, default: false });

export default createSlice({
    name: 'map',
    initialState: {
        points: [],
        fetchError: false,
        mainLocationsFetched: false,
        centre: { lat: 47.444, lng: -1.5, default: true },
        viewportObject: initialViewportObject,
        currentLightBoxImageIndex: null,
        lastNonNullLightBoxImageIndex: null
    },
    reducers: {
        setCurrentLightBoxImageIndex: (state, action) => { state.currentLightBoxImageIndex = action.payload; if (action.payload != null) { state.lastNonNullLightBoxImageIndex = action.payload; } },
        setMainLocationsFetched: (state, action) => { state.mainLocationsFetched = action.payload; },
        setFetchError: (state, action) => { state.fetchError = action.payload; },
        setNewCentre: (state, action) => { state.centre = action.payload; state.viewportObject = {}; },
        mergePoints: (state, action) => {

            // Merge
            state.points = mergeByKey("id", state.points, action.payload);

            if (state.points.length == 0) {
                return;
            }

            // Mark all points
            const _mostRecentPoint = state.points.find(p => p.isMostRecent);

            // Set map centre
            if (state.centre.default) {
                state.centre = pointToCentre(_mostRecentPoint);
                state.viewportObject = initialViewportObject;
            }
        }
    }
});

