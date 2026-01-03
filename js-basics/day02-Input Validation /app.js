

const calcBtn = document.getElementById('calcBtn');
const result = document.getElementById('result');


calcBtn.addEventListener("click", ()=> {
  const priceEl = document.getElementById('price');
  const qtyEl = document.getElementById('qty');
  const price = Number(priceEl.value);
  const qty = Number(qtyEl.value);
  const calc = price * qty;
  let msg = '';

    function validateInput(price, qty) {
   return !(
    Number.isNaN(price) ||
    Number.isNaN(qty) ||
    price <= 0 ||
    qty <= 0
  );
  }

  const isValid =  validateInput(price,qty);

  if(isValid){
    msg = `총액은 ${calc}원 입니다`
  } else {
    msg= "가격과 수량을 올바르게 입력해주세요"
  }
  result.textContent = msg;
})