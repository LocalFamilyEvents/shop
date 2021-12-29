import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './core/app/app';

function Boot(props) {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(<Boot />, document.getElementById("root"));