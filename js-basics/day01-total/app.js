
const calcBtn = document.getElementById('calcBtn');
const resultEl = document.getElementById('result');

function calc(price,qty) {
  return price * qty;
}

calcBtn.addEventListener('click', ()=> {
 const priceEl = document.getElementById('price');
 const qtyEl = document.getElementById('qty');
 const price = Number(priceEl.value);
 const qty = Number(qtyEl.value);
 const total = calc(price,qty);
 let msg = `총액은 ${total.toLocaleString()}원 입니다.`;

 if (total >= 50000){
    msg += "무료배송"
 }else if (total === 0){
  msg = "가격/수량을 입력해주세요."
 } else {
  msg += "배송비가 발생할 수 있어요"
 }

 resultEl.textContent=msg;
})