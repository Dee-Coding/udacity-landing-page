/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
// Assigning all sections & navBar list in variables Reference Udacity Zoom Meeting for the Project

let Sections = document.querySelectorAll('section');

let myUl = document.getElementById('navbar__list');

let fragment = document.createDocumentFragment();

// looping over all sections to get every section name and id into the nav bar Reference Udacity Zoom Meeting for the Project & Udacity classes

Sections.forEach((section) => {
	const sectionName = section.getAttribute('data-nav');
	const sectionLink = section.id;
	const ListItems = document.createElement('li');

	// Using innerHTML method to create the list of sections text and links Reference Udacity Zoom Meeting & MDN

	ListItems.innerHTML += `<li><a class="menu__link" href="#${sectionLink}">${sectionName}</a></li>`;
	// Append all sections to the navigation bar
	fragment.append(ListItems);
	myUl.appendChild(fragment);
});

// creating observer var

const observer = new IntersectionObserver(
	function (entries) {
		entries.forEach((entry) => {
			// to add active class when the equivalent nav link refernce project support second zoom meeting
			const equivlantNavLink = document.querySelector(
				`[href="#${entry.target.id}"]`,
			);
			// to add active class when the section is in view
			if (entry.isIntersecting) {
				entry.target.classList.add('your-active-class');
				equivlantNavLink.classList.add('active-nav');
			}
			// to remove the active class from the section when it is not in view
			else {
				entry.target.classList.remove('your-active-class');
				equivlantNavLink.classList.remove('active-nav');
			}
		});
	},

	{
		threshold: 0.65,
	},
);

Sections.forEach((section) => {
	observer.observe(section);
});

// to add smooth scroll when the equivalent section reference project support second zoom meeting
const navList = document.getElementById('navbar__list');
function onScroll(event) {
	event.preventDefault();
	const selectedSection = document.querySelector(
		`[data-nav="${event.target.textContent}"]`,
	);
	selectedSection.scrollIntoView({
		behavior: 'smooth',
		block: 'center',
	});
}
navList.addEventListener('click', onScroll);

// adding burger menue refernce project support second zoom meeting
const burgerMenu = document.querySelector('.burger');
function toggleMenu() {
	if (navList.style.display == 'block') {
		navList.style.display = 'none';
		pageHeader.style.backgroundColor = '';
		return;
	}
	navList.style.display = 'block';
	pageHeader.style.backgroundColor = '#111';
}
burgerMenu.addEventListener('click', toggleMenu);
