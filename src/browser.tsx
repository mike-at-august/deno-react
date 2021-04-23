import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.60/index.js'
import { App } from './http/get-index/app.tsx'

window.addEventListener('DOMContentLoaded', () => {
  //@ts-ignore
  let el = window.document.getElementById('app')
  ReactDOM.hydrate(<App/>, el)
})
