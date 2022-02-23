export default class Card {
  constructor(data, cardSelector, callBack) {
    this._cardSelector = cardSelector;
    this._title = data.title;
    this._link = data.link;
    this._callBack = callBack;
  }

  _getTemplate() { // Получаем шаблон карточки
    const cardTemplateElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);
    return cardTemplateElement;
  }

  _handleRemoveCard() { // удаление карточки
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleToggleLike() { // изменение состояния сердечка на карточке
    this._cardElement.querySelector('.cards__like-btn').classList.toggle('cards__like-btn_active');
  }

  _setEventListeners() { // добавление слушателей
    // Слушатель кнопки удаления карточки
    this._cardElement.querySelector('.cards__remove-btn').addEventListener('click', () => {
      this._handleRemoveCard();
    });

    // Слушатель кнопки сердечка
    this._cardElement.querySelector('.cards__like-btn').addEventListener('click', () => {
      this._handleToggleLike();
    });

    // Слушатель клика по изображению карточки
    this._cardElement.querySelector('.cards__image').addEventListener('click', () => {
      this._callBack(this._title, this._link);
    })
  }

  generateCard() { // создание карточки
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector('.cards__place').textContent = this._title;
    this._cardElement.querySelector('.cards__image').src = this._link;
    this._cardElement.querySelector('.cards__image').alt = this._title + '.';

    return this._cardElement;
  }
}