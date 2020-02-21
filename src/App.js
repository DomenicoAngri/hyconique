import React from 'react';
import './css/main.css';

function App(){
    return(
        <div className="bkg-img">
            <div className="container">
                <div className="top-container">
                    <h3>H Y C O N I Q U E</h3>
                </div>
                
                <div className="middle-container">
                    <h2>Coming Soon</h2>
                </div>
                
                <div className="bottom-container">
                    <p>FOLLOW US</p>

                    <div className="icon-container">
                        <a className="icon-style" href="http://fb.com/hyconique">
                            <i className="fab fa-facebook-f"></i>
                            <span className="icon-footer">fb.com/hyconique</span>
                        </a>

                        <a className="icon-style" href="https://www.instagram.com/hyconique/">
                            <i className="fab fa-instagram"></i>
                            <span className="icon-footer">@hyconique</span>
                        </a>
                    </div>

                    <p>www.hyconique.com</p>
                </div>
            </div>
        </div>
    );
}

export default App;