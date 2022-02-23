import { validationData, initialCards } from '../utils/constants.js';
import Card from './Card.js'
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
const popupImagePhoto = popupImageContainer.querySelector('.popup__photo');
const popupImageCaption = popupImageContainer.querySelector('.popup__caption');


// Открытие Popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
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

// Очистка полей ввода Popup Cards
function clearInputsValues() {
  popupCardsForm.reset();
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

// Инициализация popupImage
function initializePopupImage(title, link) {
  popupImagePhoto.src = link;
  popupImagePhoto.alt = title + '.';
  popupImageCaption.textContent = title;
  openPopup(popupImage);
}

// Создание разметки новой карточки места
function addCards(data) {
  const newCard = new Card(data, '#cards-template', initializePopupImage);
  const cardElement = newCard.generateCard();
  return cardElement;
}

// Добавление разметки карточки
function renderCard(addedCard) {
  cards.prepend(addedCard);
}

// Добавление существующих карточек на страницу
function fillPage() {
  initialCards.forEach(function (item) {
    const addedCard = addCards(item);
    renderCard(addedCard);
  });
}


// Активация валидации для формы profilePopup
const profileFormValidation = new FormValidator(validationData, popupProfileForm);
profileFormValidation.enableValidation();

//Активация валидации для формы popupCards
const popupCardsFormValidation = new FormValidator(validationData, popupCardsForm);
popupCardsFormValidation.enableValidation();


// Отслеживание событий
//////////////////////////// popup Profile /////////////////////////////////

// Открытие окна редактирования профиля
profileEditBtn.addEventListener('click', () => {
  fillProfilePopup();
  profileFormValidation.cleanErrors();
  openPopup(popupProfile);
});

// Закрытие окна редактирования профиля
popupProfileCloseBtn.addEventListener('click', () => {
  closePopup(popupProfile);
});

// Закрытие окна редактирования профиля (overlay)
popupProfileOverlay.addEventListener('click', () => {
  closePopup(popupProfile);
});

// Обновление данных профиля
popupProfileForm.addEventListener('submit', updateProfile);


////////////////////////////// Popup Cards ///////////////////////////////////

// Открытие окна добавления карточки
profileAddBtn.addEventListener('click', () => {
  clearInputsValues();
  popupCardsFormValidation.cleanErrors();
  openPopup(popupCards);
});

// Закрытие окна добавления карточки
popupCardsCloseBtn.addEventListener('click', () => {
  closePopup(popupCards);
});

// Закрытие окна добавления карточки (overlay)
popupCardsOverlay.addEventListener('click', () => {
  closePopup(popupCards);
});

// Добавление новой карточки
popupCardsForm.addEventListener('submit', () => {
  const addedCard = addCards({ title: popupCardsPlace.value, link: popupCardsLink.value });
  renderCard(addedCard);
  closePopup(popupCards);
  clearInputsValues();
});


//////////////////////////////// Popup Image //////////////////////////////////

// Закрытие окна просмотра карточки
popupImageCloseBtn.addEventListener('click', () => {
  closePopup(popupImage);
});

// Закрытие окна просмотра карточки (overlay)
popupImageOverlay.addEventListener('click', () => {
  closePopup(popupImage);
});

// Первоначальное наполнение содержимым страницы
fillPage();