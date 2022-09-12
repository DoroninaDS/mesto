export default class UserInfo {
    constructor({nameSelector, aboutMeSelector}) {
        this._nameElemment = document.querySelector(nameSelector);
        this._aboutMeElemment = document.querySelector(aboutMeSelector);
    }

    getUserInfo() {
        const userData = {
            name: this._nameElemment.textContent,
            aboutMe: this._aboutMeElemment.textContent
        }
        return userData;
    }

    setUserInfo(data) {
        this._nameElemment.textContent = data.name;
        this._aboutMeElemment.textContent = data.aboutMe;
    }
}