import Leaflet from 'leaflet'
import React from 'react'

import SimpleExample from './simple'
import EventsExample from './events'

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/'

const App = () => (
  <div>
    <h1>#gourmet_ebisu</h1>
    <SimpleExample />
  </div>
)

export default App
