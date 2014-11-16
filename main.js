var v1 = 600; //fridge
var v2 = 290; //television
var v3 = 50; //laptop
var v4 = 300; //desktop
var v5 = 375; //fan
var v6 = 200; //heater
var v7 = 1000; //microwave
var v8 = 10; //phone charger
var v9 = 300; //coffeemaker 
var wattsArr = [v1,v2,v3,v4,v5,v6,v7,v8,v9];
var total = 0;
var kwhNC = .102; //kwh
 
function getData(){
    var i = 1;
    while(i<=9){
        var iden = "onOrNah" + i;
        var hr = "hour" + i;
        var check = document.getElementById(iden).checked;
            if (check){
                var kw = wattsArr[i-1]/1000;
                var hours = document.getElementById(hr).value;
                console.log(kw);
                console.log(hours);
                total += kw*hours*kwhNC;
            }
        i++;
    }
    total = Math.round(total*100)/100
    document.getElementById("result").innerHTML = "$" + total;
}