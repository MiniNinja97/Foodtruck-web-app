

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



// function valdSection(sectionClass) {
   
//     document.querySelectorAll('section').forEach(section => {
//         section.classList.remove('visible');
//         section.classList.add('hidden');
//     });
    
    
//     const section = document.querySelector(sectionClass);
//     if (section) {
//         section.classList.remove('hidden');
//         section.classList.add('visible');
//     }
// }

// valdSection('.homescreen');


// const menyButton = document.querySelector('.menybutton');
// menyButton.addEventListener('click', () => valdSection('.menysida'));

// const kundkorgIcon = document.querySelector('.menysida .icon');
// kundkorgIcon.addEventListener('click', () => valdSection('.kundkorg'));

// const betalaButton = document.querySelector('.betala');
// betalaButton.addEventListener('click', () => valdSection('.etasida'));

// const kvittoButton = document.querySelector('.sekvittot');
// kvittoButton.addEventListener('click', () => valdSection('.kvittosidan'));

// const nybestButton = document.querySelector('.etasida .nybeställning');
// nybestButton.addEventListener('click', () => valdSection('.menysida'));

// const nybestButtonKvitto = document.querySelector(".kvittosidan .nybeställning");
// nybestButtonKvitto.addEventListener("click", () => valdSection('.menysida'));

// function valdSection(sectionClass) {
   
//     let allSections = document.querySelectorAll('section');

    
//     allSections.forEach(function(section) {
//         section.classList.add('hidden');
//         section.classList.remove('visible');
//     });

   
//     let section = document.querySelector(sectionClass);
//     if (section) {
//         section.classList.remove('hidden');
//         section.classList.add('visible');
//     }
// }


// valdSection('.homescreen');


// document.querySelector('.menybutton').addEventListener('click', function() {
//     valdSection('.menysida');
// });

// document.querySelector('.menysida .icon').addEventListener('click', function() {
//     valdSection('.kundkorg');
// });

// document.querySelector('.betala').addEventListener('click', function() {
//     valdSection('.etasida');
// });

// document.querySelector('.sekvittot').addEventListener('click', function() {
//     valdSection('.kvittosidan');
// });

// document.querySelector('.etasida .nybeställning').addEventListener('click', function() {
//     valdSection('.menysida');
// });

// document.querySelector(".kvittosidan .nybeställning").addEventListener('click', function() {
//     valdSection('.menysida');
// });





