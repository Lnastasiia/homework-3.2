    

let card = prompt('Введите номер банковской карты');

card = card.replace(/\s/g, '');
console.log(card);

let arrCard = card.split('');
console.log(arrCard);

let arrBin = arrCard.slice(0, 6).join("");
console.log(arrBin);

let arrTwo = arrCard.slice(0, 2).join("");
console.log(arrTwo);

let arrFour = arrCard.slice(0, 4).join("");
console.log(arrFour);

let arrcardRev = arrCard.reverse().map(i => +i);
console.log(arrcardRev);

let sum = 0;

for(let i = 0; i < arrcardRev.length; i++){
    if(i % 2 == 0){
        sum = sum + arrcardRev[i];
    }else {
        let double = arrcardRev[i] * 2;
        sum = sum +(double > 9 ? double - 9 : double);
    }
}
let isCorrect = sum % 10 == 0;
console.log(sum);
console.log(`is Correct:`, isCorrect);


if(card.length >= 13 && card.length <= 19 && arrBin[0] == 4 && isCorrect == true){

    console.log(`Карта принадлежит платежной системе VISA`);

}else if(card.length == 15 && (arrTwo == 34 || arrTwo == 37) && isCorrect == true){

    console.log(`Карта принадлежит платежной системе American Express`);

}else if(card.length >= 16 && card.length <= 19 && (arrFour == 5018 || arrFour == 5020 || arrFour == 5038 || arrFour == 5893 || arrFour == 6304 || arrFour == 6759 || arrFour == 6761 || arrFour == 6762 || arrFour == 6763) && isCorrect == true){

    console.log(`Карта принадлежит платежной системе Maestro`);

}else if(card.length == 16 && (arrTwo >= 51 && arrTwo <= 55) || (arrBin >= 222100 && arrBin <= 272099) && isCorrect == true){

    console.log(`Карта принадлежит платежной системе MasterCard`);

}else if(card.length >= 13 && card.length <= 19 && isCorrect == true){

    console.log(`Карта принадлежит другой платежной системе`);
}



