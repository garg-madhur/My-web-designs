function ScreenClear(){
    document.getElementById("result").value = ""

}

function ButtonClicked( value){
    document.getElementById("result").value += value

}

function Answer(){
    if(document.getElementById("result").value != ""){
        document.getElementById("result").value = eval(document.getElementById("result").value)
    }

    else{
        document.getElementById("result").value = ""
    }
    

}