import React from 'react';
import './App.css';
import LinkButton from "../link/LinkButton";
import GitHubButton from 'react-github-btn'
import LinkTrace from "../link/LinkTrace";

const PartMore = () => (
  <>
        <div className="Qr-Centered btn-row">
            <div className="div-btn">
                <LinkButton href={"https://www.yuque.com/qrbtf/docs/donate"} value={"打赏"} />
                <LinkButton href={"https://github.com/tecnobert/qrcc"} value={"Github"} />
            </div>
            <div className="div-btn">
                <LinkButton href={"https://github.com/tecnobert/qrcc/issues"} value={"反馈"} />
                <LinkButton href={"https://mp.weixin.qq.com/s/GFEMCWQu3e2qhTuBabnHmQ"} value={"开发"} />
            </div>
        </div>
    </>
)

export default PartMore;
