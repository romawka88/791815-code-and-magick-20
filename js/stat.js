'use strict';

var canvas = document.getElementById('canvas');
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 50;
var FONT_GAP = 20;
var TEXT_WIDTH = 50;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');


  var colors = ['rgba(255, 0, 0, 1)', 'hsl(255, 91%, 29%)', 'hsl(255, 5%, 78%)', 'hsl(255, 22%, 63%)'];

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + (TEXT_WIDTH + GAP) * i, CLOUD_Y + GAP + barHeight + FONT_GAP);
    ctx.fillStyle = colors[i];
    ctx.fillRect(CLOUD_X + GAP + (TEXT_WIDTH + GAP) * i, CLOUD_HEIGHT - TEXT_HEIGHT - (barHeight * times[i]) / maxTime, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + 40, CLOUD_Y + 10);
  ctx.fillText('Список результатов:', CLOUD_X + 40, CLOUD_Y + 30);

};
