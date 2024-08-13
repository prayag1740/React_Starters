import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

function QrCodeGenerator() {

    const [input, setInput] = useState('');
    const [qrValue, setQrvalue] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    const handleQRvalue = () => {
        setQrvalue(input);
    } 

  return (
    <div className="qr-container">
      <h1 style={{color: "red"}}>Qr Code Generator</h1>
      <div className="qr-form">
            <input type="text" value={input} onChange={handleInputChange} placeholder="Enter text to generate QR code" />
            <button onClick={handleQRvalue} > Generate QR </button>
      </div>
      <QRCode size={200} value={qrValue} />
    </div>
  );
}

export default QrCodeGenerator;
