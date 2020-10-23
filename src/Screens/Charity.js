import React from 'react';
import './Charity.css';
import Documentations from '../Components/Documentations';

import coffeeCup from '../media/coffee-cup.png';

import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

function Charity() {
    return (
        <div className="charity">
            <div className="charity__left">
                <div className="charity__leftTop">
                    <div className="charity__leftTopSocial">
                        <TwitterIcon />
                        <YouTubeIcon />
                        <InstagramIcon />
                    </div>
                    <div className="charity__leftTopCircle">
                        <img src={coffeeCup} alt="coffee cup" />
                    </div>
                </div>
                <div className="charity__leftBottom">
                    <h4>Documentations</h4>
                    <div className="charity__leftBottomDocumentations">
                        <Documentations img="https://cdn.vox-cdn.com/thumbor/J3vYy7WxwuXGlhS9TxtrfnXCRLg=/0x0:1754x1241/1200x800/filters:focal(737x481:1017x761)/cdn.vox-cdn.com/uploads/chorus_image/image/65807400/GettyImages_1060748862.0.jpg" title="Nanaonan kamu" description="Lorem ipsum dolor et constecture ..." />
                        <Documentations img="https://econsultancy.imgix.net/content/uploads/2018/01/05151122/ROW-50-charity.png" title="Apawe kepocharity " description="Lorem ipsum dolor et constecture ..." />
                    </div>
                </div>
                
            </div>
            <div className="charity__right"></div>
        </div>
    )
}

export default Charity
