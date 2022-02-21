import openPopup from "./index.js";

export default class Card {
  constructor(data, cardSelector) {
    this._cardSelector = cardSelector;
    this._title = data.title;
    this._link = data.link;
    this._alt = `${data.title}.`;
  }

  _getTemplate() {
    const cardTemplateElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);
    return cardTemplateElement;
  }

  _handlePopupInitialization() {
    const popupImage = document.querySelector('.popup_type_image');
    const popupImagePhoto = popupImage.querySelector('.popup__photo');
    const popupImageCaption = popupImage.querySelector('.popup__caption');
    popupImagePhoto.src = this._link;
    popupImagePhoto.alt = this._alt;
    popupImageCaption.textContent = this._title;
    openPopup(popupImage);
  }

  _handleRemoveCard() {
    this._cardElement.remove();
  }

  _handleToggleLike() {
    this._cardElement.querySelector('.cards__like-btn').classList.toggle('cards__like-btn_active');
  }

  _setEventListeners() {
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
      this._handlePopupInitialization();
    })
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector('.cards__place').textContent = this._title;
    this._cardElement.querySelector('.cards__image').src = this._link;
    this._cardElement.querySelector('.cards__image').alt = this._alt;

    return this._cardElement;
  }
}