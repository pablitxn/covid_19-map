// import mapStyle from './map-style.js'
import { getGlobalData, getBriefData } from './src/common/services/index.js'

// DOM
const _map = document.getElementById('map')

// Definitions
const map = new window.google.maps.Map(_map, {
	center: {
		lat: 0,
		lng: 0
	},
	zoom: 2
	// styles: mapStyle
})
const popup = new window.google.maps.InfoWindow()
// const icon = '../../assets/icons/selector-icon.png'

// Power
async function renderGlobalData() {
	const data = await getGlobalData()
	data.forEach(item => {
		const marker = new window.google.maps.Marker({
			position: {
				lat: item.location.lat,
				lng: item.location.lng
			},
			map,
			// icon,
			title: String(item.confirmed)
		})
		marker.addListener('click', () => {
			popup.setContent(renderAditionalInfo(item))
			popup.open(map, marker)
		})
	})
}

function renderAditionalInfo({
	confirmed,
	deaths,
	recovered,
	provincestate,
	countryregion
}) {
	return `
    <div>
      <p> <strong>${provincestate} - ${countryregion}</strong> </p>
      <p> confirmados: ${confirmed} </p>
      <p> muertes: ${deaths} </p>
      <p> recuperados: ${recovered} </p>
    </div>
  `
}

renderGlobalData()
