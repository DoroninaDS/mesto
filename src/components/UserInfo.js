export default class UserInfo {
    constructor({nameUser, aboutUser, avatarUser}) {
        this._name = document.querySelector(nameUser);
        this._about = document.querySelector(aboutUser);
        this._avatar = document.querySelector(avatarUser);
    }

    getUserInfo() {
        return {
            nameUser: this._name.textContent,
            aboutUser: this._about.textContent,
        };
    }

    setUserInfo(nameUser, aboutUser) {
        this._name.textContent = nameUser;
        this._about.textContent = aboutUser;
    }

    setUserAvatar (avatarUser) {
        this._avatar.src = avatarUser;
    }
}