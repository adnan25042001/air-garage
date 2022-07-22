let btn = document.querySelectorAll(".bigBtn>div");

btn.forEach(function (ele) {
    ele.addEventListener("click", function () {
        window.location.href = "sales.html";
    });
});
