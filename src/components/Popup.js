export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._eventHandler = this._handleEscClose.bind(this);
    this._closeHandler = this.close.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._eventHandler);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._eventHandler);
  }

  setEventListeners() {
    this._popup.querySelector('.popup__overlay').addEventListener('click', this._closeHandler);
    this._popup.querySelector('.popup__close-btn').addEventListener('click', this._closeHandler);
  }
}