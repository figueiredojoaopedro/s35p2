import React, { Component } from "react";
import Images from "./Images-works";
import "./works.css";
class Works extends Component {
    render() {
        return (
            <div id="Work" className="works-section">
                <div className="work-title">
                    <h3>Nossos projetos...</h3>
                </div>
                
                <div className="gallery">
                    {Images.map((item,i) => {
                            return (
                            <div key={i} className="image-works">
                                <img src={item.src} alt={item.alt} id={item.id}></img>
                            </div>);
                        })}
                        <div className="videos">
                            <iframe  width="560" height="315" src="https://www.youtube.com/embed/oMh6OeUOjkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="videos">
                            <iframe  width="560" height="315" src="https://www.youtube.com/embed/NqUwDXDBSxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                </div>

            </div>
        );
    }
}
export default Works;
