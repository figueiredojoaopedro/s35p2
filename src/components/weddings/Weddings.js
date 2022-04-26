import React, {Component} from "react";
import wedding from "./weddings-pic";
import "./wedding.css";

class Wedd extends Component{
    render(){
        return(
            <div id="Wedding" className="wedd-section">
                <div className="wedd-title">
                    <h4>Casamentos...</h4>
                </div>
                <div className="wedd-gallery">
                    {wedding.map((item, index) => {
                        return(
                            <div key={index} className="wedd-image">
                                <img src={item.url} alt={item.alt}></img>
                            </div>
                        );
                    })
                    }
                    <div className="videos">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/v-WWep24J9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="videos">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RfZQXCG5W6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="videos">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/K-5E8NgcikM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wedd;