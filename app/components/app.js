import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import AssetsList from './assets-list';
import AssetsDetails from './asset-details';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/assets" component={AssetsList} />
                    <Route path="/asset/:id" component={AssetsDetails} />
                </div>
            </Router>
        );
    }
}