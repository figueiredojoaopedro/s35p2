import React, {Component} from 'react';
import "./team.css";
import team from "./team-pics"

class Team extends Component{
    render(){
        return(
            <div id='Team' className='team-section'>
                <div className='team-title'>
                    <h5>Equipe</h5>
                </div>

                <div className='team-stuff'>
                    {team.map((item, index) => {
                        return(
                            <div key={index} className='team-picture'>
                                <img src={item.url} alt={item.alt} id={item.id}></img>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p> 
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Team;