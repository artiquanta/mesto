import Card from './Card.js'
import initialCards from './initialCards.js';
import FormValidator from './FormValidator.js';

/* Cards */
const cards = document.querySelector('.cards');

/* Profile */
const profile = document.querySelector('.profile');
const profileEditBtn = profile.querySelector('.profile__edit-btn');
const profileAddBtn = profile.querySelector('.profile__add-btn');
const profileAuthor = profile.querySelector('.profile__author');
const profileActivity = profile.querySelector('.profile__activity');

/* Popup */
const popupProfile = document.querySelector('.popup_type_profile');
const popupCards = document.querySelector('.popup_type_cards');
const popupImage = document.querySelector('.popup_type_image');

/* Popup Overlays */
const popupProfileOverlay = popupProfile.querySelector('.popup__overlay');
const popupCardsOverlay = popupCards.querySelector('.popup__overlay');
const popupImageOverlay = popupImage.querySelector('.popup__overlay');

/* Popup Profile Edit */
const popupProfileContainer = popupProfile.querySelector('.popup__container');
const popupProfileCloseBtn = popupProfileContainer.querySelector('.popup__close-btn');
const popupProfileForm = popupProfileContainer.querySelector('.popup__inputs');
const popupProfileAuthor = popupProfileContainer.querySelector('.popup__input_type_author');
const popupProfileActivity = popupProfileContainer.querySelector('.popup__input_type_activity');

/* Popup Add Cards */
const popupCardsContainer = popupCards.querySelector('.popup__container');
const popupCardsCloseBtn = popupCardsContainer.querySelector('.popup__close-btn');
const popupCardsForm = popupCardsContainer.querySelector('.popup__inputs');
const popupCardsPlace = popupCardsContainer.querySelector('.popup__input_type_place');
const popupCardsLink = popupCardsContainer.querySelector('.popup__input_type_link');

/* Popup Image */
const popupImageContainer = popupImage.querySelector('.popup__container');
const popupImageCloseBtn = popupImageContainer.querySelector('.popup__close-btn');


// Открытие Popup, экспорт для использования в обработчике Card
export default function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

// Очистка полей ввода Popup Cards
function clearInputsValues() {
  popupCardsPlace.value = '';
  popupCardsLink.value = '';
}

// Закрытие Popup 
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

// Закрытие Popup клавишей Escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
  }
}

// Добавление существующих карточек на страницу
function fillPage() {
  initialCards.forEach(function (item) {
    const newCard = new Card(item, '#cards-template');
    const cardElement = newCard.generateCard();
    cards.prepend(cardElement);
  });
}

// Наполнение Profile Popup имеющимися данными
function fillProfilePopup() {
  popupProfileAuthor.value = profileAuthor.textContent;
  popupProfileActivity.value = profileActivity.textContent;
}

// Сохранение в профиль введённых данных
function updateProfile() {
  profileAuthor.textContent = popupProfileAuthor.value;
  profileActivity.textContent = popupProfileActivity.value;
  closePopup(popupProfile);
}

// Добавление новой карточки места
function addCards() {
  const newCard = new Card({ place: popupCardsPlace.value, link: popupCardsLink.value }, '#cards-template');
  const cardElement = newCard.generateCard();
  cards.prepend(cardElement);
  closePopup(popupCards);
  clearInputsValues();
}

// Первоначальное наполнение содержимым страницы
fillPage();

/* Активация валидации */

// Активация валидации для формы profilePopup
const profileFormValidation = new FormValidator({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input_state_error',
  errorClass: 'popup__input-error_active'
}, popupProfileForm);

profileFormValidation.enableValidation();

//Активация валидации для формы popupCards
const popupCardsFormValidation = new FormValidator({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input_state_error',
  errorClass: 'popup__input-error_active'
}, popupCardsForm);

popupCardsFormValidation.enableValidation();


// Отслеживание событий

/* Popup Profile */
// Open Popup Profile
profileEditBtn.addEventListener('click', () => {
  fillProfilePopup();
  profileFormValidation.cleanErrors();
  openPopup(popupProfile);
});

// Close Popup Profile
popupProfileCloseBtn.addEventListener('click', () => {
  closePopup(popupProfile);
});

popupProfileOverlay.addEventListener('click', () => {
  closePopup(popupProfile);
});

// Update Profile
popupProfileForm.addEventListener('submit', updateProfile);


/* Popup Cards */
// Open Popup Adding Cards
profileAddBtn.addEventListener('click', () => {
  clearInputsValues();
  popupCardsFormValidation.cleanErrors();
  openPopup(popupCards);
});

//Close Popup Adding Cards
popupCardsCloseBtn.addEventListener('click', () => {
  closePopup(popupCards);
});

popupCardsOverlay.addEventListener('click', () => {
  closePopup(popupCards);
});

// Adding New Card
popupCardsForm.addEventListener('submit', addCards);


/* Popup Image */
// Close Popup Image
popupImageCloseBtn.addEventListener('click', () => {
  closePopup(popupImage);
});

popupImageOverlay.addEventListener('click', () => {
  closePopup(popupImage);
});
