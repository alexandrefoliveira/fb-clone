import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://static2.srcdn.com/wordpress/wp-content/uploads/2018/11/Old-Man-Logan-Fight-Maestro-Hulk-Comic.jpg"
        profileSrc="https://i.pinimg.com/originals/c2/6e/9f/c26e9ff814e7cc5ab585e2aa916886fa.jpg"
        title="Wolverine"
      />

      <Story
        image="https://vignette.wikia.nocookie.net/thefoxmen/images/2/24/Storm.jpg/revision/latest?cb=20150721040117"
        profileSrc="https://wallpaperaccess.com/full/1974899.jpg"
        title="Storm"
      />

      <Story
        image="https://api.time.com/wp-content/uploads/2019/06/mcdxmen_fe107.jpg"
        profileSrc="https://static.wikia.nocookie.net/x-men/images/1/1c/162319_main.jpg/revision/latest/scale-to-width-down/340?cb=20090121001811"
        title="Jen"
      />

      <Story
        image="https://img.cinemablend.com/filter:scale/cb/8/7/5/6/3/7/8756371549e0610c089876256b18f74e948dc45e54c6f026c86656e5433492ab.jpg?mw=600"
        profileSrc="https://i.pinimg.com/originals/aa/69/47/aa6947a8e45bb51658b39ff18d61dbff.jpg"
        title="Mystique"
      />
    </div>
  );
}

export default StoryReel;
