export default class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._inputList = Array.from(formElement.querySelectorAll(data.inputSelector));
    this._buttonElement = formElement.querySelector(data.submitButtonSelector);
    this._inactiveButtonClass = data.inactiveButtonClass;
  }

  _setFormEventListener() { // отменяем стандартное поведение формы
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }

  _setInputEventListener() { // добавление слушателей
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._input = inputElement;
        this._checkInputValidity();
        this._toggleButtonState();
      });
    });
  }

  _showInputError() { // отображение ошибок валидации
    this._errorElement = this._formElement.querySelector(`.${this._input.id}-error`);
    this._input.classList.add(this._inputErrorClass);
    this._errorElement.textContent = this._input.validationMessage;
    this._errorElement.classList.add(this._errorClass)
  }

  _hideInputError() { // скрытие ошибок валидации
    this._errorElement = this._formElement.querySelector(`.${this._input.id}-error`);
    this._input.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass)
    this._errorElement.textContent = '';
  }

  _checkInputValidity() { // проверка корректности ввода в поле ввода
    if (!this._input.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  }

  _hasInvalidInput() { // проверка наличия некорректно введённого поля ввода
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  }

  _toggleButtonState() { // переключатель состояния кнопки Submit
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", "");
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled", "");
    }
  }

  cleanErrors() { // очищаем ошибки поля ввода при инциализации открытия popup
    this._inputList.forEach(inputElement => {
      this._input = inputElement;
      this._hideInputError();
      this._toggleButtonState();
    });
  }

  enableValidation() { // включение валидации формы
    this._setFormEventListener();
    this._setInputEventListener();
    this._toggleButtonState();
  }
}
