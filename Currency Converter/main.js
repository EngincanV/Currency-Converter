"use strict";  
        function run() {
            let obj, obj2, xmlRequest, xmlReq2, result, choose, choose2, amount;
            
            amount = document.getElementById("amount").value;
            result = document.getElementById("result");
            choose = document.getElementById("choose").value;
            choose2 = document.getElementById("choose2").value;

            xmlRequest = new XMLHttpRequest();
            xmlRequest.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                    obj = JSON.parse(this.responseText);
                    if(choose == "USD" && choose2 == "EUR" && !isNaN(amount))
                    {
                        result.value = obj["quotes"]["USDEUR"] * amount;
                    }
                    if(choose == "USD" && choose2 == "GBP" && !isNaN(amount))
                    {
                        result.value = obj["quotes"]["USDGBP"] * amount;
                    }
                    if(choose == "USD" && choose2 == "CAD" && !isNaN(amount))
                    {
                        result.value = obj["quotes"]["USDCAD"] * amount;
                    }
                    if(choose == "USD" && choose2 == "TRY" && !isNaN(amount)) 
                    {
                        result.value = obj["quotes"]["USDTRY"] * amount;
                    }
                    if(choose == "USD" && choose2 == "PLN" && !isNaN(amount)) 
                    {
                        result.value = obj["quotes"]["USDPLN"] * amount;
                    }
                    if(choose == "USD" && choose2 == "RUB" && !isNaN(amount))
                    {
                        result.value = obj["quotes"]["USDRUB"] * amount;
                    }
                    if(choose == choose2) alert("You can't pick the same currencies");
                    
                }
            }
            xmlRequest.open("GET", "http://apilayer.net/api/live?access_key=9650810a5e03aa575d31a542290221d7", true);
            xmlRequest.send();
            
            xmlReq2 = new XMLHttpRequest();
            xmlReq2.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                    obj2 = JSON.parse(this.responseText);
                    if(choose == "EUR" && choose2 == "USD" && !isNaN(amount))
                    {
                        result.value = obj2["rates"]["USD"] * amount;
                    }
                    if(choose == "EUR" && choose2 == "GBP" && !isNaN(amount))
                    {
                        result.value = obj2["rates"]["GBP"] * amount;
                    }
                    if(choose == "EUR" && choose2 == "CAD" && !isNaN(amount))
                    {
                        result.value = obj2["rates"]["CAD"] * amount;
                    }
                    if(choose == "EUR" && choose2 == "TRY" && !isNaN(amount)) 
                    {
                        result.value = obj2["rates"]["TRY"] * amount;
                    }
                    if(choose == "EUR" && choose2 == "PLN" && !isNaN(amount)) 
                    {
                        result.value = obj2["rates"]["PLN"] * amount;
                    }
                    if(choose == "EUR" && choose2 == "RUB" && !isNaN(amount))
                    {
                        result.value = obj2["rates"]["RUB"] * amount;
                    }
                }
            }
            xmlReq2.open("GET", "https://api.exchangeratesapi.io/latest?base=EUR", true);
            xmlReq2.send();
            result.value = "";
        }
        