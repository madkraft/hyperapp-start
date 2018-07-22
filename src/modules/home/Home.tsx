import { Component, h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export interface IHome {
  title: string
  starWarsPeople: any
  fetch(): any
}

export const Home: Component<IHome> = ({ title, starWarsPeople, fetch }) => (
  <div>
    <Link to="/about">about</Link>
    <h2>{title}</h2>
    <p />
    <button onclick={fetch}>Fetch people</button>
    {starWarsPeople.map(person => <p>Hello {person.name}</p>)}
  </div>
)
