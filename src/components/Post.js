import { Avatar, Divider } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

// PROPS was aplicable here
function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
      </div>
      <div className="post__topInfo">
        <h3>{username}</h3>
        <p>Timestamp...</p>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="Image" />
      </div>
      <div className="post__options">
            <div className="post__option">
                <ThumbUpIcon />
                <p>Like</p>
            </div>  
            <div className="post__option">
                <ChatBubbleOutlineOutlineIcon />
                <p>Comment</p>
            </div>
            <div className="post__option">
                <NearMeIcon />
                <p>Share</p>
            </div>
            <div className="post__option">
                <AccountCircleIcon />
                <ExpandMoreOutlined />
            </div>
      </div>
    </div>
  );
}

export default Post;
