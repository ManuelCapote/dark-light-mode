// GLOBAL VARIABLES
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

const toggleSwitch = document.querySelector('input[type="checkbox"]')

const nav = document.getElementById('nav')

const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image3')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')

//image Swtich Theme
function imageMode(themeColor) {
  image1.src = `img/undraw_proud_coder_${themeColor}.svg`
  image2.src = `img/undraw_feeling_proud_${themeColor}.svg`
  image3.src = `img/undraw_conceptual_idea_${themeColor}.svg`
}

// Toggle Dark - Light Mode
function toggleLightDarkMode(DARK_THEME) {
  nav.style.backgroundColor = DARK_THEME
    ? 'rgb(0 0 0 / 50%)'
    : 'rgb(255 255 255 / 50%)'
  textBox.style.backgroundColor = DARK_THEME
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)'
  toggleIcon.children[0].textContent = DARK_THEME ? 'Dark Mode' : 'Ligth Mode'
  DARK_THEME
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')

  imageMode(DARK_THEME ? 'dark' : 'light')
}

// Change from Ligth to Dark Mode or Viceversa
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', DARK_THEME)
    toggleLightDarkMode(true)
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_THEME)
    toggleLightDarkMode(false)
    localStorage.setItem('theme', 'light')
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme)

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)

  if (currentTheme === 'dark') {
    toggleLightDarkMode(DARK_THEME)
    toggleSwitch.checked = true
  }
} else {
  document.documentElement.setAttribute('data-theme', currentTheme)
  if (currentTheme === 'light') {
    toggleLightDarkMode(LIGHT_THEME)
    toggleSwitch.checked = false
  }
}
