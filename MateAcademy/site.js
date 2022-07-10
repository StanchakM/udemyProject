
let amount = 15;
//Вартість печеня:
let cookiePrice = 7;

//Вартість цукорок
let candyPrice = 8;

// Після покупки печива залишок:
let rest = amount - cookiePrice;

//Чи зможу я купити печиво та цукорки?
if (rest >= candyPrice) {
    document.write('I have enought money')
} else{
    document.write('I do not have enough money')
}