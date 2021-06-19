function myFunction() {
    var min=document.getElementById("demo1").value;
    var max=document.getElementById("demo2").value;
    var mul=document.getElementById("demo3").value;
    min = parseFloat(min);
    max = parseFloat(max);
    mul = parseFloat(mul);
            
    if(!(min < max)){  
    document.getElementById('demo1').style.borderColor = "red";
    }else{
    document.getElementById('demo1').style.borderColor = "";
    }
    if(!(mul < max)){
    document.getElementById('demo2').style.borderColor = "red";
    } else{
    document.getElementById('demo2').style.borderColor = "";
    }
    if(!(mul<= min)){
    document.getElementById('demo3').style.borderColor = "red";
    } else{
    document.getElementById('demo3').style.borderColor = "";
    }
    if(!(max%mul==0)){
    document.getElementById('demo1').style.borderColor = "red";
    } else{
    document.getElementById('demo1').style.borderColor = "";
    }
    if(!(max%mul== 0)){
    document.getElementById('demo3').style.borderColor = "red";
    } else{
    document.getElementById('demo3').style.borderColor = "";
    }
    }
    