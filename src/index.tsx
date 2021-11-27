import React from 'react';
import ReactDOM from 'react-dom';

import QuickForm from './QuickForm';

import './index.css';
import './QuickForm.css';

const App = () => {
  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <QuickForm<{
        email: string;
        password: string;
      }>
        properties={{
          email: {
            type: 'email',
            placeholder: 'Please input email',
            required: true,
          },
          password: {
            type: 'password',
            placeholder: 'Please input password',
            required: true,
          },
        }}
        onSubmit={(data) => {
          alert(JSON.stringify(data));
        }}
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
