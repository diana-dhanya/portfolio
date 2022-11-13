import "./App.css";
import background from "../src/backgroundimg.jpeg";
import * as React from "react";
import { Button, Tooltip } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import ThreePOutlinedIcon from "@mui/icons-material/ThreePOutlined";
import Face3OutlinedIcon from "@mui/icons-material/Face3Outlined";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        margin: "0px",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "sans-serif",
        }}
      >
        <Tooltip title="Main page">
          <Button
            variant="contained"
            onClick={() => window.open("https://reactjs.org", "_blank")}
            style={{
              color: "black",
              backgroundColor: "#bdcfe1",
              borderRadius: 50,
              fontFamily: "Futura",
            }}
          >
            <HomeOutlinedIcon />
          </Button>
        </Tooltip>
        &emsp;
        <Tooltip title="Projects">
          <Button
            variant="contained"
            onClick={() => window.open("https://reactjs.org", "_blank")}
            style={{
              color: "black",
              backgroundColor: "#bdcfe1",
              borderRadius: 50,
              fontFamily: "Futura",
            }}
          >
            <AccountTreeOutlinedIcon />
          </Button>
        </Tooltip>
        &emsp;
        <Tooltip title="Talk to me">
          <Button
            variant="contained"
            onClick={() => window.open("https://reactjs.org", "_blank")}
            style={{
              color: "black",
              backgroundColor: "#bdcfe1",
              borderRadius: 50,
              fontFamily: "Futura",
            }}
          >
            <ThreePOutlinedIcon />
          </Button>
        </Tooltip>
        &emsp;
        <Tooltip title="About me">
          <Button
            variant="contained"
            onClick={() => window.open("https://reactjs.org", "_blank")}
            style={{
              color: "black",
              backgroundColor: "#bdcfe1",
              borderRadius: 50,
              fontFamily: "Futura",
            }}
          >
            <Face3OutlinedIcon />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
