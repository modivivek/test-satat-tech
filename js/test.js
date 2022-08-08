var para="";
var skip=0;

const getDataFromUI=()=>{
 para=document.querySelector("#input-para").value;
skip=document.querySelector("#skip-count").value;

}


document.querySelector(".run-btn").addEventListener("click",(event)=>{
    // get data from UI
    getDataFromUI();
    // reverse the string

document.querySelector("#output-para").value=reverseParagraph();
})



//var para="Hi there.My name is Sam.This is my lucky day.I like coding so much.This is it."


function reverseParagraph(){
    let arr=[];
    let temp_res=""
    let i=0,j=0,k=0;
    let result="";
    // 1) split the paragram by .
arr=para.trim().split(".")


for(i=0;i<arr.length;i++){
    // split by spaces to get each word
    temp_res=arr[i].trim().split(" ")
    if(skip == 0){
        for(j=temp_res.length-1;j>=0;j--){
            result=result+" "+ temp_res[j];
        }
        return result;
    }
    else{
       // temp_res.shift()
        // if skip > 0 
        console.log("temp_res---------",temp_res)
    
       // if sentence is length of skip  then concat as it is
        if(temp_res.length == skip){
            result+=temp_res.join(" ")
        }
        else{
        // reverse the substring from skip to 0 using loop
        for(j=skip-1;j >= 0;j--){
            result=result+" "+temp_res[j]
        
        }
    }
    
         //concate rest string in each sentence (Last words)
        console.log("skip",skip)
        for(k=skip;k <=temp_res.length-1;k++){
            result=result+" "+temp_res[k];
           // console.log("K value",k)
           //console.log("Other part",temp_res[k])
        }
        
        result=result+"."+" ";
    
    }

}
return result
}
