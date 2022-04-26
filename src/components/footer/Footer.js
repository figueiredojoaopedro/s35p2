import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="footer-section">
                <footer className="bg-dark text-center text-white">
                    <div className="container p-4 pb-0">
                        <section className="mb-4">
                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/super35pictures" role="button"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/super35pictures/" role="button"><i className="fab fa-instagram"></i></a>
                        </section>
                    </div>
                    <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
                        © 2020 Copyright:
                        <a className="text-white" href="super35pictures.com.br">super35pictures.com</a>
                        <p className="text-center">comercial@super35pictures.com.br</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;