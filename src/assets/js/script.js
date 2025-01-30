document.addEventListener('DOMContentLoaded', () => {
	const themeToggle = document.getElementById('toggle-theme')

	// Function to switch themes
	const switchTheme = () => {
		const root = document.documentElement
		const currentTheme = root.style.getPropertyValue('--theme-name')

		if (currentTheme === 'light') {
			root.style.setProperty('--theme-name', 'dark')
		} else {
			root.style.setProperty('--theme-name', 'light') // Corrected here
		}
	}

	// Event listener for the theme toggle switch
	themeToggle.addEventListener('change', switchTheme)
})
