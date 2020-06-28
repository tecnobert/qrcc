import React from "react";
import "../Qrcode.css";
import LinkTrace from "../link/LinkTrace";

const currentYear = new Date().getFullYear();

const PartFooter = () => (
  <div className="Qr-titled">
    <div className="Qr-Centered Qr-footer note-font">
      <div className="Qr-footer-part">
        <strong>Autor</strong>&emsp;
        <LinkTrace
          href="https://hebertbarros.now.sh/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Hebert F. Barros
        </LinkTrace>
        &emsp;
        <LinkTrace
          href="https://github.com/tecnobert/qrcc"
          rel="noopener noreferrer"
          target="_blank"
        >
          Tecnobert
        </LinkTrace>
        <span className="gray">&ensp;丨&ensp;</span>
        <span>
          <LinkTrace href="privacy" rel="noopener noreferrer" target="_blank">
            Política de privacidade
          </LinkTrace>
          <span className="gray">&ensp;丨&ensp;</span>
        </span>
        <span>
          <LinkTrace href="terms" rel="noopener noreferrer" target="_blank">
            Termos e condições
          </LinkTrace>
          <span className="gray">&ensp;丨&ensp;</span>
        </span>
        <span>
          <LinkTrace href="contact" rel="noopener noreferrer" target="_blank">
            Entre em contatos
          </LinkTrace>
          <span className="gray">&ensp;丨&ensp;</span>
        </span>
        <span>
          <LinkTrace href="api" rel="noopener noreferrer" target="_blank">
            Interface API <sup>teste</sup>
          </LinkTrace>
          <span className="gray">&ensp;丨&ensp;</span>
        </span>
      </div>

      <div className="Qr-footer-part">
        <strong>Mais aplicações</strong>&emsp;
        <span>
          <LinkTrace
            href="https://tecnobert.github.io/randpass/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Randpass - Gerador de senhas
          </LinkTrace>
          <span className="gray">&ensp;丨&ensp;</span>
        </span>
        <span>
          <LinkTrace
            href="https://konvertilo.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Konvertilo - Conversor de binário para decimal
          </LinkTrace>
          <span className="gray">&ensp;丨&ensp;</span>
        </span>
        <span>
          <LinkTrace
            href="https://github.com/tecnobert/react-calculator"
            rel="noopener noreferrer"
            target="_blank"
          >
            React Calculator
          </LinkTrace>
          <span className="gray">&ensp;丨&ensp;</span>
        </span>
        <span>
          <LinkTrace
            href="https://fotoj.now.sh/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Fotoj - Banco de imagens
          </LinkTrace>
        </span>
      </div>

      <div className="Gray">
        Copyright © {currentYear} Hebert F. Barros
        <br />
        <LinkTrace
          href="https://tecnobert.com.br/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Tecnobert
        </LinkTrace>
      </div>
    </div>
  </div>
);

export default PartFooter;
