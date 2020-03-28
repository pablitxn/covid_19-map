const API_COVID =
	'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest'

export async function getGlobalData() {
	try {
		const response = await fetch(API_COVID)
		switch (response.status) {
			case 200:
				const data = await response.json()
				return data
			case 400:
				alert(`Ha ocurrido un error con la petición ${response.error}`)
				return []
		}
	} catch (error) {
		alert(`Perdón, ha ocurrido un error: ${error}`)
		return []
	}
}
