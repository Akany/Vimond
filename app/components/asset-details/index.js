import React from 'react';

import {loadAsset} from '../../services/assets-proxy';
import './asset-details.scss';

export default class AssetDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            asset: null
        };
    }

    componentDidMount() {
        const assetId = this.props.match.params.id;

        loadAsset(assetId)
            .then(asset => this.setState({asset}));
    }

    onChange(key) {
        return event => {
            let {asset} = this.state;

            asset[key] = event.target.value;
            this.setState({asset});
        }
    }

    render() {
        if (!this.state.asset) {
            return <div>Loading...</div>
        }

        console.log(this.state.asset);
        return (
            <div className="asset-details">
                <div className="image-thumb">
                    <img src={this.state.asset.imageUrl} />
                </div>
                <div className="image-meta">
                    <div className="image-meta-item">
                        <label>
                            Title
                            <input value={this.state.asset.title} onChange={this.onChange('title')}/>
                        </label>
                    </div>
                    <div className="image-meta-item">
                        <label>
                            Id
                            <input defaultValue={this.state.asset['@id']}/>
                        </label>
                    </div>
                    <div className="image-meta-item">
                        <label>
                            Uri
                            <input value={this.state.asset['@uri']} onChange={this.onChange('@uri')}/>
                        </label>
                    </div>
                    <div className="image-meta-item">
                        <label>
                            Description
                            <input value={this.state.asset.description} onChange={this.onChange('description')}/>
                        </label>
                    </div>
                    <div className="image-meta-item">
                        <label>
                            Create time
                            <input defaultValue={this.state.asset.createTime}/>
                        </label>
                    </div>
                    <div className="image-meta-item">
                        <label>
                            Update time
                            <input defaultValue={this.state.asset.updateTime}/>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}