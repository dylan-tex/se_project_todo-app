import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  getInputValues() {
    const formData = new FormData(this._popupForm);
    const values = {};
    formData.forEach((value, key) => {
      values[key] = value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      if (!this._popupForm.checkValidity()) {
        return;
      }

      this._handleFormSubmit(this.getInputValues());
    });
  }
}
export default PopupWithForm;
