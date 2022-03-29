// Данные для валидации
export const validationData = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input_state_error',
  errorClass: 'popup__input-error_active'
};

// Селектор места размещения карточек
export const cardsPlace = '.cards';

// Кнопки профиля
const profile = document.querySelector('.profile');
export const profileEditBtn = profile.querySelector('.profile__edit-btn');
export const profileAddBtn = profile.querySelector('.profile__add-btn');
export const profileChangeAvatar = profile.querySelector('.profile__avatar');

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

// Модальное окно обновления аватара
const popupAvatar = document.querySelector('.popup_type_avatar');
export const popupAvatarForm = popupAvatar.querySelector('.popup__container');