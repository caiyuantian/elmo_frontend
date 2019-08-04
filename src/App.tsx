import * as React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';

class App extends React.Component {
    public render() {
        return (
            <Redirect to='/users' />
        );
    }
}

export default App;
