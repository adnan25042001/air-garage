let btn = document.querySelectorAll(".bigBtn>div");

btn.forEach(function (ele) {
    ele.addEventListener("click", function () {
        window.location.href = "management.html";
    });
});

let changeBtn = document.querySelectorAll("#dashboard>div>button");

changeBtn.forEach(function (ele) {
    ele.addEventListener("click", function () {
        if (ele.innerHTML == "Dashboard") {
            // ele.style.backgroundColor="#f4f6f8"
            document.querySelector("#dashboard>div>img").src =
                "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad548421171b59d3dec8b7_dash.png";
        }
        if (ele.innerHTML == "Daily Performance") {
            document.querySelector("#dashboard>div>img").src =
                "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad55d0b5fc492169126b7a_graphs.png";
        }
        if (ele.innerHTML == "Online Listing Aggregation") {
            document.querySelector("#dashboard>div>img").src =
                "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad55d0cf2e6bf5f160cdb6_rentals.png";
        }
    });
});
