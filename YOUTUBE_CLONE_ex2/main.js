const moreBtn = document.querySelector(
  ".info .metadata .titleAndMoreBtn .moreBtn"
);
const title = document.querySelector(".info .metadata .titleAndMoreBtn .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
