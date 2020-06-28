import React, { useState } from "react";
import "./styles/css/App.css";
import { useQRCC } from "qrcc-pack";
import { Container, Row, Col } from "react-bootstrap";
import NavTop from "./views/shared/navTop/navTop.jsx";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const ComumErrors = {
  Error0X: "erro-ao-obter-url",
};
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const [valuetext, setValuetext] = useState("");

  //const [margin, setMargin] = useState("");

  const [quality, setQuality] = useState("");
  const handleChangeQuality = (event) => {
    setQuality(event.target.value);
  };
  const [type, setType] = useState("");
  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  //const [scale, setScale] = useState("");

  //const [width, setWidth] = useState("");

  const [level, setLevel] = React.useState("");
  const handleChangeLevel = (event) => {
    setLevel(event.target.value);
  };
  const classes = useStyles();

  let useValuetext = valuetext || "https://github.com/tecnobert/qrcc-pack";
  const [inputRef] = useQRCC({
    text: useValuetext,
    options: {
      type: type || "image/jpeg",
      quality: quality || 0.3,
      level: level || "M",
      margin: 3,
      scale: 4,
      width: 200,
      color: {
        dark: "#006064",
        light: "#fff",
      },
    },
  });

  function getUrl() {
    let MyImg = document.querySelector("output");
    let URLFinal = MyImg;

    if (URLFinal != null) {
      return URLFinal;
    } else {
      return "resp";
    }
  }

  function dlAction() {
    let imgSource = getUrl();
    if (imgSource !== ComumErrors.Error0X) {
      let errorCall = "?error";
      window.location.href = imgSource + errorCall;
    } else {
      let dlCall = "?attachment";
      window.location.href = imgSource + dlCall;
    }
  }
  console.log(getUrl());
  return (
    <>
      <NavTop />
      <Container fluid>
        <Row>
          <div className="colInput">
            <div className="InputDiv">
              <h3>Input</h3>
              <div className="InputSub">
                <Container>
                  <Col>
                    <div className="InputBaseDiv">
                      <Input
                        placeholder="Your URL or data text"
                        color="primary"
                        onChange={(e) => setValuetext(e.target.value)}
                        inputProps={{ "aria-label": "description" }}
                      />

                      <div>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">
                            Image type{" "}
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            onChange={handleChangeType}
                          >
                            <MenuItem value={"image/png"}>PNG</MenuItem>
                            <MenuItem value={"image/jpeg"}>JPGEG</MenuItem>
                            <MenuItem value={"image/webp"}>WEBP</MenuItem>
                          </Select>
                        </FormControl>
                      </div>

                      <div>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">
                            Image quality{" "}
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={quality}
                            onChange={handleChangeQuality}
                          >
                            <MenuItem value={0.3}>Low</MenuItem>
                            <MenuItem value={0.5}>Medium</MenuItem>
                            <MenuItem value={1}>Maximun</MenuItem>
                          </Select>
                        </FormControl>
                      </div>

                      <div>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">
                            Correction level.{" "}
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={level}
                            onChange={handleChangeLevel}
                          >
                            <MenuItem value={"low"}>Low</MenuItem>
                            <MenuItem value={"medium"}>Medium</MenuItem>
                            <MenuItem value={"quartile"}>Quartile</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  </Col>
                </Container>
              </div>
            </div>
          </div>

          <div className="colOutput">
            <div className="resultDiv">
              <h3>Output</h3>

              <div className="resultSub">
                <Container>
                  <div className="resultBaseQR">
                    <img
                      className="outputImg"
                      id="output"
                      ref={inputRef}
                      alt=""
                    />
                  </div>
                </Container>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className="resultButton"
                  onClick={dlAction}
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default App;
