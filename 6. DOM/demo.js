// 1. Input 요소와 남아있는 글자수를 나타내는 요소에 접근하기
let productNameInputElement = document.getElementById("product-name");
let remainningCharsElement = document.getElementById("remaining-chars");

let maxAllowedChars = productNameInputElement.maxLength;

// 3. 발생할 이벤트를 함수로 선언하기
function updateRemainingCharacters(event) {
  let enteredText = event.target.value; // 입력한 값
  let enteredTextLength = enteredText.length; // 입력한 값의 글자수

  let remainingCharacters = maxAllowedChars - enteredTextLength; // 남은 글자수

  remainningCharsElement.textContent = remainingCharacters; // 남은 글자수로 콘텐츠 변환
}

// 2. input 양식에 값이 입력될 시 이벤트 발생시키기
productNameInputElement.addEventListener("input", updateRemainingCharacters);
