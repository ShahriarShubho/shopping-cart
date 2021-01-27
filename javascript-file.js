const plusButton = document.getElementById("plusBtn");
plusButton.addEventListener("click", function(){
    numberOfProduct("numberOfPhone", 1);
    takaCount("addTaka", 1219);
    takaCount("subTotalTaka", 1219);
    takaCount("totalTaka", 1219);

    // const numberOfPhone = document.getElementById("numberOfPhone").value;
    // phoneNumber = parseFloat(numberOfPhone);
    // const increasingNumber = phoneNumber + 1;
    // document.getElementById("numberOfPhone").value = increasingNumber;
  
})

const secondPlusButton = document.getElementById("secondPlusBtn");
secondPlusButton.addEventListener("click", function(){
    numberOfProduct("numberOfCase", 1);
    takaCount("addCaseTaka", 59)
    takaCount("subTotalTaka", 59)
    takaCount("totalTaka", 59)
   
})

const minusButton = document.getElementById("minusBtn");
minusButton.addEventListener("click", function(){
    numberOfProduct("numberOfPhone", -1)
    takaCount("addTaka", -1219);
    takaCount("subTotalTaka", -1219);
    takaCount("totalTaka", -1219);

})

const secondMinusButton = document.getElementById("secondMinusBtn");
secondMinusButton.addEventListener("click", function(){
    numberOfProduct("numberOfCase", -1);
    takaCount("addCaseTaka", -59);
    takaCount("subTotalTaka", -59);
    takaCount("totalTaka", -59);

})

function takaCount(id, amount){

    const numberOfPhone = document.getElementById(id).innerText;
    phoneNumber = parseFloat(numberOfPhone);
    const increasingNumber = phoneNumber + amount;
    const result = document.getElementById(id).innerText = increasingNumber;
    return result;
}

// function addCaseTaka(id){

//     const numberOfPhone = document.getElementById(id).innerText;
//     phoneNumber = parseFloat(numberOfPhone);
//     const increasingNumber = phoneNumber + 59;
//     document.getElementById(id).innerText = increasingNumber;
// }


function numberOfProduct(id, number){

    const numberOfPhone = document.getElementById(id).value;
    phoneNumber = parseFloat(numberOfPhone);
    const increasingNumber = phoneNumber + number;
    const product = document.getElementById(id).value = increasingNumber;
    return product;
}

// function clickPlus(id){

//     const numberOfPhone = document.getElementById(id).value;
//     phoneNumber = parseFloat(numberOfPhone);
//     const increasingNumber = phoneNumber + 1;
//     document.getElementById(id).value = increasingNumber;
// }

