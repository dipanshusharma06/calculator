function handleclick(event){
    var input= document.getElementById("expression");
    if(event=="="){
        let result=eval(input.value);
        input.value=result;
    }else if(event=="clear"){
        input.value="";
    }
    else{
        input.value+=event;
        console.log(input.value);
    }
}
