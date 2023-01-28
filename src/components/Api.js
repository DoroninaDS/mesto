export default class Api {
    constructor ({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _errorChecking(res) {
        if (res.ok) {
            return res.json();
            console.log(res);
        } else {
            return Promise.reject(`Ошибка: ${res.status}`)
        }
    }
  
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
        })
        .then((res) => this._errorChecking(res));
    }
  
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
        })
        .then((res) => this._errorChecking(res));
    }

    editUserInfo (nameInput, aboutMeInput) {
        return fetch(`${this._baseUrl}/users/me`, {
            method:'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: nameInput, 
                about: aboutMeInput
            })
        })
        .then((res) => this._errorChecking(res));
    }

    postCard (namedInput, linkInput) {
        return fetch(`${this._baseUrl}/cards`, {
            method:'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: namedInput, 
                link: linkInput
            })
        })
        .then((res) => this._errorChecking(res));
    }

    deleteCard (id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method:'DELETE',
            headers: this._headers,
        })
        .then((res) => this._errorChecking(res));
    }

    addLike (id) { 
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method:'PUT',
            headers: this._headers,
        })
        .then((res) => this._errorChecking(res));
    }

    deleteLike (id) { 
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method:'DELETE',
            headers: this._headers,
        })
        .then((res) => this._errorChecking(res));
    }

    changeAvatar (avatarInput) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method:'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarInput
            })
        })
        .then((res) => this._errorChecking(res));
    }
};