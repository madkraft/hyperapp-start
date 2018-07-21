// import Actions from "./Actions";
// import Container from "./Container";
// import IState from "./IState";

// const initialState: IState = {
//   count: 0
// };

// app(initialState, new Actions(), Container, document.body);

import { app } from 'hyperapp'
import devtools from 'hyperapp-redux-devtools'

// import { Actions, State } from './store'
import { actions, state, view } from './app'

devtools(app)(state, actions, view, document.body)

// app<State, Actions>(state, actions, view, document.body)
