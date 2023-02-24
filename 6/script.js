const products = document.querySelectorAll(".product");
const home = document.getElementById("hidden-button");
home.addEventListener("click", (ev) => {
  ev.preventDefault();
  window.location.href = "https://burov96.github.io/Mini-projects/";
});
window.addEventListener("scroll", checker);
checker()
function checker(){
  const trigger = window.innerHeight;
  products.forEach((product) => {
    const productTopSide = product.getBoundingClientRect().bottom*1.15;
    if(productTopSide < trigger){
    product.classList.add("show")}
    else{product.classList.remove("show")}
  });
};
