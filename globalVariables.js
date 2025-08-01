let num1, num2, operator;
let stringQuery = "";
let result;
let ok = false;

//0: no errors 1: invalid expression - incomplete 2: 
let errorCode = 0;

const opSymbols = ['+', '-', '*', '/', '=', '.'];
const regexpFloat = /[+-]?([0-9]*[.])?[0-9]+/; //regular expression to check for decimals

const container = document.querySelector(".container");
const numPad = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const controls = document.querySelector(".controls");
const display = document.querySelector(".display");
const inputField = document.querySelector("#input");