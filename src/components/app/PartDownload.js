import React, { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";
import { isWeiXin } from "../../utils/navigatorUtils";

const WxMessage = () => {
  if (isWeiXin()) {
    return (
      <div className="note-font" id="wx-message-inner">
        O cliente atual não suporta o download de SVG，
        <br />
        Faça o download do JPG e pressione e segure o código QR para salvar.
      </div>
    );
  }
  return null;
};

const PartDownload = ({
  value,
  downloadCount,
  onSvgDownload,
  onJpgDownload,
}) => {
  const [imgData, setImgData] = useState("");

  return (
    <div className="Qr-titled">
      <div className="Qr-Centered title-margin">
        <div className="Qr-s-title">Área de Downloads</div>
        <p className="Qr-s-subtitle">
          Baxe o QR — {value}
          <sup className="Gray"> {downloadCount}</sup>
        </p>
      </div>
      <div className="Qr-Centered">
        <div className="btn-row">
          <div className="div-btn">
            <button
              className="dl-btn"
              onClick={() => {
                onJpgDownload().then((res) => setImgData(res));
              }}
            >
              JPG
            </button>
            <button className="dl-btn" onClick={onSvgDownload}>
              SVG
            </button>
          </div>
        </div>

        <div id="wx-message">
          <WxMessage />
        </div>
        <div>
          {imgData.length > 0 ? (
            <div id="dl-image">
              <div id="dl-image-inner">
                <img
                  id="dl-image-inner-jpg"
                  src={imgData}
                  alt="长按保存二维码"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

PartDownload.propTypes = {
  value: PropTypes.string.isRequired,
  onSvgDownload: PropTypes.func.isRequired,
  onJpgDownload: PropTypes.func.isRequired,
};

export default PartDownload;
