let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    li.innerText = inp.value;
    li.appendChild(delBtn);
    ul.appendChild(li);
    inp.value = "";
});
// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     ul.addEventListener("click", function (e) {
//         e.target.parentElement.remove();
//     })
// };
ul.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    });