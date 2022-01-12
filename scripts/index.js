/* Cards */
const cards = document.querySelector('.cards');
const cardsTemplate = document.querySelector('#cards-template').content;

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

// Удаление карточки места
function removeCard(evt) {
  evt.target.closest('.cards__item').remove();
}

// Активация сердечка
function toggleLike(evt) {
  evt.target.classList.toggle('cards__like-btn_active');
}

// Открытие Popup
function openPopup(popup) {
  clearingInputsErrors();
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOverlay);
}

// Очистка полей ввода Popup Cards
function clearInputsValues(popup) {
  if (popup === popupCards) {
    popupCardsPlace.value = '';
    popupCardsLink.value = '';
  }
}

// Закрытие Popup клавишей Escape
function closeOverlay(evt) {
  const currentPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(currentPopup);
  }
}

// Закрытие Popup 
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOverlay);
  clearInputsValues(popup);
}

function removeOverlayKeyListener(overlay) {
  overlay.removeEventListener('click', closeOverlay);
}

// Инициализация Popup Image
function initializePopupImage(evt) {
  const popupImagePlace = evt.target.nextElementSibling.querySelector('.cards__place');
  const popupImagePlaceName = popupImagePlace.textContent;
  popupImagePhoto.src = evt.target.src;
  popupImagePhoto.alt = popupImagePlaceName + '.';
  popupImageCaption.textContent = popupImagePlaceName;
  openPopup(popupImage);
}

// Создание карточки
function createCard(heading, link, alt) {
  const cardsElement = cardsTemplate.querySelector('.cards__item').cloneNode(true);
  const cardsRemoveBtn = cardsElement.querySelector('.cards__remove-btn');
  const cardsLikeBtn = cardsElement.querySelector('.cards__like-btn');
  const cardsImage = cardsElement.querySelector('.cards__image');
  cardsElement.querySelector('.cards__image').src = link;
  cardsElement.querySelector('.cards__image').alt = alt;
  cardsElement.querySelector('.cards__place').textContent = heading;
  cardsRemoveBtn.addEventListener('click', removeCard);
  cardsLikeBtn.addEventListener('click', toggleLike);
  cardsImage.addEventListener('click', initializePopupImage);
  return cardsElement;
}

// Добавление карточки в DOM
function renderCard(heading, link, alt = heading) {
  const cardsElement = createCard(heading, link, alt);
  cards.prepend(cardsElement);
}

// Добавление существующих карточек на страницу
function fillPage() {
  initialCards.forEach(function (item) {
    renderCard(item.name, item.link, item.alt)
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
  renderCard(popupCardsPlace.value, popupCardsLink.value);
  closePopup(popupCards);
}

// Первоначальное наполнение содержимым страницы
function renderPage() {
  fillPage();
  fillProfilePopup();
  // Получение возвращаемой функции
  const validation = enableValidation({
    formSelector: '.popup__inputs',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_inactive',
    inputErrorClass: 'popup__input_state_error',
    errorClass: 'popup__input-error_active'
  });
  return validation;
}

// Инициализация наполнения страницы содержимым
const clearingInputsErrors = renderPage();


// Отслеживание событий

/* Popup Profile */
/* Open Popup Profile */
profileEditBtn.addEventListener('click', () => {
  fillProfilePopup();
  openPopup(popupProfile);
});

/* Close Popup Profile */
popupProfileCloseBtn.addEventListener('click', () => {
  closePopup(popupProfile);
});

popupProfileOverlay.addEventListener('click', () => {
  closePopup(popupProfile);
});

/* Update Profile */
popupProfileForm.addEventListener('submit', updateProfile);

/* Popup Cards */
// Open Popup Adding Cards
profileAddBtn.addEventListener('click', () => {
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