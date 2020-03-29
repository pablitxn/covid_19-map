// import mapStyle from './map-style.js'
import Component from '../../lib/component.js'
import store from '../../store/index.js'
import { renderMap } from './utils.js'

class Map extends Component {
	constructor() {
		super({
			store,
			element: document.getElementById('map')
		})
	}

	render() {
		const map = new window.google.maps.Map(this.element, {
			center: {
				lat: 0,
				lng: 0
			},
			zoom: 2
			// styles: mapStyle
		})
		const popup = new window.google.maps.InfoWindow()
		const infoSelected = store.state.items[store.state.items.length - 1]
		console.log(`infoSelected -> ${infoSelected}`)
		renderMap(map, popup, infoSelected)
	}
}

export default Map
