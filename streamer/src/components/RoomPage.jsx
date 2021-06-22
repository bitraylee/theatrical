import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import styled from 'styled-components'
const urlparser= require("urlparser");

export default class RoomPage extends Component {
   constructor(props) {
		super(props);
      let vrl=urlparser.parse(window.location.toString()).query.params.vrl;
      this.state={
         playing:true,
         duration: 0,
         controls:true,
         url:vrl||null,
      }
      this.player=React.createRef();
      this.setState({url: this.props.url});
      this.handlePlayPause=()=>{
         this.setState({playing: !this.state.playing});
      }
		this.fallback=this.fallback.bind(this);
	}

	fallback(){
		return (
			<Background>
            <FallbackMessage>Nothing to Stream</FallbackMessage>
         </Background>
		)
	}
   // componentDidMount(){
   //    setInterval(()=>{
   //       console.log(this.player.current.getCurrentTime());
   //    },1000)
   //    // console.log(document.querySelector('#video-player'));
   // }
	render() {
      // console.log(this.player);
		return (
			<Background>
         {(this.state.url)?<ReactPlayer
         ref={this.player} id="video-player" url={this.state.url} width={window.innerWidth} height={window.innerHeight} controls={true}/>:this.fallback()}

         </Background>
			
		)
	}
}

const FallbackMessage=styled.h2`
   font-family: 'Montserrat';
   font-size: 1.4rem;
   color:#fefefe;
`;

const Background=styled.div`
   width:100vw;
   height:100vh;
   display: flex;
   justify-content: center;
   place-items:center;
   background-color:#000;
   overflow: hidden;
`;