
// +/- button's 
const minusBtnPhone = document.getElementById('minusBtnPhone');
const plusBtnPhone = document.getElementById('plusBtnPhone');
const minusBtnCase = document.getElementById('minusBtnCase');
const plusBtnCase = document.getElementById('plusBtnCase');

// for <input>
const phoneQuantity = document.getElementById('phoneQuantity');
const caseQuantity = document.getElementById('caseQuantity');

// for <span> 
const showPhonPrice = document.getElementById('showPhonPrice');
const showCasePrice = document.getElementById('showCasePrice');

const subtotal = document.getElementById('subtotal');
const tax = document.getElementById('tax');
const total = document.getElementById('total');


// For Phone
plusBtnPhone.addEventListener('click', () => {

    handelProductChange(phoneQuantity, true);

    //increment(phoneQuantity, showPhonPrice);

});

minusBtnPhone.addEventListener('click', () => {

    handelProductChange(phoneQuantity, false);

    //decrement(phoneQuantity, showPhonPrice);

});

// For Case
plusBtnCase.addEventListener('click', () => {

    handelProductChange(caseQuantity, true);

    //increment(caseQuantity, showCasePrice)

});

minusBtnCase.addEventListener('click', () => {

    handelProductChange(caseQuantity, false);

    //decrement(caseQuantity, showCasePrice);

});


function handelProductChange(product, isIncrease) {

    let productCount = parseInt(product.value);
    let productNewCount = productCount;

    if (isIncrease == false && productCount > 0) {
        productNewCount--;
    } 
    if (isIncrease == true){
        productNewCount++;        
    }

    product.value = productNewCount;

    //=============================================
    let productTotal = 0;
    if (product == phoneQuantity) {
        productTotal = productNewCount * 1200;
        showPhonPrice.innerText = productTotal;
    } else {
        productTotal = productNewCount * 60;
        showCasePrice.innerText = productTotal;
    }
    totalCalculate()
}

function totalCalculate() {

    const phones = getInputValue(phoneQuantity);
    const cases =  getInputValue(caseQuantity);

    const totalPrice = phones * 1200 + cases * 60;
    subtotal.innerText = totalPrice;

    const totalTax = totalPrice * 0.1;
    tax.innerText = '$' + totalTax ;

    const grandTotal = totalPrice + totalTax ;
    total.innerText = grandTotal ;
}

function getInputValue(product) {

    let count = parseInt(product.value);

    return count;

}



// increment function
function increment(quantity, price) {
    if (quantity.value >= 10) {
        quantity.value = 10;
        alert("Maximum Requirement : 10 ");
    } else {

        // increment by clicking...
        quantity.value = parseInt(quantity.value) + 1;

        // price going to increase -> just by add same prise with itself 
        if (price.innerText > 1000) {
            price.innerText = parseInt(price.innerText) + 1200;
            total.innerText = parseInt(total.innerText) + 1200;
        } else {
            console.log(total.innerText);
            price.innerText = parseInt(price.innerText) + 60;
            total.innerText = parseInt(total.innerText) + 60;
        }

    }
}

// decrement function
function decrement(quantity, price) {
    if (quantity.value <= 1) {
        quantity.value = 1;
        alert("Minimum Requirement : 1 ");
    } else {

        // decrement by clicking...
        quantity.value = parseInt(quantity.value) - 1;

        // price going to decrease
        if (price.innerText > 1000) {
            price.innerText = parseInt(price.innerText) - 1200;
            total.innerText = parseInt(total.innerText) - 1200;

        } else {
            price.innerText = parseInt(price.innerText) - 60;
            total.innerText = parseInt(total.innerText) - 60;
        }

    }
}