const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBox = document.querySelector('.nav__items')
const logoImg = document.querySelector('.logo-img')
const barsik3 = document.querySelector('.barsik3')
const barsik2 = document.querySelector('.barsik2')
const barsik = document.querySelector('.barsik')
const allSections = document.querySelectorAll('.section')

const handleNav = () => {
	navBtn.classList.toggle('active')
	if (nav.classList.contains('nav--active')) {
		nav.classList.remove('nav--active')
		nav.classList.add('nav--inactive')
		navBox.classList.remove('nav__items--active')
		// logoImg.style.color = 'black'
		if (window.innerWidth > 500) {
			barsik.classList.remove('aniBarsik')
			barsik3.classList.remove('aniBarsik3')
		}
	} else {
		nav.classList.remove('nav--inactive')
		nav.classList.add('nav--active')
		navBox.classList.add('nav__items--active')
		logoImg.style.color = 'white'
		if (window.innerWidth < 500) {
			barsik.classList.add('aniBarsik')
			barsik3.classList.add('aniBarsik3')
		}
	}
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
			nav.classList.add('nav--inactive')
			navBtn.classList.remove('active')
			logoImg.style.color = 'black'
		})
	})
}

navBtn.addEventListener('click', handleNav)

const circle = document.querySelector('.circle')
const section = document.getElementById('about-us')
const sectionRect = section.getBoundingClientRect()
const windowHeight = window.innerHeight
const scrollOffset = 300
const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				circle.style.opacity = 1
			} else {
				circle.style.opacity = 0
			}
		})
	},
	{
		rootMargin: '-50px 0px',
	}
)
observer.observe(section)

document.addEventListener('scroll', function () {
	const sectionRect = section.getBoundingClientRect()

	if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
		// Jeśli sekcja jest w widoku
		let scrollOffset = 300
		let newSize = Math.min(200 + (window.scrollY - scrollOffset) * 2)

		// Ustaw nowe wymiary koła
		circle.style.width = newSize + 'px'
		circle.style.height = newSize + 'px'

		// Dodaj klasy, aby stopniowo pokazać i zmienić tło koła
		circle.classList.add('visible')
		circle.classList.add('gradient-bg')
	} else {
		// Jeśli sekcja nie jest w widoku
		circle.style.opacity = 0 // Dodatkowe zabezpieczenie
		circle.classList.remove('visible')
		circle.classList.remove('gradient-bg') // Usuń klasę gradientu
	}
})

// Znajdź element do obserwacji
const textBox = document.querySelector('.text-box')

// Opcje dla Intersection Observer
const options = {
	root: null, // viewport jako root
	threshold: 0.5, // 50% widoczności
}

// Callback dla Intersection Observer
const callback = (entries, observerText) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible')
			observerText.unobserve(entry.target) // przestań obserwować po pojawieniu się
		}
	})
}

// Utwórz nowy Intersection Observer
const observerText = new IntersectionObserver(callback, options)

// Zaczynamy obserwację elementu `.text-box`
observerText.observe(textBox)

// document.addEventListener('scroll', function () {
//     const sectionRect = section.getBoundingClientRect()
//     const windowHeight = window.innerHeight
//     const scrollOffset = 0

//     if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
//         if (window.scrollY) {
//             let additionalOffset = window.innerWidth >= 1000 ? 120 : 50
//             let scale = 1 + (window.scrollY - scrollOffset + additionalOffset) / 160
//             circle.style.transform = `scale(${scale})`
//         } else {
//             circle.style.transform = 'scale(1)'
//         }
//     } else {
//         circle.style.opacity = 0
//     }
// })
