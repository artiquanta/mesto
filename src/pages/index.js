import './index.css';

import {
  validationData,
  cardsPlace,
  popupCardsForm,
  profileEditBtn,
  profileAddBtn,
  profileChangeAvatar,
  popupProfileAuthor,
  popupProfileActivity,
  popupProfileForm,
  popupAvatarForm
} from '../utils/constants.js';

import Card from '../components/Card.js';
import PrivateCard from '../components/PrivateCard.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import PopupError from '../components/PopupError.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';

// Переменная для записи _id текущего пользователя
let currentUserId;

// Создание экземлпяра класса UserInfo
const userInfo = new UserInfo({ nameSelector: '.profile__author', aboutSelector: '.profile__activity', avatarSelector: '.profile__avatar-img' });

// Создание экземлпяра класса PopupWithImage
const popupImage = new PopupWithImage('.popup_type_image');

// Создание экземляра модального окна с ошибкой
const popupWithError = new PopupError('.popup-error');

// Создание экземпляра класса Section для контейнера карточек
const cardList = new Section({
  renderer: (item) => {
    const addedCard = createCard(item);
    cardList.addItem(addedCard);
  }
},
  cardsPlace
);

// Создание экземпляра класса API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38',
  headers: {
    authorization: 'ecb315ea-f58f-45a5-9103-978eaaf2ad6f',
    'Content-Type': 'application/json'
  }
});

// Отображение ошибки при запросе к серверу
function showError(code) {
  popupWithError.open(code);
}

// Колбэк открытия попапа с изображением
function initializePopupWithImage(title, link) {
  popupImage.open({ name: title, link: link });
}

// Колбэк открытия попапа с подтверждением удаления карточки
function removeCard(cardId, card) {
  popupWithConfirmationForm.open(cardId, card);
}

// Коллбэк изменения статуса лайка на карточке
function toggleLike(card, cardId, isLiked) {
  if (isLiked) {
    api.removeLike(cardId)
      .then(res => {
        card.toggleLike(false);
        card.countLikes(res.likes);
      })
      .catch(err => showError(err));
  } else {
    api.addLike(cardId)
      .then(res => {
        card.toggleLike(true);
        card.countLikes(res.likes);
      })
      .catch(err => showError(err));
  }
}

// Модальное окно редактирования профиля
const popupWithProfileForm = new PopupWithForm(
  {
    selector: '.popup_type_profile',
    handleFormSubmit: (data) => {
      // Отображаем статус запроса
      popupWithProfileForm.displayLoadingStatus(true);
      api.updateUserProfile(data.profileName, data.profileAbout)
        .then(res => {
          updateUserProfile(res);
          popupWithProfileForm.close();
        })
        .catch(err => showError(err))
        .finally(() => popupWithProfileForm.displayLoadingStatus(false));
    }
  }
);

// Модальное окно добавления карточки
const popupWithCardForm = new PopupWithForm(
  {
    selector: '.popup_type_cards',
    handleFormSubmit: (data) => {
      // Отображаем статус запроса
      popupWithCardForm.displayLoadingStatus(true);
      api.addNewCard(data.title, data.link)
        .then(res => {
          const newCard = createCard(res);
          cardList.addItem(newCard);
          popupWithCardForm.close();
        })
        .catch(err => showError(err))
        .finally(() => popupWithCardForm.displayLoadingStatus(false));
    }
  }
);

// Модальное окно редактирования аватара
const popupWithAvatar = new PopupWithForm(
  {
    selector: '.popup_type_avatar',
    handleFormSubmit: (data) => {
      // Отображаем статус запроса
      popupWithAvatar.displayLoadingStatus(true);
      api.updateAvatar(data.link)
        .then(res => {
          updateUserAvatar(res);
          popupWithAvatar.close();
        })
        .catch(err => showError(err))
        .finally(() => popupWithAvatar.displayLoadingStatus(false));
    }
  }
);

// Модальное окно подтверждения удаления карточки
const popupWithConfirmationForm = new PopupWithConfirmation(
  {
    selector: '.popup_type_confirmation',
    handleFormSubmit: (id, card) => {
      api.removeCard(id)
        .then(() => {
          card.handleRemoveCard();
          popupWithConfirmationForm.close();
        })
        .catch(err => showError(err));
    }
  }
);

// Заполнение модального окна профиля имеющимися данными
function fillProfilePopup(userInfo) {
  popupProfileAuthor.value = userInfo.profileName;
  popupProfileActivity.value = userInfo.profileAbout;
}

// Обновление информации о пользователе
function updateUserProfile(data) {
  userInfo.setUserInfo(data);
}

// Обновление аватара пользователя
function updateUserAvatar(data) {
  userInfo.setUserAvatar(data);
}

// Создание экземпляра карточки
function createCard(item) {
  // проверяем, оставлялся ли пользователем ранее лайк на карточку
  const isLiked = (item.likes.find(element => element._id === currentUserId))
    ? true
    : false;

  // создаём экземпляр карточки, исходя из владельца карточки
  const card = (item.owner._id === currentUserId)
    ? new PrivateCard(item, '#cards-template-owner', initializePopupWithImage, removeCard, toggleLike)
    : new Card(item, '#cards-template-viewer', initializePopupWithImage, toggleLike);

  const addedCard = card.generateCard();
  card.toggleLike(isLiked);
  return addedCard;
}

// Наполнение страницы имеющимися данными
function fillPage() {
  Promise.all([
    api.getCurrentUser(),
    api.getInitialCards()
  ])
    .then(([userData, existingCards]) => {
      updateUserProfile(userData);
      updateUserAvatar(userData);
      currentUserId = userData._id;
      cardList.renderItems(existingCards.reverse())
    })
    .catch(err => showError(err));
}


// Активация валидации для формы profilePopup
const profileFormValidation = new FormValidator(validationData, popupProfileForm);
profileFormValidation.enableValidation();

//Активация валидации для формы popupCards
const popupCardsFormValidation = new FormValidator(validationData, popupCardsForm);
popupCardsFormValidation.enableValidation();

// Активация валидации для формы avatarPopup
const avatarFormValidation = new FormValidator(validationData, popupAvatarForm);
avatarFormValidation.enableValidation();


// Добавление слушателя для модального окна просмотра карточки
popupImage.setEventListeners();

// Добавление слушателя для модального окна редактирования профиля
popupWithProfileForm.setEventListeners();

// Добавление слушателя для модального окна добавления карточки
popupWithCardForm.setEventListeners();

// Добавление слушателя для модального окна обновления аватара
popupWithAvatar.setEventListeners();

// Добавление слушателя для модального окна подтверждения удаления карточки
popupWithConfirmationForm.setEventListeners();

// Слушатель кнопки редактирования профиля
profileEditBtn.addEventListener('click', () => {
  const currentUserInfo = userInfo.getUserInfo();
  fillProfilePopup(currentUserInfo);
  profileFormValidation.cleanErrors();
  popupWithProfileForm.open();
});

// Слушатель кнопки добавления новой карточки
profileAddBtn.addEventListener('click', () => {
  popupCardsFormValidation.cleanErrors();
  popupWithCardForm.open();
});

// Слушатель кнопки изменения автара
profileChangeAvatar.addEventListener('click', () => {
  avatarFormValidation.cleanErrors();
  popupWithAvatar.open();
});

// Инициализация страницы
fillPage();