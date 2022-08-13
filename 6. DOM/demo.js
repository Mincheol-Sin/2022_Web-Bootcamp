// 1. Input 요소와 남아있는 글자수를 나타내는 요소에 접근하기
const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInputElement.maxLength;

// 3. 발생할 이벤트를 함수로 선언하기
function updateRemainingCharacters(event) {
  const enteredText = event.target.value; // 입력한 값
  const enteredTextLength = enteredText.length; // 입력한 값의 글자수

  const remainingCharacters = maxAllowedChars - enteredTextLength; // 남은 글자수

  remainingCharsElement.textContent = remainingCharacters; // 남은 글자수로 콘텐츠 변환

  if (remainingCharacters == 0) {
    remainingCharsElement.classList.add("error");
    productNameInputElement.classList.add("error");
  } else if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
    remainingCharsElement.classList.remove("error");
    productNameInputElement.classList.remove("error");
  } else {
    remainingCharsElement.classList.remove("warning");
    productNameInputElement.classList.remove("warning");
  }
}

// 2. input 양식에 값이 입력될 시 이벤트 발생시키기
productNameInputElement.addEventListener("input", updateRemainingCharacters);
