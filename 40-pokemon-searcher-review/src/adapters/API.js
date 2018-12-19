class API {
  static init () {
    this.baseURL = 'http://localhost:3000'
    this.pokemonsURL = this.baseURL + '/pokemons'
  }

  static getPokemons () {
    return this.get(this.pokemonsURL)
  }

  static createPokemon (pokemon) {
    return this.post(this.pokemonsURL, pokemon)
  }

  static get (url) {
    return fetch(url)
      .then(resp => resp.json())
  }

  static post (url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(resp => resp.json())
  }
}

API.init()

export default API
