import React, { useEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  //   const [parentHeigt, setParentHeigt] = useState("auto");
  const handleChange = (event) => {
    setTextareaHeight("auto");
    // setParentHeigt(`${textareaRef?.current?.scrollHeight}px`);
    setText(event.target.value);
  };
  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    // setParentHeigt(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div
      className="p-5"
      //   style={{
      //     minHeigh: parentHeigt,
      //   }}
    >
      <textarea
        className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-200 resize-none leading-normal"
        placeholder="Please enter your text..."
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
