class API {
  static init () {
    this.baseURL = 'http://localhost:3001'
    this.signinURL = this.baseURL + '/signin'
    this.validateURL = this.baseURL + '/validate'
  }

  static signin (user) {
    return fetch(this.signinURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }).then(resp => resp.json())
  }

  static validate (username) {
    return fetch(this.validateURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username: username })
    }).then(resp => resp.json())
  }
}

API.init()

export default API
