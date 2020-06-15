'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Марияж', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


var setName = function () {
  for (var i = 0; i < WIZARD_NAMES.length; i++) {
    for (var j = 0; j < WIZARD_SURNAME.length; j++) {
      var name = WIZARD_NAMES[i] + WIZARD_SURNAME[j];
    }
  }
  return name;
};

var wizards = [
  {
    name: setName(),
    coatColor: COAT_COLOR[0],
    eyesColor: EYES_COLOR[0]
  },
  {
    name: setName(),
    coatColor: COAT_COLOR[1],
    eyesColor: EYES_COLOR[1]
  },
  {
    name: WIZARD_NAMES[2] + WIZARD_SURNAME[2],
    coatColor: COAT_COLOR[2],
    eyesColor: EYES_COLOR[2]
  },
  {
    name: WIZARD_NAMES[3] + WIZARD_SURNAME[3],
    coatColor: COAT_COLOR[3],
    eyesColor: EYES_COLOR[3]
  },
  {
    name: WIZARD_NAMES[4] + WIZARD_SURNAME[4],
    coatColor: COAT_COLOR[4],
    eyesColor: EYES_COLOR[4]
  },
  {
    name: WIZARD_NAMES[5] + WIZARD_SURNAME[5],
    coatColor: COAT_COLOR[5],
    eyesColor: EYES_COLOR[0]
  },
  {
    name: WIZARD_NAMES[6] + WIZARD_SURNAME[6],
    coatColor: COAT_COLOR[0],
    eyesColor: EYES_COLOR[1]
  },
  {
    name: WIZARD_NAMES[7] + WIZARD_SURNAME[7],
    coatColor: COAT_COLOR[1],
    eyesColor: EYES_COLOR[2]
  }

];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
