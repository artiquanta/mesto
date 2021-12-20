/* Profile */
let profile = document.querySelector('.profile');
let profileEditBtn = profile.querySelector('.profile__edit-btn');
let profileAuthor = profile.querySelector('.profile__author');
let profileActivity = profile.querySelector('.profile__activity');

/* Popup */
let popup = document.querySelector('.popup');
let popupContainer = document.querySelector('.popup__container');
let popupCloseBtn = popupContainer.querySelector('.popup__close-btn');
let popupForm = popupContainer.querySelector('.popup__inputs');
let popupAuthor = popupContainer.querySelector('.popup__input_type_author');
let popupActivity = popupContainer.querySelector('.popup__input_type_activity');


// Активация Popup
function togglePopup() {
  popup.classList.toggle('popup_opened');
  if (popup.classList.contains('popup_opened')) {
    popupAuthor.value = profileAuthor.textContent;
    popupActivity.value = profileActivity.textContent;
  }
}

// Сохранение введённых данных
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileAuthor.textContent = popupAuthor.value;
  profileActivity.textContent = popupActivity.value;
  togglePopup();
}

// Отслеживание событий
profileEditBtn.addEventListener('click', togglePopup);
popupCloseBtn.addEventListener('click', togglePopup);
popupForm.addEventListener('submit', formSubmitHandler);