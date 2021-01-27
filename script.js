
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
const total = document.getElementById('total');


// For Phone
plusBtnPhone.addEventListener('click', () => {

    increment(phoneQuantity, showPhonPrice);

});

minusBtnPhone.addEventListener('click', () => {

    decrement(phoneQuantity, showPhonPrice);

});

// For Case
plusBtnCase.addEventListener('click', () => {

    increment(caseQuantity, showCasePrice)

});

minusBtnCase.addEventListener('click', () => {

    decrement(caseQuantity, showCasePrice);

});

// increment function
function increment(quantity, price) {
    if (quantity.value >= 10) {
        quantity.value = 10;
        alert("Minimum Requirement : 10 ");
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