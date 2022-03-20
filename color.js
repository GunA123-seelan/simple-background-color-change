function change(){
    var r=Math.floor(Math.random()*12456578).toString(16*1);
    document.getElementById("dic").innerText=r;
    document.getElementById("dic1").innerHTML="#"+r;
    document.body.style.backgroundColor="#"+r;
}