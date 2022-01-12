function enableValidation(data) {

  // Для использования в вовзращаемой функции
  const formList = Array.from(document.querySelectorAll(data.formSelector));

  // Отображение состояние некорректного ввода
  function showInputError(errorElement, inputElement, errorMessage) {
    inputElement.classList.add(data.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(data.errorClass);
  }

  // Отключение отображения состояния некорректного ввода
  function hideInputError(errorElement, inputElement) {
    inputElement.classList.remove(data.inputErrorClass);
    errorElement.classList.remove(data.errorClass);
    errorElement.textContent = '';
  }

  // Проверка необходимости отображения состояния некорректного вода
  function checkInputValidity(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
      showInputError(errorElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(errorElement, inputElement);
    }
  }

  // Проверка полей ввода на корректность
  function hasInvalidInput(inputList) {
    return inputList.some(inputElement => !inputElement.validity.valid);
  }

  // Переключение состояния кнопки, когда данные в полях ввода корректные / некорректные
  function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(data.inactiveButtonClass);
      buttonElement.setAttribute("disabled", "");
    } else {
      buttonElement.classList.remove(data.inactiveButtonClass);
      buttonElement.removeAttribute("disabled", "");
    }
  }

  // Добавление слушателей для полей ввода
  function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(data.inputSelector));
    const buttonElement = formElement.querySelector(data.submitButtonSelector);

    // Активация статуса кнопки по умолчанию
    toggleButtonState(inputList, buttonElement);

    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }

  // Добавление слушателей для полей ввода каждой формы
  function addFormEventListener() {
    formList.forEach(formElement => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  }

  // Инициализация функции
  addFormEventListener();

  // Вовзаращаемая функция для очистки ошибок ввода при каждом открытии Popup
  return function clearInputsCheck() {
    formList.forEach(element => {
      const inputList = Array.from(element.querySelectorAll(data.inputSelector));
      const buttonElement = element.querySelector(data.submitButtonSelector);
      inputList.forEach(input => {
        const errorElement = element.querySelector(`.${input.id}-error`);
        hideInputError(errorElement, input)
        toggleButtonState(inputList, buttonElement);
      })
    })
  };
}