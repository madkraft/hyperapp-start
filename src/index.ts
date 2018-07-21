// import Actions from "./Actions";
// import Container from "./Container";
// import IState from "./IState";

// const initialState: IState = {
//   count: 0
// };

// app(initialState, new Actions(), Container, document.body);

import { app } from 'hyperapp'
import Container from './Container'
import './index.css'

const state = {
  starWarsPeople: []
}

const actions = {
  fetchStarWarsPeople: () => (state, actions) => {
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(data => actions.setStarWarsPeople(data))
  },
  setStarWarsPeople: ({ results }) => state => ({
    starWarsPeople: results
  })
}

app(state, actions, Container, document.body)
