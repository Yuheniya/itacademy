let totalCoast = 0;
let totalCount = 0;

function order(num){
    let price = 0;
    switch(num){
        case 1:{
            var priceStr = document.getElementById("priceId_1").innerText;
            price = parcePrice(priceStr);
            break;
        }
        case 2:{
            var priceStr = document.getElementById("priceId_2").innerText;
            price = parcePrice(priceStr);
            break;
        }
        case 3:{
            var priceStr = document.getElementById("priceId_3").innerText;
            price = parcePrice(priceStr);
            break;
        }
        case 4:{
            var priceStr = document.getElementById("priceId_4").innerText;
            price = parcePrice(priceStr);
            break;
        }
        case 5:{
            var priceStr = document.getElementById("priceId_5").innerText;
            price = parcePrice(priceStr);
            break;
        }
        case 6:{
            var priceStr = document.getElementById("priceId_6").innerText;
            price = parcePrice(priceStr);
            break;
        }
    }

    totalCoast += price;
    totalCount++;

    alert('Количество блюд: ' + totalCount + '\nОбщая стоимость: ' + totalCoast);
} 

function parcePrice(priceStr){
    priceStr = priceStr.replace('$', '');
    priceStr = priceStr.replace(',', '.');
    return parseFloat(priceStr);
}