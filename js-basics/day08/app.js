//입력 검증 함수 : 가격 또는 수량이 빈값 / 0이하/ 숫자아니면 실패

const calcBtn = document.getElementById('calcBtn');
const result = document.getElementById('result');
const priceEl = document.getElementById('price');
const qtyEl = document.getElementById('qty');

const state = {
  price: 0,
  qty: 0,
  status: 'EMPTY',
  message: '',
  total: 0,
  discount:0,
  shippingCost:0
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

function applyDiscount(){
  const Discount = 0.1;
  if(state.total >= 50000) {
  
     state.total= state.total - (state.total*Discount);
  }

}

function calculaterShipping() {

    if(state.total < 50000) {
      return state.shippingCost = 3000;
    } else {
      return state.shippingCost = 0;
    }

}

function getMessageByStatus() {

  switch (state.status) {
    case STATUS.EMPTY: state.message = "가격과 수량을 입력해주세요.";
    break;
    case STATUS.NAN: state.message = "숫자만 입력해주세요.";
    break;
    case STATUS.NON_POSITIVE: state.message = "0보다 큰 값을 입력해주세요.";
    break;
    default:state.message = `총액은 ${(state.total).toLocaleString()}원 입니다.`;

    if(state.shippingCost > 0){
      state.message += `배송비는 ${state.shippingCost.toLocaleString()}원 입니다.`
    } else {
      state.message += `무료배송입니다.`
    }
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
  state.total = state.price * state.qty;
  applyDiscount();
    calculaterShipping();
  getMessageByStatus();
  render();
}

function render() {
  result.textContent = state.message;
  result.className = `result ${state.status === STATUS.OK ? 'result--ok':'result--error'}`
}