var para="";
var skip=0;
const getDataFromUI=()=>{
para=document.querySelector("#input-para").value;
skip=document.querySelector("#skip-count").value;
console.log("para",para,"skip count",skip)
}
getDataFromUI();

document.querySelector(".run-btn").addEventListener("click",(event)=>{
    // get data from UI
    getDataFromUI();
    // reverse the string
const result=reverseParagraph()
document.querySelector("#output-para").value=result;
})



//var para="Hi there.My name is Sam.This is my lucky day.I like coding so much.This is it."


function reverseParagraph(){
    let arr=[];
    
    let i=0,j=0,k=0;
    let result=""
    // 1) split the paragram by .
arr=para.split(".")
console.log("split by dot",arr)

for(i=0;i<arr.length;i++){
    let temp_res=""
    if(skip == 0){
        result+=arr[i];
        
    }
    else{
        // if skip > 0 
        temp_res=arr[i].split(" ")
    

        // reverse the substring from skip to 0 using loop
        for(j=skip;j>=0;j--){
            result+=" "+temp_res[j]
        
        }
        //concate rest string in each sentence (Last words)
        console.log("skip",skip)
        for(k=skip;k<temp_res.length;k++){
            result+=" "+temp_res[k];
            console.log("Other part",temp_res[k])
        }
        
    }

}
return result;
}
