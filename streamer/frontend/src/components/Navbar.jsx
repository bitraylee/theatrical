import React from 'react'
import styled from 'styled-components'
export default function Navbar() {
   const Navbar=styled.div`
      width:100vw;
      height: 15vh;
      position: absolute;
      top:0;
      left: 0;
      display: flex;
      justify-content: flex-start;
      place-items: flex-end;

      /* background: rgb(0,0,0);
      background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%); */

      h1{
         padding: 0 60px;
         font-family: Soulcraft_UE;
         letter-spacing: 2pt;
         color:#fefefe;
         /* font-style:oblique 90deg; */
      }
   `
   return (
      <Navbar className="navbar">
         <h1>THEATRICAL .</h1>
         {/* <h1>TH<span>E</span>ATRICA<span>L.</span></h1> */}
      </Navbar>
   )
}
