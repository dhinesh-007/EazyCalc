const display=document.getElementById("display");

function getInput(){
    return display.value;
}

function put(data){
    let input=document.getElementById("display").value;
    //console.log(input=="Expression Error");
    if(input === "Expression Error"){
        display.value="";
        console.log("hai");
    }
        
    if(data ==="C"){
        display.value="";
    }
    else if(data==="DEL"){
        if(input.length!=0){
            display.value=input.substring(0,input.length-1);
        }
    }
    else{
        display.value=input+data;
    }
}

const result = () => {
    let input=getInput();
    if(input!==""){
    try{
        display.value=eval(input);
        console.log(eval(input))
    }
    catch(error){
        display.value="Expression Error";
    }
}
}

display.addEventListener("keypress",()=>{

});