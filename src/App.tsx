import * as React from 'react';
import './App.css';
import { Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Link component={RouterLink} to="/users">Twitter User Query</Link>
            </div>
        );
    }
}

export default App;
