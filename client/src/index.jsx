import React from 'react';
import { createRoot, render } from 'react-dom/client';
import App from './components/App.jsx';
import Modal from'react-modal';

const root = createRoot(document.getElementById('root'))
Modal.setAppElement(document.getElementById('root'));
root.render(<App />)