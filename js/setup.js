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
  var wizardName = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + WIZARD_SURNAME[Math.floor(Math.random() * WIZARD_SURNAME.length)];
  return wizardName;
};

var setCoatColor = function () {
  var coatColor = COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)];
  return coatColor;
};

var setEyesColor = function () {
  var eyesColor = EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)];
  return eyesColor;
};

var wizardsArray = [];
for (var i = 0; i < 9; i++) {
var wizards = [{
  name: setName(),
  coatColor: setCoatColor(),
  eyesColor: setEyesColor()
},
{
  name: setName(),
  coatColor: setCoatColor(),
  eyesColor: setEyesColor()
},
{
  name: setName(),
  coatColor: setCoatColor(),
  eyesColor: setEyesColor()
},
{
  name: setName(),
  coatColor: setCoatColor(),
  eyesColor: setEyesColor()
},
{
  name: setName(),
  coatColor: setCoatColor(),
  eyesColor: setEyesColor()
},
{
  name: setName(),
  coatColor: setCoatColor(),
  eyesColor: setEyesColor()
},
{
  name: setName(),
  coatColor: setCoatColor(),
  eyesColor: setEyesColor()
},
{
  name: setName(),
  coatColor: setCoatColor(),
  eyesColor: setEyesColor()
}];
wizardsArray.push(wizards[i]);
}

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
