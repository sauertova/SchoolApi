import React from 'react'
import {ReactRoot} from 'react-dom/client'
import App from './components/App'

const root = createRoot(document.getElementById('app'));
ReactRoot.render(<App />);