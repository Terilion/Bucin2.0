const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML =
    "Makasih ya udah beri aku kesempatan lagi untuk ada aku di hidup kamu, mafin sopian dengan setulus hati ya :)";
  gif.src =
    "https://media2.giphy.com/media/VcBBHbL7thOY9ecL80/giphy.gif?cid=ecf05e47ywszcxuew9ziupx5gia9plp0li9p2v2r05l89kxj&ep=v1_gifs_related&rid=giphy.gif&ct=g";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
