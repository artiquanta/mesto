// Данные для валидации
const validationData = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input_state_error',
  errorClass: 'popup__input-error_active'
};

// Данные карточек
const initialCards = [
  {
    title: 'Красноярские Столбы',
    link: './images/cards__stolby.jpg'
  },
  {
    title: 'Озеро ледникового происхождения Селигер',
    link: './images/cards__seliger.jpg'
  },
  {
    title: 'Солёное озеро Баскунчак',
    link: './images/cards__baskunchak.jpg'
  },
  {
    title: 'Плато Бермамыт',
    link: './images/cards__bermamyt.jpg'
  },
  {
    title: 'Мраморные озёра Рускеала, Республика Карелия',
    link: './images/cards__ruskeala.jpg'
  },
  {
    title: 'Озеро Байкал',
    link: './images/cards__baikal.jpg'
  }
];

export { validationData, initialCards };