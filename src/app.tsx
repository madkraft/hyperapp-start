import { ActionsType, h, View } from 'hyperapp'

import { Actions, State, Store } from './store'
import './index.css'

export const state: State = Store.state
export const actions: ActionsType<State, Actions> = Store.actions

export const view: View<State, Actions> = ({ starWarsPeople }, actions) => (
  <main>
    <button onclick={actions.fetchStarWarsPeople}>Fetch people</button>
    {starWarsPeople.map(person => <p>Hello {person.name}</p>)}
  </main>
)
