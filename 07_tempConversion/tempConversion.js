const convertToCelsius = function(tempInput) {

  let celcius = ((tempInput-32)*(5/9))
   let celciusOutput = (
    (Math.round(celcius * 10) / 10));
return celciusOutput;
};

const convertToFahrenheit = function(tempInput) {

  let fahrenheit = ((tempInput*(9/5)) + 32);
   let fahrenheitOutput =(
    (Math.round(fahrenheit * 10) / 10));
  return fahrenheitOutput;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
//Fahrenheit to Celcius: C = (F-32) (5/9)
// Celsius to Fahrenheit: F = C(9/5) + 32
