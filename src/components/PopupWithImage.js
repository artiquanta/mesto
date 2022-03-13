import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor({ link, name }, selector) {
    super(selector);
    this._link = link;
    this._name = name;
  }

  open() {
    this._popup.querySelector('.popup__caption').textContent = this._name;
    this._popupPhoto = this._popup.querySelector('.popup__photo');
    this._popupPhoto.src = this._link;
    this._popupPhoto.alt = this._name + '.';
    super.open();
  }
}