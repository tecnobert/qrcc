<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/qrcg/master/.github/images/favicon512x512-qrcc.png" align="center" alt=":package: qrcg" />
 <h2 align="center">:package: qrcg</h2>
 <p align="center">QR Code Generator - Made With React.js</p>
</p>

<p align="center">Did you like the project? Please, considerate <a href="https://github.com/hebertcisco/hebertcisco/blob/main/.github/patreon.md">being a supporter</a> and receive exclusive gifts!
 </p>

## Installation

> Clone this repository: `git clone https://github.com/hebertcisco/qrcg`

### Open the directory and install the dependencies

```bash
cd qrcg && npm i
```

## Running the project

> In the project directory, you can run:

```sh
yarn start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

# Use in Your Project

Install the package with npm or yarn:

```sh
npm i qrcg
#or
yarn add qrcg
```

In your code:

```js
import {connect} from 'react-redux';
import {changeStyle} from "../../actions";
import StyleList from "qrcg";
import RendererViewer from "./RendererViewer";
 import {
  Renderer25D,
  RendererBase,
  RendererBlank,
  RendererCircle,
  RendererDSJ,
  RendererFunc,
  RendererImage,
  RendererLine,
  RendererLine2
  RendererRandRect,
  RendererResImage,
}; from "qrcg"
import { RendererRandRound, RendererRect, RendererRound } from "../../components/renderer/RendererBase";
 import { RendererFuncA, RendererFuncB } from "../../components/renderer/RendererFunc";
import * as React from "react";

const styles = [
    {value: "A1", renderer: RendererRect},
    //{value: "C2", renderer: RendererResImage},
    //{value: "SP — 1", renderer: RendererDSJ},
    {value: "A2", renderer: RendererRound},
    {value: "A3", renderer: RendererRandRound},
    {value: "A — a1", renderer: RendererLine},
    {value: "A — b2", renderer: RendererFuncB},
    {value: "SP — 3", renderer: RendererCircle},
   // {value: "C1", renderer: RendererImage},
    {value: "B1", renderer: Renderer25D},
    {value: "A — a2", renderer: RendererLine2},
    {value: "A — b1", renderer: RendererFuncA},
    {value: "SP — 2", renderer: RendererRandRect},
]

const paramInfoBuffer = new Array(16).fill(new Array(16))
const paramValueBuffer = new Array(16).fill(new Array(16))

const setParamInfo = (renderIndex, paramInfo) => {
    paramInfoBuffer[renderIndex] = paramInfo
    paramValueBuffer[renderIndex] = paramInfo.map(item => item.default)
}

const mapStateToProps = state => ({
    styles: styles.map((style, index) => {
        return {
            value: style.value,
            selected: state.selectedIndex === index,
            details: style.renderer.detail,
            renderer: <RendererViewer rendererType={style.renderer} index={index} setParamInfo={setParamInfo}/>
        }
    })
})

const mapDispatchToProps = dispatch => ({
    onSelected: rendererIndex => {
        dispatch(changeStyle(rendererIndex, styles[rendererIndex].renderer, styles[rendererIndex].value))
    }
})

const StyleListViewer = ({setParamInfo}) => {
    let res = connect(mapStateToProps, mapDispatchToProps)(StyleList)
    setParamInfo(paramInfoBuffer, paramValueBuffer);
    return res;
}

export default StyleListViewer;
```
