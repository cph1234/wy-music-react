import React from 'react'

import ReactDOM from 'react-dom/client'

import "@/assets/css/reset.css"

import App from "./App"

import { Provider } from 'react-redux'

import store from './store'

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Provider store={store}><App /></Provider>);