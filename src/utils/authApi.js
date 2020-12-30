class AuthApi {
  // temporary separate authorization api module -- will combine in next stage

  constructor({ baseUrl, headers }) {
    this._baseUrl= baseUrl;
    this._headers= headers;
  }


  login(data) {
    return fetch(this._baseUrl + 'signin', {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(res => {
      if (res.ok) return res.json();
      return Promise.reject(`Error: ${res.status}`);
    })
    .then(data => {
      return fetch(this._baseUrl + 'users/me', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${data.token}`
        }
      }).then(res => {
        if (res.ok) return res.json();
        return Promise.reject(`Error: ${res.status}`);
      })
      
    }); 
  }


  register(data) {
    return fetch(this._baseUrl + 'signup', {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(res => {
      if (res.ok) {
        return res.json();
      } 
      return Promise.reject(`Error: ${res.status}`);
    }); 
  }

}


export const auth= new AuthApi({
  baseUrl: "https://register.nomoreparties.co/",
  headers: {
    "Content-Type": "application/json"
  }
}); 
