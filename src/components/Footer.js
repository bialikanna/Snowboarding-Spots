import React from 'react';
import home from '../images/home.png';
import mail from '../images/mail.png';
import marker from '../images/znacznik.png';
import {Link} from "react-router-dom";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="containerr">
                <div className="wrapper ">
                    <div>
                        <Link to="/">
                        <img className="footer" src={mail} />
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                        <img className="footer" src={home}/>
                        </Link>
                    </div>
                    <div><img className="footer" src={marker} /></div>
                </div>
            </div>
        );
    }
}