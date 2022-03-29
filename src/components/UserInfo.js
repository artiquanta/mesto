export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo['profileName'] = this._name.textContent;
    this._userInfo['profileAbout'] = this._about.textContent;

    return this._userInfo;
  }

  setUserInfo(formValues) {
    this._name.textContent = formValues.name;
    this._about.textContent = formValues.about;
  }

  setUserAvatar(formValue) {
    this._avatar.src = formValue.avatar;
  }
}