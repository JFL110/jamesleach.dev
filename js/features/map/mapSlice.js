import { createSlice } from 'repileux'

const initialViewportObject = { isInitial: true };

export const pointToCentre = point => ({ lat: point.lat, lng: point.long, default: false });

export default createSlice({

    name: 'map',
    initialState: {
        centre: { lat: 47.444, lng: -1.5, default: true },
        viewportObject: initialViewportObject,
        currentLightBoxImageIndex: null,
        lastNonNullLightBoxImageIndex: null
    },

    reducers: {
        setCurrentLightBoxImageIndex: (state, action) => { state.currentLightBoxImageIndex = action.payload; if (action.payload != null) { state.lastNonNullLightBoxImageIndex = action.payload; } },
        setNewCentre: (state, { payload }) => {
            state.centre = payload;
            state.viewportObject = {};
        },
    }
});

