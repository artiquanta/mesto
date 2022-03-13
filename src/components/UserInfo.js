export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo['profileName'] = this._name.textContent;
    this._userInfo['profileAbout'] = this._about.textContent;

    return this._userInfo;
  }

  setUserInfo(formValues) {
    this._name.textContent = formValues.profileName;
    this._about.textContent = formValues.profileAbout;
  }
}