// Created by Evan Cagiannos
// ICS2O-UNIT2-02-HTML
// Created on: 2022-March-10 
//This file contains the JS functions for index.html

/**
* Does basic math
*/

function doMathClicked() {
  // this function does basic math

document.getElementById('area-math').innerHTML = '<p>The area is= ' + (5 * 3) + '</p>'
document.getElementById('perimeter-math').innerHTML = '<p>The perimeter is= ' + (2 * (5 + 3)) + '</p>'
}