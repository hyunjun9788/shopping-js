import { $ } from "../utils/dom.js";

class App {
  containerElement;
  buttonElement;
  inputElement;
  inputValue;

  constructor() {
    this.containerElement = $("#root");
    this.render();

    // 해보세요!
    this.buttonElement = document.querySelector("#submit-button");
    this.buttonElement.addEventListener(
      "click",
      this.onClickSubmitButton.bind(this)
    );

    this.inputElement = document.querySelector(".name-input");
    this.inputElement.addEventListener("input", this.onInput.bind(this));
  }

  render() {
    this.containerElement.innerHTML = `<div>
            <input class="name-input"/>
            <button type="button" id="cancel-button" >
                취소
            </button>
            <button type="button" id="submit-button" class="submit-style">
                클릭
            </button>
    </div >`;
  }

  onClickSubmitButton(event) {
    alert(this.inputValue);
  }

  onInput(event) {
    this.inputValue = event.target.value;
  }
}

export default App;
