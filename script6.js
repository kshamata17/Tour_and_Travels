//setting default attribute to disabled minus button
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");


//taking value to increment decrement input value

var valueCount

//taking price vakue in variable
var price = document.getElementById("amount").innerText;

//price calculation from function
function priceTotal(){
    var total = valueCount * price;
    document.getElementById("amount").innerText = total
}

//plus button
document.querySelector(".plus-btn").addEventListener("click", function()
{
    //getting value of input
    valueCount = document.getElementById("quantity").value;

    //input value increment bt 1
    valueCount++;

    //setting increment input value
    document.getElementById("quantity").value = valueCount

    if(valueCount > 1){
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled");
    }

    //calling price function
    priceTotal()
})

//minus button
document.querySelector(".minus-btn").addEventListener("click", function()
{
    //getting value of input
    valueCount = document.getElementById("quantity").value;

    //input value increment bt 1
    valueCount--;

    //setting increment input value
    document.getElementById("quantity").value = valueCount

    if(valueCount == 1){
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }
    //calling price function
    priceTotal()
})