// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './features/auth/auth.context.jsx';
import { InterviewProvider } from './features/ai/interview.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <InterviewProvider>
        <App />
        <ToastContainer position="bottom-right" theme="light" />
      </InterviewProvider>
    </AuthProvider>
  </React.StrictMode>
);