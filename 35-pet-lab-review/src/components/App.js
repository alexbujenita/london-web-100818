import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }

  findPets = () => {
    const { type } = this.state.filters
    const url = type === 'all'
      ? '/api/pets'
      : `/api/pets?type=${type}`

    fetch(url)
      .then(resp => resp.json())
      .then(pets => this.setState({ pets }))
  }

  adoptPet = id => {
    // const pets = [...this.state.pets]
    // const foundPet = pets.find(pet => pet.id === id)
    // const foundPetCopy = JSON.parse(JSON.stringify(foundPet))
    // foundPetCopy.isAdopted = true
    // const indexToSwap = pets.indexOf(foundPet)
    // pets[indexToSwap] = foundPetCopy
    const pets = this.state.pets.map(pet =>
      pet.id === id
        ? {...pet, isAdopted: true}
        : pet
    )
    this.setState({ pets })
  }

  changeFilter = (event) => {
    this.setState({ filters: { type: event.target.value } })
  }

  render () {
    const { changeFilter, findPets, adoptPet } = this
    const { pets } = this.state
    return (
      <div className='ui container'>
        <header>
          <h1 className='ui dividing header'>React Animal Shelter</h1>
        </header>
        <div className='ui container'>
          <div className='ui grid'>
            <div className='four wide column'>
              <Filters handleClick={findPets} handleChange={changeFilter} />
            </div>
            <div className='twelve wide column'>
              <PetBrowser pets={pets} adoptPet={adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
