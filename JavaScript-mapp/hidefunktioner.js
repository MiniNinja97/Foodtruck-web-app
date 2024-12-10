

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


const kundkorgIcon = document.querySelector('.menysida .icon');
kundkorgIcon.addEventListener('click', () => showSection ('.kundkorg'));


const betalaButton = document.querySelector('.betala');
betalaButton.addEventListener('click', () => showSection('.etasida'));


const kvittoButton = document.querySelector('.sekvittot');
kvittoButton.addEventListener('click', () => showSection('.kvittosidan'));

const nybestButton = document.querySelector('.etasida .nybeställning');
nybestButton.addEventListener('click', () => showSection('.menysida'));

const nybestButtonKvitto = document.querySelector(".kvittosidan .nybeställning");
nybestButtonKvitto.addEventListener("click", () => showSection('.menysida'));




// function hideAllSections() {
//     document.querySelectorAll('section').forEach(section => {
//         section.classList.remove('visible');
//         section.classList.add('hidden');
//     });
// }


// function showSection(sectionClass) {
//     hideAllSections();
//     const section = document.querySelector(sectionClass);
//     if (section) {
//         section.classList.remove('hidden');
//         section.classList.add('visible');
//     }
// }


// showSection('.homescreen');


// const menyButton = document.querySelector('.menybutton');
// menyButton.addEventListener('click', () => showSection('.menysida'));
// console.log(menyButton)


// const kundkorgIcon = document.querySelector('.menysida .icon');
// kundkorgIcon.addEventListener('click', () => showSection('.kundkorg'));
// console.log(kundkorgIcon)

// const betalaButton = document.querySelector('.betala');
// betalaButton.addEventListener('click', () => showSection('.etasida'));
// console.log(betalaButton)

// const kvittoButton = document.querySelector('.sekvittot');
// kvittoButton.addEventListener('click', () => showSection('.kvittosidan'));
// console.log(kvittoButton)

// const nybestButton = document.querySelector('.etasida .nybeställning');
// nybestButton.addEventListener('click', () => showSection('.menysida'));
// console.log(nybestButton)

// const nybestButtonKvitto = document.querySelector(".kvittosidan .nybeställning");
// nybestButtonKvitto.addEventListener("click", () => showSection('.menysida'));
// console.log(nybestButtonKvitto)









