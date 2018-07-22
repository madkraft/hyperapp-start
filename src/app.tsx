import { ActionsType, h, View } from 'hyperapp'
import { location, Route } from '@hyperapp/router'

import './index.css'

import HomePage from './modules/home'
import { HomeModuleState, HomeModuleActions } from './modules/home/models'
import AboutPage from './modules/about'

export interface State {
  location: any
  home: HomeModuleState
  about: any
}

export interface Actions {
  location: any
  home: HomeModuleActions
  about: any
}

export const state: State = {
  location: location.state,
  home: HomePage.state,
  about: AboutPage.state
}

export const actions: Actions = {
  location: location.actions,
  home: HomePage.actions,
  about: AboutPage.actions
}

export const view: View<State, Actions> = (state, actions) => {
  return (
    <main>
      <Route path="/" render={() => HomePage.view(state.home, actions.home)} />
      <Route path="/about" render={() => AboutPage.view()} />
    </main>
  )
}
