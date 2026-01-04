//입력 검증 함수 : 가격 또는 수량이 빈값 / 0이하/ 숫자아니면 실패

const calcBtn = document.getElementById('calcBtn');
const result = document.getElementById('result');
const priceEl = document.getElementById('price');
const qtyEl = document.getElementById('qty');


function getValues() {
  return {
    price: Number(priceEl.value),
    qty: Number(qtyEl.value)
  };
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

function getMessageByStatus(status, price, qty) {
  let msg = '';

  if (status === "EMPTY") {
    msg = "가격과 수량을 입력해주세요."
  } else if (status === "NAN") {
    msg = "숫자만 입력해주세요"
  } else if (status === "NON_POSITIVE") {
    msg = "0보다 큰 값을 입력해주세요."
  } else {
    msg = `총액은 ${(price*qty).toLocaleString()}원 입니다`
  }
  return msg;
}

priceEl.addEventListener('input', handler);
qtyEl.addEventListener('input', handler);
calcBtn.addEventListener('click', handler);


function handler() {
  const {price,qty} = getValues();
  const status = validateInput(price, qty);
  const msg = getMessageByStatus(status, price, qty);

  result.textContent = msg;
  result.className = `result ${status === "OK" ? "result--ok" : "result--error"}`;
}

