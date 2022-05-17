import React from 'react';
import './card.css';
import transakSDK from '@transak/transak-sdk';

const Card = () => {
     
    const Handler = () => {
let transak = new transakSDK({
    apiKey: 'ce7e0f1e-5818-4cbd-8e50-cb380bb74003',  // API Key
    environment: 'STAGING', // STAGING/PRODUCTION
    defaultCryptoCurrency: 'ETH',
    walletAddress: '', // customer's wallet address
    themeColor: '000000',// theme color
    fiatCurrency: '', 
    email: '', //  email address
    redirectURL: '',
    hostURL: window.location.origin,
    widgetHeight: '550px',
    widgetWidth: '450px'
});

transak.init();

// To get all the events
/*transak.on(transak.ALL_EVENTS, (data) => {
		
});*/

// This will trigger when the user marks payment is made.
transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
    transak.close();
   
});
 
    }
  return ( <>
        <div className="action_card">
            <div className="card">
                <div className="card_image">
                    <img src='/images/portfolio.png' alt="an image showing cyrpto assets" />
                </div>
                <div className="card_text">
                    <p> We support all major networks; trade all your favourite assets in one place ETH, BSC, BEP20 and more  <button onClick={() => Handler()}>Buy now</button>
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card_image">
                    <img src='/images/relax.png' alt="an image showing cyrpto assets" />
                </div>
                <div className="card_text">
                    <p> It can't get easier; buy your favourite tokens at your convenience! with a minute approval interval  <button onClick={() => Handler()}>Buy now</button>
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card_image">
                    <img src='/images/payment.png' alt="an image showing cyrpto assets" />
                </div>
                <div className="card_text">
                    <p> We currently over 100 major fiat currencies; you can pay with your bank card or bank transfer <button onClick={() => Handler()}>Buy now</button>
                    </p>
                </div>
            </div>
        </div>     
  </>)
  
}

export default Card ;