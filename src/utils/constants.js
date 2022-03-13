import cardsStolby from '../images/cards__stolby.jpg';
import cardsSeliger from '../images/cards__seliger.jpg';
import cardsBaskunchak from '../images/cards__baskunchak.jpg';
import cardsBermamyt from '../images/cards__bermamyt.jpg';
import cardsRuskeala from '../images/cards__ruskeala.jpg';
import cardsBaikal from '../images/cards__baikal.jpg';



// Данные для валидации
export const validationData = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input_state_error',
  errorClass: 'popup__input-error_active'
};

// Данные карточек
export const initialCards = [
  {
    title: 'Красноярские Столбы',
    link: cardsStolby
  },
  {
    title: 'Озеро ледникового происхождения Селигер',
    link: cardsSeliger
  },
  {
    title: 'Солёное озеро Баскунчак',
    link: cardsBaskunchak
  },
  {
    title: 'Плато Бермамыт',
    link: cardsBermamyt
  },
  {
    title: 'Мраморные озёра Рускеала, Республика Карелия',
    link: cardsRuskeala
  },
  {
    title: 'Озеро Байкал',
    link: cardsBaikal
  }
];

// Селектор места размещения карточек
export const cardsPlace = '.cards';

// Кнопки профиля
const profile = document.querySelector('.profile');
export const profileEditBtn = profile.querySelector('.profile__edit-btn');
export const profileAddBtn = profile.querySelector('.profile__add-btn');

// Модальное окно редактирования профиля
const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileContainer = popupProfile.querySelector('.popup__container');
export const popupProfileForm = popupProfileContainer.querySelector('.popup__inputs');
export const popupProfileAuthor = popupProfileContainer.querySelector('.popup__input_type_author');
export const popupProfileActivity = popupProfileContainer.querySelector('.popup__input_type_activity');

// Модальное окно добавления карточки
const popupCards = document.querySelector('.popup_type_cards');
const popupCardsContainer = popupCards.querySelector('.popup__container');
export const popupCardsForm = popupCardsContainer.querySelector('.popup__inputs');