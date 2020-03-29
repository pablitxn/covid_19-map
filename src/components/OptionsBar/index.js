const _options = document.getElementById('filter')
export let selectedOption = 1

_options.addEventListener('change', () => {
	selectedOption = _options.value
})
