/* Начальное наполнение страницы */
const initialCards = [
  {
    name: 'Красноярские Столбы',
    link: './images/cards__stolby.jpg',
    alt: 'Национальный парк - Красноярские Столбы.'
  },
  {
    name: 'Озеро ледникового происхождения Селигер',
    link: './images/cards__seliger.jpg',
    alt: 'Озеро ледникового происхождения Селигер.'
  },
  {
    name: 'Солёное озеро Баскунчак',
    link: './images/cards__baskunchak.jpg',
    alt: 'Солёное озеро Баскунчак, Астраханская область.'
  },
  {
    name: 'Плато Бермамыт',
    link: './images/cards__bermamyt.jpg',
    alt: 'Плато Бермамыт, Карачаево-Черкесская Республика.'
  },
  {
    name: 'Мраморные озёра Рускеала, Республика Карелия',
    link: './images/cards__ruskeala.jpg',
    alt: 'Мраморные озёра Рускеала, Республика Карелия.'
  },
  {
    name: 'Озеро Байкал',
    link: './images/cards__baikal.jpg',
    alt: 'Озеро Байкал зимой.'
  }
];

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
const popups = document.querySelectorAll('.popup');
const popupProfile = popups[0];
const popupCards = popups[1];

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

const popupImage = document.querySelector('.popup-image');
const popupImageContainer = popupImage.querySelector('.popup-image__container');
const popupImageCloseBtn = popupImageContainer.querySelector('.popup-image__close-btn');
const popupImagePhoto = popupImageContainer.querySelector('.popup-image__photo');
const popupImageCaption = popupImageContainer.querySelector('.popup-image__caption');

// Удаление карточки места
function removeCard(evt) {
  evt.target.closest('.cards__item').remove();
}

// Активация сердечка
function toggleLike(evt) {
  evt.target.classList.toggle('cards__like-btn_active');
}

// Активация Popup Image
function togglePopupImage(evt) {
  popupImage.classList.toggle('popup-image_opened');
  if (popupImage.classList.contains('popup-image_opened')) {
    const popupImagePlace = evt.target.nextElementSibling.querySelector('.cards__place');
    const popupImagePlaceName = popupImagePlace.textContent;
    popupImagePhoto.src = evt.target.src;
    popupImagePhoto.alt = popupImagePlaceName + '.';
    popupImageCaption.textContent = popupImagePlaceName;
  }
}

// Добавление существующих карточек на страницу
initialCards.forEach(function (item) {
  const cardsElement = cardsTemplate.querySelector('.cards__item').cloneNode(true);
  const cardsRemoveBtn = cardsElement.querySelector('.cards__remove-btn');
  const cardsLikeBtn = cardsElement.querySelector('.cards__like-btn');
  const cardsImage = cardsElement.querySelector('.cards__image');
  cardsElement.querySelector('.cards__image').src = item.link;
  cardsElement.querySelector('.cards__image').alt = item.alt;
  cardsElement.querySelector('.cards__place').textContent = item.name;
  cardsRemoveBtn.addEventListener('click', removeCard);
  cardsLikeBtn.addEventListener('click', toggleLike);
  cardsImage.addEventListener('click', togglePopupImage);
  cards.prepend(cardsElement);
});

// Активация Popup
function togglePopup(popup) {
  popup.classList.toggle('popup_opened');

  /* Наполнение Popup содержимым и очистка предыдущих значений */
  if (popup.classList.contains('popup_opened')) {
    if (popup === popupProfile) {
      popupProfileAuthor.value = profileAuthor.textContent;
      popupProfileActivity.value = profileActivity.textContent;
    } else {
      popupCardsPlace.value = '';
      popupCardsLink.value = '';
    }
  }
}

// Сохранение в профиль введённых данных
function updateProfile(evt) {
  evt.preventDefault();
  profileAuthor.textContent = popupProfileAuthor.value;
  profileActivity.textContent = popupProfileActivity.value;
  togglePopup(popupProfile);
}

// Добавление новой карточки места
function addCards(evt) {
  evt.preventDefault();
  const cardsElement = cardsTemplate.querySelector('.cards__item').cloneNode(true);
  const placeValue = (popupCardsPlace.value !== '') ? popupCardsPlace.value : 'Название не указано';
  const linkValue = (popupCardsLink.value !== '') ? popupCardsLink.value : './images/cards__stolby.jpg';
  const cardsRemoveBtn = cardsElement.querySelector('.cards__remove-btn');
  const cardsLikeBtn = cardsElement.querySelector('.cards__like-btn');
  const cardsImage = cardsElement.querySelector('.cards__image');
  cardsElement.querySelector('.cards__place').textContent = placeValue;
  cardsElement.querySelector('.cards__image').src = linkValue;
  cardsElement.querySelector('.cards__image').alt = placeValue + '.';
  cardsLikeBtn.addEventListener('click', toggleLike);
  cardsRemoveBtn.addEventListener('click', removeCard);
  cardsImage.addEventListener('click', togglePopupImage);
  cards.prepend(cardsElement);
  togglePopup(popupCards);
}

// Отслеживание событий

/* Popup Profile */
/* Toggle Popup Profile */
profileEditBtn.addEventListener('click', () => {
  togglePopup(popupProfile);
});

/* Close Popup Profile */
popupProfileCloseBtn.addEventListener('click', () => {
  togglePopup(popupProfile);
});

/* Update Profile */
popupProfileForm.addEventListener('submit', updateProfile);

/* Popup Cards */
/* Toggle Popup Adding Cards */
profileAddBtn.addEventListener('click', () => {
  togglePopup(popupCards);
});

/* Close Popup Adding Cards */
popupCardsCloseBtn.addEventListener('click', () => {
  togglePopup(popupCards);
});

/* Adding New Card */
popupCardsForm.addEventListener('submit', addCards);

/* Popup Image */
/* Open Popup Image */
popupImageCloseBtn.addEventListener('click', togglePopupImage);