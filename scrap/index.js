var fs = require('fs');
var path = require('path');
var fileLocation = path.resolve(__dirname, 'reiki-dict.txt');
var fileContent = fs.readFileSync(fileLocation, 'utf-8');
var lines = fileContent.split('\n');
var jsonOutput = [];
var out = {};

function hasPositiveAffirmation(line) {
  return line.indexOf('Afirmação positiva ') > -1;
}

function trimWords(words) {
  function _trimWords(input) {
    return input.trim();
  }
  return words.map(_trimWords);
}

function getDisease(line) {
  var out = '';
  var isPositiveAffirmation = hasPositiveAffirmation(line);

  if (!hasPositiveAffirmation(line)) {
    out = trimWords(line)[0]; 
  }

  return out;
}

function getCause(line) {
  var out = '';

  if (!hasPositiveAffirmation(line)) {
    out = trimWords(line)[1];
  }

  return out;
}

function getPositiveAffirmation(line) {
  var out = '';

  if (hasPositiveAffirmation(line)) {
    out = trimWords(line)[1];
  }

  return out;
}

function _filterLinesHandler(line) {
  if (line) return line;
}

function _mapLinesHandler(line) {
  var f1 = '–';
  var f2 = '-';
  var rF = new RegExp('[' + f1 + f2 + ']');
  var splitedLine = line.split(rF);
  var isPositiveAffirmation = hasPositiveAffirmation(line);

  if (!isPositiveAffirmation) {
    out.disease = getDisease(splitedLine);
    out.cause = getCause(splitedLine);
  } if (isPositiveAffirmation) {
    out.positiveAffirmation = getPositiveAffirmation(splitedLine);
    jsonOutput.push(out);
    out = {};
  }
}
lines
  .filter(_filterLinesHandler)
  .map(_mapLinesHandler);

  fs.writeFile('./dict.json', JSON.stringify(jsonOutput), 'utf-8', function () {
    console.log('Done with dict!');
  });
