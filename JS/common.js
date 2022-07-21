
let btn=document.querySelectorAll(".bigBtn");

console.log(btn)

btn.forEach(function(ele){
    ele.addEventListener("click",function(){
        window.location.href="sales.html"
    })
})