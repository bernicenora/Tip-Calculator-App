var but = document.getElementById('calculate');
var venueVal;
var venueValue;
var serviceQual = 30;
var partySize = 1;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; /* Default Slider Value*/

/* Getting the Slider Value if changed */
slider.oninput = function() {
  output.innerHTML = this.value;
  partySize = this.value;
}
but.onclick=function(){

  /* Get the value of the Bill Amount*/
  var billAmt= document.getElementById("bill-amt").value;

  /* Get the Service Rating */
  serviceQual = document.querySelector('input[name="service"]:checked').value;

var regex=/^[0-9]+$/;
  var regexPrice= /^(?:\d*\.)?\d+$/;

  if (billAmt===""){
    alert("Please Enter a Bill Amt");
    return;
  }else if((!billAmt.match(regex)) && (!billAmt.match(regexPrice))){
    console.log(regexPrice);
             alert("Please enter a valid Bill Amount");
    return;
             }
  else if ((serviceQual ==="") || (serviceQual == null)){
    alert("Please Rate the service provided");
    return;
  }else if(partySize === ""){
    partySize=1;
  }
/*alert("Bill Amount: "+billAmt);
alert("Service Quality: "+serviceQual);
alert("Party Size: "+partySize);*/


/*Calculating Tip Amount */
  //convert to floats and integers
  var total = 0;
  var billAmtFloat = parseFloat(billAmt);
  var serviceInt = parseInt(serviceQual);
  var partySizeInt = parseInt(partySize);
  //calculate Tip Amt
  total = (billAmtFloat*serviceInt)/partySizeInt;
  //round to two decimal places
  total = Math.round(total) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //alert("Total = "+total);
  document.getElementById('tip-amt').style.display="block";
  document.getElementById("tip-amt").innerHTML = total;
  }

  var clear = document.getElementById('clear');
clear.onclick = function(){
  document.getElementById("bill-amt").value = "";
 slider.value = 5;
  output.innerHTML = slider.value;
  document.getElementById("tip").innerHTML = 0.0;
}

