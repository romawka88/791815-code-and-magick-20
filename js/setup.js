'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Марияж', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomElement = function (arr) {
  var arrElement = arr[Math.floor(Math.random() * arr.length)];
  return arrElement;
};

var wizardsArray = [];
for (var i = 0; i < 8; i++) {
  var magician = {
    name: getRandomElement(WIZARD_NAMES) + getRandomElement(WIZARD_SURNAME),
    coatColor: getRandomElement(COAT_COLOR),
    eyesColor: getRandomElement(EYES_COLOR)
  };

  wizardsArray.push(magician);
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < wizardsArray.length; j++) {
  fragment.appendChild(renderWizard(wizardsArray[j]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var setupWizard = document.querySelector('.setup-wizard');
  setupWizard.addEventListener('click', function () {
    document.querySelector('.wizard-coat').style.fill = getRandomElement(COAT_COLOR);
    document.querySelector('.wizard-eyes').style.fill = getRandomElement(EYES_COLOR);
});

var setupFireballColor = document.querySelector('.setup-fireball-wrap');
  setupFireballColor.addEventListener('click', function () {
    document.querySelector('.setup-fireball').style.fill = getRandomElement(FIREBALL_COLOR);
});
