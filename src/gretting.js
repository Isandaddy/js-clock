const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector("h4");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  //setItem의 첫번째 인자는 key 두번째 인자는 value
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  console.log(event);
  //이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지않고 그 이벤트를 취소합니다.
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  //classList선택한 엘리먼트의 클래스를 읽어오고 .add(지정값)로 클래스를 추가할수 있다.
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
