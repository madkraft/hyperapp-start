import { h } from 'hyperapp'

import { Home } from './Home'
import { HomeModuleState, HomeModuleActions } from './models'

interface HomeModule {
  state: HomeModuleState
  actions: HomeModuleActions
  view(state: HomeModuleState, actions: HomeModuleActions): JSX.Element
}

const HomeModule: HomeModule = {
  state: {
    title: 'Hello Home!',
    starWarsPeople: []
  },
  actions: {
    fetchStarWarsPeople: () => (state, actions) => {
      fetch('https://swapi.co/api/people')
        .then(res => res.json())
        .then(data => actions.setStarWarsPeople(data))
    },
    setStarWarsPeople: ({ results }) => state => ({
      starWarsPeople: results
    })
  },
  view: (state, actions) => (
    <Home
      title={state.title}
      starWarsPeople={state.starWarsPeople}
      fetch={actions.fetchStarWarsPeople}
    />
  )
}

export default HomeModule
