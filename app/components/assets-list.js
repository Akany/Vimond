import React from 'react';
import {Link} from 'react-router-dom';

import {loadAssets} from '../services/assets-proxy';

export default class AssetsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            assets: []
        };
    }

    componentDidMount() {
        loadAssets()
            .then(assets => {
                this.setState({assets});
            });
    }

    render() {
        return (
            <div>
                {this.makeAssets(this.state.assets)}
            </div>
        );
    }

    makeAssets(assets = []) {
        return assets.map(asset => {
            const id = asset['@id'];

            return (
                <li key={id}>
                    <Link to={`/asset/${id}`}>
                        {asset['@uri']}
                    </Link>
                </li>
            );
        });
    }
}