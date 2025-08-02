let num1, num2, operator;
let stringQuery;
let ok = false;
let result;
let text = "";

const regexpFloat = /[+-]?([0-9]*[.])?[0-9]+/; //regular expression to check for decimals
const opSymbols = ['+', '-', '*', '/'];
const modSymbols = [
  { name: "equal", symbol: "="},
  { name: "decimal", symbol: "."},
];


const container = document.querySelector(".container");
const numPad = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const controls = document.querySelector(".controls");
const modifications = document.querySelector(".modifications");
const display = document.querySelector(".display");
const inputField = document.querySelector("#input");
const errorField = document.querySelector(".error-field");
