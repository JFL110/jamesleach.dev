import { createSlice } from 'repileux'

const initialViewportObject = { isInitial: true };

const mapSlice = createSlice({
    name: 'map',
    initialState: {
        centre: { latitude: 53.4, longitude: -2.2, default: true },
        viewportObject: initialViewportObject,
        currentLightBoxPhoto: null,
        lastNonNullLightBoxPhoto: null
    },

    reducers: {
        setCurrentLightBoxPhoto: (state, { payload }) => {
            state.currentLightBoxPhoto = payload;
            payload && (state.lastNonNullLightBoxPhoto = payload)
        },
        setNewCentre: (state, { payload }) => {
            state.centre = payload;
            state.viewportObject = {};
        },
    }
});

export default mapSlice;