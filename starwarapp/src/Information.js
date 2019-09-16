import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Information.css'

const Information = ({name}) => {
    return(
        <div className={"information"}>
            <div id={'left'}> 
                <div className={"container"}>
                    <h1 className={"display-4"}>Show your CHARACTER</h1>
                    <p className={"lead"}>insert your lucky number ...</p>
                    <input 
                        type={"text"} 
                        className={"form-control"} 
                        aria-label={"Default"} 
                        aria-describedby={"inputGroup-sizing-default"} 
                        placeholder={'type press enter'}>
                    </input>
                </div>
            </div>

            <div id={'right'}> 
                <div className={"card"} >
                    <img className={"card-img-top"} src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"} alt={"Card image cap"}></img>
                    <div className={"card-body"}>
                    <p className={"card-text"}>this is {name.name} </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Information

