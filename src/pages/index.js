import './index.css';

import {
  validationData,
  initialCards,
  cardsPlace,
  popupCardsForm,
  profileEditBtn,
  profileAddBtn,
  popupProfileAuthor,
  popupProfileActivity,
  popupProfileForm
} from '../utils/constants.js';

import Card from '../components/Card.js'
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';


// Создание экземлпяра класса UserInfo
const userInfo = new UserInfo({ nameSelector: '.profile__author', aboutSelector: '.profile__activity' });

// Колбэк открытия попапа с изображением
function initializePopupWithImage(title, link) {
  const popupImage = new PopupWithImage({ link: link, name: title }, '.popup_type_image');
  popupImage.open();
  popupImage.setEventListeners();
}

// Наполнение страницы имеющимися карточками
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#cards-template', initializePopupWithImage);
    const addedCard = card.generateCard();
    cardList.addItem(addedCard);
  }
},
  cardsPlace
);

// Модальное окно редактирования профиля
const popupWithProfileForm = new PopupWithForm(
  {
    selector: '.popup_type_profile',
    handleFormSubmit: (data) => {
      userInfo.setUserInfo(data);
    }
  }
);

// Модальное окно добавления карточки
const popupWithCardForm = new PopupWithForm(
  {
    selector: '.popup_type_cards',
    handleFormSubmit: (data) => {
      const newCard = new Section({
        items: [data],
        renderer: (item) => {
          const card = new Card(item, '#cards-template', initializePopupWithImage);
          const addedCard = card.generateCard();
          newCard.addItem(addedCard);
        }
      },
        cardsPlace
      );
      newCard.renderItems();
    }
  }
);

// Заполнение модального окна профиля имеющимися данными
function fillProfilePopup(userInfo) {
  popupProfileAuthor.value = userInfo.profileName;
  popupProfileActivity.value = userInfo.profileAbout;
}

// Активация валидации для формы profilePopup
const profileFormValidation = new FormValidator(validationData, popupProfileForm);
profileFormValidation.enableValidation();

//Активация валидации для формы popupCards
const popupCardsFormValidation = new FormValidator(validationData, popupCardsForm);
popupCardsFormValidation.enableValidation();


// Добавление слушателя для модального окна редактирования профиля
popupWithProfileForm.setEventListeners();

// Добавление слушателя для модального окна добавления карточки
popupWithCardForm.setEventListeners();

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
})

// Отрисовка имеющихся карточек
cardList.renderItems();