// let totalCoast = 0;
// let totalCount = 0;

// function order(num){
//     let price = 0;
//     switch(num){
//         case 1:{
//             var priceStr = document.getElementById("priceId_1").innerText;
//             price = parcePrice(priceStr);
//             break;
//         }
//         case 2:{
//             var priceStr = document.getElementById("priceId_2").innerText;
//             price = parcePrice(priceStr);
//             break;
//         }
//         case 3:{
//             var priceStr = document.getElementById("priceId_3").innerText;
//             price = parcePrice(priceStr);
//             break;
//         }
//         case 4:{
//             var priceStr = document.getElementById("priceId_4").innerText;
//             price = parcePrice(priceStr);
//             break;
//         }
//         case 5:{
//             var priceStr = document.getElementById("priceId_5").innerText;
//             price = parcePrice(priceStr);
//             break;
//         }
//         case 6:{
//             var priceStr = document.getElementById("priceId_6").innerText;
//             price = parcePrice(priceStr);
//             break;
//         }
//     }

//     totalCoast += price;
//     totalCount++;

//     document.getElementById('totalprice').innerHTML = "Total price: " + totalCoast;
//     alert('Количество блюд: ' + totalCount + '\nОбщая стоимость: ' + totalCoast);
// } 

// function parcePrice(priceStr){
//     priceStr = priceStr.replace('$', '');
//     priceStr = priceStr.replace(',', '.');
//     return parseFloat(priceStr);
// }

let totalCoast = 0;
let totalCount = 0;
let price = 0;
let quantity = 0;
 
function order(n){
    let i=0;
    let name = "";

    if (i = n) {
        let priceCard = document.getElementsByClassName('price')[n-1].innerText;
        let priceName = document.getElementsByClassName('product-name')[n-1].innerText;
        let tab = document.getElementById('basket-body');


        let newRow = tab.insertRow(-1);
        let cell2 = newRow.insertCell(0);
        let cell4 = newRow.insertCell(1);

        name += priceName;
        price = parcePrice(priceCard);
        totalCoast += price;
        quantity++;

        document.getElementById('quantity').innerHTML = "Quantity: " + quantity;
        cell4.innerHTML = priceCard;
        cell2.innerHTML =  name;
        document.getElementById('totalprice').innerHTML = "Total price: " + totalCoast + "$";
    } else {
        i++
    }
    
}

function parcePrice(priceCard){
        priceStr = priceCard.replace('$', '');
        priceStr = priceCard.replace(',', '.');
        return parseFloat(priceCard);
    }