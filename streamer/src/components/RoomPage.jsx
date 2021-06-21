import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import styled from 'styled-components'
export default class RoomPage extends Component {
   constructor(props) {
		super(props);
      this.state={
         playing:true,
         duration: 0,
         controls:true,
         url:null,

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
   // ref=player=>{
   //    this.player=player;
   // }
   // componentDidMount(){
   //    var video = document.querySelector('.video-player video');
   //    var nav=document.querySelector('navbar');
   //    var i = null;

   //    video.addEventListener('pause', function () {
   //       nav.show();
   //       // video has paused, so if the caption fadeout timer has started, cancel it
   //       clearTimeout(i);
   //    })

   //    video.addEventListener('playing', function () {
   //       nav.delay(2500).fadeOut();    
   //    })


   //    Background.mousemove(function () {
   //       clearTimeout(i);
   //       // only start the timer if the video is not paused
   //       if (!video.paused) {
   //          nav.fadeIn();

   //          i = setTimeout(function () {
   //          nav.fadeOut();
   //          }, 2500);
   //       }
   //    })
   // }
   componentDidMount(){
      setInterval(()=>{
         console.log(this.player.current.getCurrentTime());
      },1000)
      // console.log(document.querySelector('#video-player'));
   }
	render() {
      // console.log(this.player);
		return (
			<Background>
         {(this.props.url)?<ReactPlayer
         ref={this.player} id="video-player" url={this.props.url} width={window.innerWidth} height={window.innerHeight} controls={true}/>:this.fallback()}

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