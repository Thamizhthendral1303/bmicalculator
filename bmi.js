var he = document.getElementById("height")
var we = document.getElementById("weight")

var res = document.getElementById("result")

function calculate(){
    var hi_val = Number(he.value);
    var we_val = Number(we.value);

   if(hi_val == "" && we_val == ""){
    alert("Enter Any Values....")
   }
   else{
     var bmi = we_val /((hi_val / 100)**2);

    if(bmi < 18){
res.innerText = "Your Are Lean ... you need to gain weight"
    }
    else if(bmi <= 25 && bmi >=18){
        res.innerText = "Your Are Perfect in fit condition"
    }
    else if(bmi > 25){
        res.innerText = "Your fat and too much weight"
    }else{
        alert("Enter number Only....")
    }
   } 
}

function reset() {
    res.innerText=null

    he.value = null
    we.value = null

    
}