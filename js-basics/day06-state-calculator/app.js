//입력 검증 함수 : 가격 또는 수량이 빈값 / 0이하/ 숫자아니면 실패

const calcBtn = document.getElementById('calcBtn');
const result = document.getElementById('result');
const priceEl = document.getElementById('price');
const qtyEl = document.getElementById('qty');

const state = {
  price: 0,
  qty: 0,
  status: 'EMPTY',
  message:''
}

function validateInput(price, qty) {
  if (priceEl.value === "" || qtyEl.value === "") {
    return "EMPTY"
  } else if (Number.isNaN(price) || Number.isNaN(qty)) {
    return "NAN"
  } else if (price <= 0 || qty <= 0) {
    return "NON_POSITIVE"
  } else {
    return "OK"
  }
};


function getMessageByStatus() {

  if (state.status === "EMPTY") {
    state.message = "가격과 수량을 입력해주세요."
  } else if (state.status === "NAN") {
    state.message = "숫자만 입력해주세요"
  } else if (state.status === "NON_POSITIVE") {
    state.message = "0보다 큰 값을 입력해주세요."
  } else {
    state.message = `총액은 ${(state.price * state.qty).toLocaleString()}원 입니다`
  }
  return state.message;
}

priceEl.addEventListener('input', handler);
qtyEl.addEventListener('input', handler);
calcBtn.addEventListener('click', handler);


function handler() {
  state.price = Number(priceEl.value);
  state.qty = Number(qtyEl.value);
  state.status = validateInput(state.price, state.qty);
  getMessageByStatus();
  render();
}

function render() {
  result.textContent = state.message;
  result.className = `result ${state.status === 'OK' ? 'result--ok':'result--error'}`
}

