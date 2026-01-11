//입력 검증 함수 : 가격 또는 수량이 빈값 / 0이하/ 숫자아니면 실패

const calcBtn = document.getElementById('calcBtn');
const result = document.getElementById('result');
const priceEl = document.getElementById('price');
const qtyEl = document.getElementById('qty');

const state = {
  price: 0,
  qty: 0,
  status: 'EMPTY'
}

const STATUS = {
  EMPTY: 'EMPTY',
  NAN: 'NAN',
  NON_POSITIVE: 'NON_POSITIVE',
  OK: 'OK'
}


function validateInput(price, qty) {
  if (!price || !qty) {
    return "EMPTY"
  } else if (isNaN(price) || isNaN(qty)) {
    return "NAN"
  } else if (price <= 0 || qty <= 0) {
    return "NON_POSITIVE"
  } else {
    return "OK"
  }
};

function getTotal(price, qty) {
  return price * qty;
}

function getDiscount(total) {

  return total >= 5000 ? total * 0.9 : total;
}

function getShippingCost(total) {
  if (total >= 50000) {
    return 0; 
  } else {
    return 3000;
  }
}

function getMessageByStatus(status, total, shippingCost) {

  let message = '';

  switch (status) {
    case STATUS.EMPTY:message = "가격과 수량을 입력해주세요.";
    break;
    case STATUS.NAN:message = "숫자만 입력해주세요.";
    break;
    case STATUS.NON_POSITIVE:message = "0보다 큰 값을 입력해주세요.";
    break;
    default:message = `총액은 ${total.toLocaleString()}원 입니다.`;

    if(shippingCost > 0){
      message += `배송비는 ${shippingCost.toLocaleString()}원 입니다.`
    } else {
      message += `무료배송입니다.`
    }
  }
  return message;
}

priceEl.addEventListener('input', handler);
qtyEl.addEventListener('input', handler);
calcBtn.addEventListener('click', handler);


function handler() {
  state.price = Number(priceEl.value);
  state.qty = Number(qtyEl.value);
  state.status = validateInput(state.price, state.qty);

  render();
}

function render() {

  const total = getTotal(state.price, state.qty);
  const discountedTotal = getDiscount(total);
  const shippingCost = getShippingCost(discountedTotal);

  result.textContent = getMessageByStatus(state.status,discountedTotal,shippingCost);
  result.className = `result ${state.status === STATUS.OK ? 'result--ok':'result--error'}`
}