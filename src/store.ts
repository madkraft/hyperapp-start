import { ActionsType } from 'hyperapp'
import { location } from '@hyperapp/router'

export interface State {
  location: any
  starWarsPeople: any[]
}

export interface Actions {
  location: any
  fetchStarWarsPeople(): State
  setStarWarsPeople(data: any): State
}

export namespace Store {
  export const state: State = {
    location: location.state,
    starWarsPeople: []
  }

  export const actions: ActionsType<State, Actions> = {
    location: location.actions,
    fetchStarWarsPeople: () => (state, actions) => {
      fetch('https://swapi.co/api/people')
        .then(res => res.json())
        .then(data => actions.setStarWarsPeople(data))
    },
    setStarWarsPeople: ({ results }) => state => ({
      starWarsPeople: results
    })
  }
}
