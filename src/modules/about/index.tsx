import { Component, h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export const About: Component = () => (
  <div>
    <Link to="/">Home</Link>
    <h2>About</h2>
  </div>
)
