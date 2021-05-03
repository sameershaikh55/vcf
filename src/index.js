import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import vcf from "./contacts.vcf";

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem",
        width: "100%",
      }}
    >
      <div style={{ padding: "10px 20px", background: "black" }}>
        <a
          href={vcf}
          download
          style={{ color: "white", textDecoration: "none" }}
        >
          Download
        </a>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
