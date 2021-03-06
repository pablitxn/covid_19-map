import {getGlobalData} from '../../common/services/index.js';

export async function renderMap(map, popup, infoSelected) {
  const data = await getGlobalData();

  switch (infoSelected) {
    case 1:
      const deaths = data.filter(data => data.deaths !== 0);
      console.log('filtro muertes ->', deaths);
      renderDataMap(deaths, map, popup);
      break;
    case 2:
      const confirmed = data.filter(data => data.confirmed !== 0);
      console.log('filtro confirmados ->', confirmed);
      renderDataMap(confirmed, map, popup);
      break;
    case 3:
      const recovered = data.filter(data => data.recovered !== 0);
      console.log('filtro recuperados ->', recovered);
      renderDataMap(recovered, map, popup);
      break;
  }
}

function renderDataMap(data, map, popup) {
  data.forEach(item => {
    const marker = new window.google.maps.Marker({
      position: {
        lat: item.location.lat,
        lng: item.location.lng,
      },
      map,
      // icon,
      title: String(item.deaths),
    });
    marker.addListener('click', () => {
    });
    popup.setContent(renderAditionalInfo(item));
    popup.open(map, marker);
  });
}

function renderAditionalInfo({
                               confirmed,
                               deaths,
                               recovered,
                               provincestate,
                               countryregion,
                             }) {
  return `
    <div>
      <p> <strong>${provincestate} - ${countryregion}</strong> </p>
      <p> confirmados: ${confirmed} </p>
      <p> muertes: ${deaths} </p>
      <p> recuperados: ${recovered} </p>
    </div>
  `;
}
