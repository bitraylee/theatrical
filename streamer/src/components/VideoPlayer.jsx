import React, { Component } from 'react'
import ReactPlayer from 'react-player';

class VideoPlayer extends Component {
	constructor(props) {
		super(props);
		this.fallback=this.fallback.bind(this);
	}

	fallback(){
		return (
			<div className="logo">
				<h1>🤷</h1>
				<h2>Nothing to stream</h2>
			</div>
		)
	}

	render() {
		return (
			<div>
        		{(this.props.url)?<ReactPlayer url={this.props.url}/>:this.fallback()}
			</div>
		)
	}
}

export default VideoPlayer;
