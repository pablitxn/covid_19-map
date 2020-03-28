const API_COVID_ALL =
	'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest'

const API_COVID_BRIEF =
	'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief'

export async function getGlobalData() {
	try {
		const response = await fetch(API_COVID_ALL)
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

export async function getBriefData() {
	try {
		const response = await fetch(API_COVID_BRIEF)
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
