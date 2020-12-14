import { Divider } from "@material-ui/core";
import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars1.githubusercontent.com/u/35555946?s=460&u=17ec0285836ef1503b26a3f3bb6ca01800324ff1&v=4"
        image="https://www.topgear.com/sites/default/files/styles/large/public/cars-car/carousel/2018/11/a1813694_large.jpg?itok=L-V04Nmn"
        username="Alexandre Oliveira"
        timestamp="This is a Timestamp"
        message="Wooow this works!!!"
      />
      <Post
        profilePic="https://avatars1.githubusercontent.com/u/35555946?s=460&u=17ec0285836ef1503b26a3f3bb6ca01800324ff1&v=4"
        image="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-Online-Code-Editors.png"
        username="Alexandre Oliveira"
        timestamp="This is a Timestamp"
        message="This is great!!!"
      />
    </div>
  );
}

export default Feed;
