import React from 'react';
import './Documentations.css';

function Documentations({img, title, description}) {
    return (
        <div className="documentations">
            <div className="documentations__left">
                <img src={img} alt="documentations" />
            </div>
            <div className="documentations__right">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Documentations
