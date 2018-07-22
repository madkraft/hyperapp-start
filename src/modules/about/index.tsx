import { Component, h } from 'hyperapp'
import { Link } from '@hyperapp/router'

interface AboutModule {
  state: {}
  actions: {}
  view(): JSX.Element
}

const AboutModule: AboutModule = {
  state: {},
  actions: {},
  view: () => (
    <div>
      <Link to="/">Home</Link>
      <h2>About</h2>
    </div>
  )
}

export default AboutModule
