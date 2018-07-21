import { app } from 'hyperapp'
import devtools from 'hyperapp-redux-devtools'
import { location } from '@hyperapp/router'

// import { Actions, State } from './store'
import { actions, state, view } from './app'

const main = devtools(app)(state, actions, view, document.body)
// const main = app<State, Actions>(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)
