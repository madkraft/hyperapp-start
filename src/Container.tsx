import { h } from 'hyperapp'

export default (state: any, actions: any) => (
  <div>
    <h1>HEEEELLLOOO</h1>
    <h2>World!!!!!!!</h2>
    <button onclick={actions.fetchStarWarsPeople}>Fetch people</button>
  </div>
)
