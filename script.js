let result=document.getElementById("input")

let calci=(number)=>{
    result.value+=number

}
let output=()=>
{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("enter the valid result")
    }
}
let clear=()=>{
    result.value=""
}
function del(){
    result.value=result.value.slice(0,-1);
}
