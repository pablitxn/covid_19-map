export default {
	setState(state, payload) {
		state.items.push(payload)
		return state
	}
}
