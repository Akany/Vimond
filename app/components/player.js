import React from 'react';
import Hls from 'hls.js';

export default class Player extends React.Component {
    constructor(props) {
        super(props);

        this.hls = new Hls();
    }

    componentDidMount() {
        this.hls.loadSource(this.props.src);
        this.hls.attachMedia(this.player);
    }

    componentDidUpdate() {
        this.hls.loadSource(this.props.src);
    }

    render() {
        return (
            <video
                controls
                ref={dom => this.player = dom}
                style={{width: '720px'}}
            ></video>
        );
    }
}