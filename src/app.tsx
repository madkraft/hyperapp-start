import { ActionsType, h, View } from 'hyperapp'
import { Route } from '@hyperapp/router'

import { Actions, State, Store } from './store'
import './index.css'

import { Home } from './modules/home'
import { About } from './modules/about'

export const state: State = Store.state
export const actions: ActionsType<State, Actions> = Store.actions

export const view: View<State, Actions> = (
  { starWarsPeople },
  { fetchStarWarsPeople }
) => (
  <main>
    <Route
      path="/"
      render={() => (
        <Home people={starWarsPeople} fetch={fetchStarWarsPeople} />
      )}
    />
    <Route path="/about" render={About} />
  </main>
)
