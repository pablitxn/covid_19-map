import Component from '../../lib/component.js'
import store from '../../store/index.js'

class OptionsBar extends Component {
	constructor() {
		super({
			store,
			element: document.getElementById('filter')
		})
	}

	setState(event) {
		event.preventDefault()
		console.log(`El selector está en ${event.target.value}`)
		store.dispatch('setState', event.target.value)
	}

	render() {
		this.element.addEventListener('change', this.setState)
	}
}

export default OptionsBar
