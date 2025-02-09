import { createModule } from 'repileux'
import mapSlice from './mapSlice'
import MapPage from './mapPage'

export default createModule({
    name: 'map',
    pages: [MapPage],
    slices: [mapSlice],
    path : "",
})