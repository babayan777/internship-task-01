import React from 'react'
import Check from './images/check-mark.svg'
import User from './images/user.svg'
import Coin from './images/coin.svg'

import "./Footer.scss"

function Footer() {
    return (
        <footer className="footer-container">
            <div className="client-container">
                <img src={User} />               
                <p>Over <span>650,000</span> clients enrolled</p>
            </div>
            <div className="client-container">
                <img src={Check} />
                <p>Free, <span>no risk</span> credit card debt relief consultaion</p>
            </div>
            <div className="client-container">
                <img src={Coin} />
                <p>Over <span>$10 billion</span> debt resolved since 2002</p>
            </div>
        </footer>
    )
}

export default Footer
