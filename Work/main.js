const action = document.getElementById("actionBar");
const modalP = document.getElementById("modalPro");
const star = document.getElementById("star");
const starred = document.getElementById("starred");


star.addEventListener("click", function () {
    star.style = "display: none;";
    starred.style = "display: block;";
});

action.addEventListener("click", () => {
    modalP.style = "transform: scaleY(1);";
});