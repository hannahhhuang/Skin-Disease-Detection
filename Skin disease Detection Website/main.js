document.getElementById("startButton").addEventListener( "click" ,disappear1 );
//document.getElementById("startButton").addEventListener( "click" ,timeOUt);

disappear2();

function appear1(){
document.getElementById("page1").classList.toggle("hide",false);
}
function disappear1(){
document.getElementById("page1").classList.add("hide");
alert("Please wait while we processing...")
}
function disappear2(){

    document.getElementById("page2").classList.add("hide")

}


function appear2(){
document.getElementById("page2").classList.toggle("hide",false)


}






document.getElementById("back").addEventListener( "click" ,disappear2);
document.getElementById("back").addEventListener( "click" ,appear1);


fetch("./data.json")
    .then((response)=>response.json())
    .then(function(data){
        document.querySelector("#disease").innerHTML=data[0].disease;
        document.querySelector("#description").innerHTML=data[0].description;
        document.querySelector("#treatment").innerHTML=data[0].treatment;
    })
    .catch(console.error);
