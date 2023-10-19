const images = ["illustration", "character", "bamboo", "bamboo_hold", "back"];
const description = ["パンダのイラスト",
                        "パンダのキャラクター",
                        "笹の葉とパンダ",
                        "笹を持つパンダ",
                        "後ろ向きのパンダ"];

const myImage = document.querySelector("img");
const myParagraph = document.querySelector("p");
const myButton = document.querySelector("button");
const userName = document.querySelector("h3");

const setUserName = () => {
  const myName = prompt("あなたの名前を入力してください。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    userName.textContent = `userName : ${myName}`;
  }
}

myImage.onclick = () => {
  const rand = Math.floor(Math.random() * 100) % 5;

  myImage.setAttribute("src", `images/${images[rand]}.png`);
  myImage.setAttribute("alt", `${images[rand]} panda`);

  myParagraph.textContent = description[rand]
};

myButton.onclick = () => {
  setUserName();
};


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  userName.textContent = `UserName：${storedName}`;
}