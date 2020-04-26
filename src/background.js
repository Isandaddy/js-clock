const body = document.querySelector("body");

const IMG_NUMBER = 3;

function printImg(imgNumber) {
  const image = new Image();
  image.src = `src/images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  //prepend()메서드 는의 첫 번째 자식 앞에 Node개체 또는 DOMString개체 집합을 삽입 합니다.
  body.prepend(image);
}

function getNumber() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getNumber();
  printImg(randomNumber);
}

init();
