import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'

import API from '../adapters/API'
import { transformPokemon } from '../helpers'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchInput: ''
    // filterType: ''
  }

  addPokemon = pokemon => {
    this.setState({ pokemons: [pokemon, ...this.state.pokemons] })
  }

  getPokemons = async () => {
    let pokemons = await API.getPokemons()
    pokemons = pokemons.map(transformPokemon)
    this.setState({ pokemons })
  }

  filterByInput = pokemons =>
    this.state.searchInput === ''
      ? pokemons
      : pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
      )

  // filterByType = pokemons =>
  //   this.state.typeFilter === ''
  //     ? pokemons
  //     : pokemons.filter(pokemon =>
  //       pokemon.types.includes(this.state.typeFilter)
  //     )

  get filteredPokemons () {
    return this.filterByInput(this.state.pokemons)
  }

  updateSearch = searchInput => {
    this.setState({ searchInput })
  }

  componentDidMount () {
    this.getPokemons()
  }

  render () {
    const { updateSearch, filteredPokemons, addPokemon } = this
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <Search onSearchChange={event => updateSearch(event.target.value)} showNoResults={false} />
        <br />
        <PokemonForm addPokemon={addPokemon} />
        <br />
        <PokemonCollection pokemons={filteredPokemons} />
      </div>
    )
  }
}

export default PokemonPage
