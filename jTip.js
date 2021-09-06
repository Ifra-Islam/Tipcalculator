
function calculateTip(){

    
    let tipAmount= document.getElementById("tipinput").value;
    let billAmount = document.getElementById("billinput").value;
    let billCard = document.getElementById("bill-card");


    let billAmountN = parseFloat(billAmount);
    
   
    let bill = document.getElementById('billShow');
    let tip = document.getElementById('tipShow');
    let total = document.getElementById('totalShow');

    // calculations
    let totalAmount = tipAmount * billAmountN;
    let totalBill = totalAmount + billAmountN;


    tip.innerHTML = "$"+ totalAmount.toFixed(2);
    bill.innerHTML =  "$"+ billAmountN.toFixed(2);
    total.innerHTML = "$"+ totalBill.toFixed(2);
    
    // show the bill info 
    billCard.style.display = "block";
    
}
 