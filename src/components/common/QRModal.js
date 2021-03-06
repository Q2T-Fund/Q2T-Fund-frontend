import React from 'react';
import { QRCode } from 'react-qrcode-logo';
import pokerChip from '../../assets/q2t-poker-chip.png';

const QRModal = (props, {
    display = 'block',
    position = 'fixed',
    zIndex = 1,
    left = 0,
    top = 0,
    width = '100%',
    height = '100%',
    overflow = 'auto',
    backgroundColor = 'rgba(0,0,0,0.8)'
}) => {
    return (
        <div id="qrModal" style={{ display, position, zIndex, left, top, width, height, overflow, backgroundColor }}>
            <div style={{
                backgroundColor: 'rgba(0,0,0, 0.25)',
                margin: '5%',
                padding: '20px',
                border: '1px solid #888',
                width: '50%',
                borderRadius: '25px'
            }}
                className="flex-col justify-center"
            >
                <div className="mt-3 mb-3 flex-col justify-center">
                    <QRCode
                        value={JSON.stringify(props.encodeString)}
                        logoImage={pokerChip}
                        logoWidth={140}
                        logoHeight={140}
                        bgColor="white"
                        size={420}
                        className="m-auto mb-25"
                    />

                    <div id="joinModalText" className="m-5 bg-white m-auto text-center pt-1 pr-3 pl-3 pb-1" style={{
                        'background-color': 'white',
                        "margin": '5%',
                        padding: '20px'


                    }}>
                        <p>{props.modalText}</p>
                    </div>
                    <div className="m-auto">
                        {/* DELETE THE BUTTON AFTER LONGPOLLING */}
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={props.onClose}>Close
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QRModal;