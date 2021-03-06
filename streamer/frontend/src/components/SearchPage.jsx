import React, { useState } from "react";
import styled from "styled-components";
import ArrowForward from "@material-ui/icons/ArrowForward";
import randomstring from "randomstring";
import DOMPurify from "dompurify";

export default function SearchPage() {
  const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #121212;

    display: flex;
    justify-content: center;
    place-items: center;

    .input-field-container {
      width: 80vw;
      height: 20vh;
      /* background-color: red; */

      display: flex;
      justify-content: center;
      place-items: center;
      .url-src {
        width: 75%;
        height: 70px;
        margin: 0 10px;
        padding: 0 40px;

        font-family: "Montserrat";
        font-size: 1.2rem;
        background: none;
        border: none;
        color: #fefefe;
        border: rgba(255, 255, 255, 0.4) 2px solid;
        ::placeholder {
          color: #aeaeae;
        }
        :focus {
          outline: none;
          border: #f54748 2px solid;
        }
      }
      .submit {
        width: 20%;
        height: 70px;
        margin: 0 10px;
        background-color: rgba(255, 255, 255, 0.1);
        border: none;
        font-family: Soulcraft_UE;
        color: rgba(255, 255, 255, 1);
        font-size: 1.5rem;
        display: flex;
        place-items: center;
        justify-content: center;
        * {
          padding: 0 5px;
          transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

        :hover {
          background-color: #f54748;
          * {
            padding: 0 15px;
            transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
          }
          transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      }
    }
  `;

  const [url, setUrl] = useState("");

  // submit query
  function createRoom(e) {
    e.preventDefault();
    const roomid = randomstring.generate({ length: 8 });
    // FIXME: temporary hack: converting URL to base64 string
    const video_source = window.btoa(DOMPurify.sanitize( url ));
    alert(`vs=${video_source}`);
    window.location = `/room/${roomid}?vs=${video_source}`;
  }

  return (
    <Background>
      <form onSubmit={createRoom}>
        <div className="input-field-container">
          <input
            required
            id="vidurl"
            className="url-src"
            type="text"
            name="vsrc"
            placeholder="Paste the Video URL here."
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
          <button
            className="submit"
          >
            <h3>GO</h3>
            <ArrowForward></ArrowForward>
          </button>
        </div>
      </form>
    </Background>
  );
}
