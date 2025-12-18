const lunchMenu = {
	name: '떡볶이',
	price: 5000,
	flavor: 'hot'
}

//1. vegan 이란 프로퍼티를 추가하고 false 를 값으로 넣으세요.
//price 를 500 증가시키세요.
//flavor 프로퍼티를 삭제하세요.
//name 프로터피를 두 가지 방식으로 출력해보세요.

lunchMenu.vegan = false;
lunchMenu.price = 5500;
delete lunchMenu.flavor;
console.log(
  lunchMenu.name,
  lunchMenu['name']
)

// 2.직사각형을 나타내는 객체를 만들어내는 Rectangle 생성자 함수를 작성하세요. 조건은 아래와 같습니다.
//각 직사각형은 width 값과 height 값을 갖습니다. describe 함수는 ‘면적: (width * height)’ 형식의 문자열을 로그로 출력합니다.

function Rectangle ( width, height) {
  this.width = width;
  this.height = height;
  this.describe = function() {
    console.log(`면적: ${this.width * this.height}`);
  }
}

//3.위 2번의 생성자 함수를 클래스로 작성해보세요. 정적 필드로 thickness 를 추가한 뒤(기본값 2) 이를 로그로 출력해보세요.

class Rectangle {
  static thickness = 2;

  constructor(width, height) {
    this.width = width;
    this.height = height;
}
  describe () {
    console.log(`면적:${this.width * this.height}`)
  }
}

//4.위 코드의 width 와 height 필드들을 private 필드로 수정한 뒤 getter와 setter를 추가하세요. setter에서는 양수만 적용되도록 작성해보세요.
