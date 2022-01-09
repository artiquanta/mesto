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
  popup.classList.add('popup_opened');
}

// Закрытие Popup 
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Инициализация Popup Image
function initializePopupImage(evt) {
  openPopup(popupImage);
  const popupImagePlace = evt.target.nextElementSibling.querySelector('.cards__place');
  const popupImagePlaceName = popupImagePlace.textContent;
  popupImagePhoto.src = evt.target.src;
  popupImagePhoto.alt = popupImagePlaceName + '.';
  popupImageCaption.textContent = popupImagePlaceName;
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
initialCards.forEach(function (item) {
  renderCard(item.name, item.link, item.alt)
});

// Сохранение в профиль введённых данных
function updateProfile(evt) {
  evt.preventDefault();
  profileAuthor.textContent = popupProfileAuthor.value;
  profileActivity.textContent = popupProfileActivity.value;
  closePopup(popupProfile);
}

// Добавление новой карточки места
function addCards(evt) {
  evt.preventDefault();
  const placeValue = (popupCardsPlace.value !== '') ? popupCardsPlace.value : 'Название не указано';
  const linkValue = (popupCardsLink.value !== '') ? popupCardsLink.value : './images/cards__stolby.jpg';
  renderCard(placeValue, linkValue);
  closePopup(popupCards);
}

// Отслеживание событий

/* Popup Profile */
/* Open Popup Profile */
profileEditBtn.addEventListener('click', () => {
  popupProfileAuthor.value = profileAuthor.textContent;
  popupProfileActivity.value = profileActivity.textContent;
  openPopup(popupProfile);
});

/* Close Popup Profile */
popupProfileCloseBtn.addEventListener('click', () => {
  closePopup(popupProfile);
});

/* Update Profile */
popupProfileForm.addEventListener('submit', updateProfile);

/* Popup Cards */
/* Open Popup Adding Cards */
profileAddBtn.addEventListener('click', () => {
  popupCardsPlace.value = '';
  popupCardsLink.value = '';
  openPopup(popupCards);
});

/* Close Popup Adding Cards */
popupCardsCloseBtn.addEventListener('click', () => {
  closePopup(popupCards);
});

/* Adding New Card */
popupCardsForm.addEventListener('submit', addCards);

/* Popup Image */
/* Open Popup Image */
popupImageCloseBtn.addEventListener('click', () => {
  closePopup(popupImage);
});