import { Avatar } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import React, { useState } from "react";
import "./MessageSender.css";

function MessengerSender() {

const [input, setInput] = useState("");
const [imageURL, setImageUrl] = useState("");

// This handleSubmit don't refresh the entire page, in the case you can't put this method will refresh the entire page.
const handleSubmit = (e) => {
  e.preventDefault();

    setInput("")
    setImageUrl("")
}

  return <div className="messageSender">
    <div className="messageSender__top">
        <Avatar />
        <form>
          <input 
            type="text" 
            value={input}
            onChange = {(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder="What is in your mind?"
           
          />
          <input  
            type="text"
            value={imageURL}
            onChange= {(e) => setImageUrl(e.target.value)}
            className="messageSender__input"
            placeholder="Image URL (optional)" 
            
          />
          <button onClick={handleSubmit} type="submit">Hidden Submit</button>
        </form>    
    </div>

    <div className="messageSender__bottom">
      <div className="messageSender__option">
        <VideocamIcon style={{color: "red"}} /> 
        <h3>Live Video</h3>
      </div>

      <div className="messageSender__option">
        <PhotoLibraryIcon style={{color: "green"}} />
        <h3>Photo/Video</h3>
      </div>

      <div className="messageSender__option">
        <InsertEmoticonIcon style={{color: "orange"}} />
        <h3>Feeling/Activity</h3>
      </div>
    </div>
  </div>
}

export default MessengerSender;
