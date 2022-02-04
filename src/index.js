import React from "react";
import ReactDom from "react-dom";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";
import App from "./app";
import "./index.css";

ReactDom.render(
  <SpeechProvider appId="66ae4bd1-c3c1-490f-b642-b6c71c16e13a" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
