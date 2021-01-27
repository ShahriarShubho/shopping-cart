const plusButton = document.getElementById("plusBtn");
plusButton.addEventListener("click", function(){
    clickPlus("numberOfPhone");
    addTaka("addTaka", 1219);
    addTaka("subTotalTaka", 1219);
    addTaka("totalTaka", 1219);

    // const numberOfPhone = document.getElementById("numberOfPhone").value;
    // phoneNumber = parseFloat(numberOfPhone);
    // const increasingNumber = phoneNumber + 1;
    // document.getElementById("numberOfPhone").value = increasingNumber;
  
})

const secondPlusButton = document.getElementById("secondPlusBtn");
secondPlusButton.addEventListener("click", function(){
    clickPlus("numberOfCase");
    addTaka("addCaseTaka", 59)
    addTaka("subTotalTaka", 59)
    addTaka("totalTaka", 59)
   
})

const minusButton = document.getElementById("minusBtn");
minusButton.addEventListener("click", function(){
    const value = 
    clickMinus("numberOfPhone")
    addTaka("addTaka", -1219);
    addTaka("subTotalTaka", -1219);
    addTaka("totalTaka", -1219);

})

const secondMinusButton = document.getElementById("secondMinusBtn");
secondMinusButton.addEventListener("click", function(){
    clickMinus("numberOfCase");
    addTaka("addCaseTaka", -59);
    addTaka("subTotalTaka", -59);
    addTaka("totalTaka", -59);

})

function addTaka(id, value){

    const numberOfPhone = document.getElementById(id).innerText;
    phoneNumber = parseFloat(numberOfPhone);
    const increasingNumber = phoneNumber + value;
    const result = document.getElementById(id).innerText = increasingNumber;
    return result;
}

// function addCaseTaka(id){

//     const numberOfPhone = document.getElementById(id).innerText;
//     phoneNumber = parseFloat(numberOfPhone);
//     const increasingNumber = phoneNumber + 59;
//     document.getElementById(id).innerText = increasingNumber;
// }


function clickMinus(id){

    const numberOfPhone = document.getElementById(id).value;
    phoneNumber = parseFloat(numberOfPhone);
    const increasingNumber = phoneNumber - 1;
    document.getElementById(id).value = increasingNumber;
}

function clickPlus(id){

    const numberOfPhone = document.getElementById(id).value;
    phoneNumber = parseFloat(numberOfPhone);
    const increasingNumber = phoneNumber + 1;
    document.getElementById(id).value = increasingNumber;
}

