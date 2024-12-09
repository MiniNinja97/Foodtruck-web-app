
//göm alla section's
const hideAllSections = () => {
	document.querySelectorAll('section').forEach(section => {
		section.style.display = 'none';
	});
};


//om klassen är "vald/klickad på" så visas den
const showSection = (sectionClass) => {
	hideAllSections();
	const section = document.querySelector(sectionClass);
	if (section) {
		section.style.display = 'flex';
	}
};

//hemskärmen visas först
showSection('.homescreen');


//förstasidan visas, klickar man på "MENY"-knappen så tars man vidare till meny sidan
const menyButton = document.querySelector('.menybutton');
menyButton.addEventListener('click', () => showSection('.menysida'));

//från menysidan, klick på kundkorg-icon tas man visare till kundkorgsidn
const kundkorgIcon = document.querySelector('.menysida .icon');
kundkorgIcon.addEventListener('click', () => showSection ('.kundkorg'));

//kundkorgen har "TAKE MY MONEY" knapp, den tar användaren vidar till "maten behandlas sidan"
const betalaButton = document.querySelector('.betala');
betalaButton.addEventListener('click', () => showSection('.etasida'));

//eta-sidan kan visa kvitto eller göra en ny beställning, knappen kvitto tar användaren till kvittosidan och ny beställning tar användaren tillbaka till menyn
const kvittoButton = document.querySelector('.sekvittot');
kvittoButton.addEventListener('click', () => showSection('.kvittosidan'));

const nybestButton = document.querySelector('.etasida .nybeställning');
nybestButton.addEventListener('click', () => showSection('.menysida'));

const nybestButtonKvitto = document.querySelector(".kvittosidan .nybeställning");
nybestButtonKvitto.addEventListener("click", () => showSection('.menysida'));


