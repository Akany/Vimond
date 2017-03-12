import React from 'react';

import {loadAssetStream} from '../services/assets-proxy';

import Player from './player';

export default class AssetStream extends React.Component {
    constructor(props) {
        super(props);

        this.state = {url: null};
    }

    componentDidMount() {
        const assetId = this.props.id;

        loadAssetStream(assetId)
            .then(url => this.setState({url}));
    }

    render() {
        console.log(this.state.url);
        return (
            <div>
                <Player src={this.state.url}></Player>
            </div>
        );
    }
}