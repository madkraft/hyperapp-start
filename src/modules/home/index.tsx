import { Component, h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export interface Home {
  people: any
  fetch(): any
}

export const Home: Component<Home> = ({ people, fetch }) => (
  <div>
    <Link to="/about">about</Link>
    <h2>Home</h2>
    <button onclick={fetch}>Fetch people</button>
    {people.map(person => <p>Hello {person.name}</p>)}
  </div>
)
