// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('data')
date.innerHTML = new Date().getFullYear()

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector(
	'.links-container'
)
const links = document.querySelector('.links')
navToggle.addEventListener('click', function(){
	// linksContainer.classList.toggle('show-links')
	const containerHeight = linksContainer.getBoundingClientRect()
		.height
	// console.log(containerHeight)
	const linksHeight = links.getBoundingClientRect().height
	// console.log(linksHeight)
	if (containerHeight === 0) {
		linksContainer.style.height = `${linksHeight}px`
		console.log(containerHeight)
	}
	else {
		linksContainer.style.height = 0
		console.log(containerHeight)
	}
})
// ********** fixed navbar ************
const navBar = document.getElementById('nav')
const toplink = document.querySelector('.top-link')
window.addEventListener('scroll', function(){
	const scrollHeight = window.pageYOffset
	// console.log(scrollHeight)
	const navHeight = navBar.getBoundingClientRect().height
	if (scrollHeight > navHeight) {
		navBar.classList.add('fixed-nav')
	}
	else {
		navBar.classList.remove('fixed-nav')
	}
	if (scrollHeight > 500) {
		toplink.classList.add('show-link')
	}
	else {
		toplink.classList.remove('show-link')
	}
})

// ********** smooth scroll ************
// select links
const scrollLink = document.querySelectorAll('.scroll-link')

scrollLink.forEach(function(link){
	link.addEventListener('click', (e) => {
		// prevent Default
		e.preventDefault()
		// navigate to specific
		const id = e.currentTarget
			.getAttribute('href')
			.slice(1)
		const element = document.getElementById(id)
		// calculat the height
		const navHeight = navBar.getBoundingClientRect()
			.height
		const containerHeight = linksContainer.getBoundingClientRect()
			.height
		const fixedNav = navBar.classList.contains(
			'fixed-nav'
		)
		let position = element.offsetTop - navHeight
		//console.log(position)
		if (!fixedNav) {
			position = position - navHeight
		}
		if (navHeight > 82) {
			position = position + containerHeight
		}
		window.scrollTo({
			left     : 0,
			top      : position,
			behavior : 'smooth'
		})
		linksContainer.style.height = 0
	})
})
