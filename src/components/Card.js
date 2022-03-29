export default class Card {
  constructor(data, cardSelector, handleCardClick, handleToggleLike) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._link = data.link;
    this._likeCount = data.likes.length;
    this._cardId = data._id;
    this._handleCardClick = handleCardClick;
    this._handleToggleLike = handleToggleLike;
  }

  _getTemplate() { // Получаем шаблон карточки
    const cardTemplateElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);
    return cardTemplateElement;
  }

  toggleLike(isLiked) { // изменение состояния сердечка на карточке
    if (isLiked) {
      this._cardElement.querySelector('.cards__like-btn').classList.add('cards__like-btn_active');
      this._isLiked = true;
    } else {
      this._cardElement.querySelector('.cards__like-btn').classList.remove('cards__like-btn_active');
      this._isLiked = false;
    }
  }

  countLikes(likes) {
    this._likeCount = likes.length;
    this._cardElement.querySelector('.cards__like-count').textContent = this._likeCount;
  }

  _setEventListeners() { // добавление слушателей
    // Слушатель кнопки сердечка
    this._cardElement.querySelector('.cards__like-btn').addEventListener('click', () => {
      this._handleToggleLike(this, this._cardId, this._isLiked);
    });

    // Слушатель клика по изображению карточки
    this._cardElement.querySelector('.cards__image').addEventListener('click', () => {
      this._handleCardClick(this._title, this._link);
    })
  }

  generateCard() { // создание карточки
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector('.cards__place').textContent = this._title;
    this._cardElement.querySelector('.cards__image').src = this._link;
    this._cardElement.querySelector('.cards__image').alt = this._title + '.';
    this._cardElement.querySelector('.cards__like-count').textContent = this._likeCount;

    return this._cardElement;
  }
}