

const hideAllSections = () => {
	document.querySelectorAll('section').forEach(section => {
		section.style.display = 'none';
	});
};



const showSection = (sectionClass) => {
	hideAllSections();
	const section = document.querySelector(sectionClass);
	if (section) {
		section.style.display = 'flex';
	}
};


showSection('.homescreen');



const menyButton = document.querySelector('.menybutton');
menyButton.addEventListener('click', () => showSection('.menysida'));


const menykundkorgIcon = document.querySelector('.menysida .icon');
menykundkorgIcon.addEventListener('click', () => showSection ('.kundkorg'));

const kundkorgIcon = document.querySelector('.kundkorg .icon');
kundkorgIcon.addEventListener('click', () => showSection ('.menysida'));


const betalaButton = document.querySelector('.betala');
betalaButton.addEventListener('click', () => showSection('.etasida'));


// const kvittoButton = document.querySelector('.sekvittot');
// kvittoButton.addEventListener('click', () => showSection('.kvittosidan'));

const nybestButton = document.querySelector('.etasida .nybeställning');
nybestButton.addEventListener('click', () => showSection('.menysida'));

const nybestButtonKvitto = document.querySelector(".kvittosidan .nybeställning");
nybestButtonKvitto.addEventListener("click", () => showSection('.menysida'));














