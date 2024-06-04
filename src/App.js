import React from "react";
import "./App.scss";
import SignUpFormFinal from "./components/form/SignUpFormFinal";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    blue: "#2979ff",
  },
  orange: "#ffa400",
};
// curly braces {} : sử dụng biến trong thẻ html
function App() {
  const name = "Chien";
  // const [show, setShow] = React.useState(false);
  // const { show, setShow, nodeRef } = useClickOutSide("");
  return (
    <div>
      {/* children: html,component,text,variable */}
      {/* <ThemeProvider theme={theme}></ThemeProvider> */}
      {/* <GlobalStyles></GlobalStyles> */}
      {/* <YoutubeList>
        {name}
      </YoutubeList> */}
      {/* <Toggle></Toggle> */}
      {/* <Counter></Counter> */}
      {/* <Game></Game> */}
      {/* <Button>Primary</Button>
      <Button secondary>Secondary</Button> */}
      {/* <CardList>
        <Card secondary={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList> */}
      {/* <CardList>
        <CardTailwind primary={true} fontSize="text-2xl"></CardTailwind>
      </CardList> */}
      {/* <Photos></Photos> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackerNewsWithReducer></HackerNewsWithReducer> */}
      {/* <StopWatch></StopWatch> */}
      {/* <Input></Input> */}
      {/* <TextareaAutoResize></TextareaAutoResize> */}
      {/* <Blog></Blog> */}
      {/* <button
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
      >
        Show Menu
      </button>
      <SidebarMenu show={show} ref={nodeRef}></SidebarMenu> */}
      {/* <div className="p-5">
        <Dropdown></Dropdown>
      </div> */}
      {/* FIX LỖI UNMOUNTED COMPONENT */}
      {/* <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle Button
      </button>
      {show && <HackerNews></HackerNews>} */}
      {/* <Form></Form> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <SignUpFormV2></SignUpFormV2> */}
      {/* <SignUpFormFinal></SignUpFormFinal> */}
    </div>
  );
}
//Rendering List

export default App;
