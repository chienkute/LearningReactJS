import React from "react";
import { YoutubeData } from "../../data";
import Youtubeitem from "./Youtubeitem";

const YoutubeList = (props) => {
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) newClass = "abc";
        return (
          <Youtubeitem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
            className={newClass}
          ></Youtubeitem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
