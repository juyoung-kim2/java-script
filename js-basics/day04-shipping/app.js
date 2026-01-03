//입력 검증 함수 : 가격 또는 수량이 빈값 / 0이하/ 숫자아니면 실패

const calcBtn = document.getElementById('calcBtn');
const result = document.getElementById('result');


calcBtn.addEventListener("click", ()=> {
  const priceEl = document.getElementById('price');
  const qtyEl = document.getElementById('qty');
  const price = Number(priceEl.value);
  const qty = Number(qtyEl.value);
  const calc = price * qty;
  let msg = '';
  const free_shipping_limit = 50000;

  function validateInput(price, qty) {
    if( priceEl.value === "" || qtyEl.value === "") {
      return "EMPTY"
    } else if ( Number.isNaN(price) || Number.isNaN(qty)) {
      return "NAN"
    } else if ( price <= 0 || qty <= 0 ) {
      return "NON_POSITIVE"
    } else {
      return "OK"
    }
  };
  function getShippingMessage(calc) {
    if (calc >= free_shipping_limit){
      return "무료배송"
    } else {
      return "배송비가 발생할 수 있어요."
    }
  };

  const status = validateInput(price,qty);
  const message = getShippingMessage(calc);
  const isError = status !== "OK";

  if(status === "EMPTY"){
   msg = "가격과 수량을 입력해주세요."

  } else if (status === "NAN"){
    msg = "숫자만 입력해주세요"

  } else if (status === "NON_POSITIVE") {
    msg = "0보다 큰 값을 입력해주세요."

  } else {
    msg = `총액은 ${calc.toLocaleString()}원 입니다`;
    msg += getShippingMessage(calc)
  }

  result.className = `result ${isError ? "result--error" : "result--ok"}`
  result.textContent=msg;
})