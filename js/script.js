// Copyright (c) 2024 George, khalil All rights reserved
//
// Created by: George, Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function Convert fahrenheit to celisus.
 */
function temperatureConvert() {

  //input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

  //process
  const celsius = (fahrenheit - 32) * 5 / 9;

  //output
  document.getElementById("result").textContent = `Temperature in Celsius: ${celsius.toFixed(2)}°C`;
}