import React, { Component } from "react";
import wedding from "./wedding_pic.jpeg";
import "./about.css";

class About extends Component {
    render() {
        return (
            <div id="About" className="about">
                <h2 className="about-us">Sobre</h2>
                <div className="image-text-container">
                    <div className="image-container">
                        <img className="wedding-image" src={wedding} alt="Couple holding hands"></img>
                    </div>
                    <p className="para">A Super 35 Pictures nasceu em 2020, um ano de incertezas e em meio a uma pandemia global.
Uma empresa formada por 4 sócios da área do audiovisual, surgiu no mercado trazendo soluções completas para os seus clientes.
Nosso objetivo é revolucionar a imagem do seu negócio com as melhores tendências do mercado.
Nós cuidamos das suas redes sociais, produzimos o seu conteúdo e organizamos seus evento.
Possuimos projetos com o Governo do Estado de São Paulo, com as apresentadoras Adriane Galisteu e Maria Eugênia, de casamentos e vídeo clipes com os mais diversos artistas.
Só aqui você encontrará uma produtora completa que vai cuidar do seu negócio em 360º.</p>
                </div>
            </div>
        );
    }
}

export default About;
