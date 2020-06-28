import React from 'react';
import './App.css';
import ParamListViewer from "../../containers/param/ParamListViewer";
import ParamCorrectLevelViewer from "../../containers/param/ParamCorrectLevelViewer";

const PartParams = () => (
    <div className="Qr-titled-nobg">
        <div className="Qr-Centered title-margin">
            <div className="Qr-s-title">Parâmetros</div>
            <p className="Qr-s-subtitle">Ajuste de parâmetros</p>
        </div>
        <div className="Qr-Centered">
            <div className="Qr-div-table">
                <ParamCorrectLevelViewer/>
                <ParamListViewer/>
            </div>
        </div>
    </div>
)

export default PartParams;
