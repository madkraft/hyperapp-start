import { ActionsType } from 'hyperapp'

export interface State {
  starWarsPeople: any[]
}

export interface Actions {
  fetchStarWarsPeople(): State
  setStarWarsPeople(data: any): State
}

export namespace Store {
  export const state: State = {
    starWarsPeople: []
  }

  export const actions: ActionsType<State, Actions> = {
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
