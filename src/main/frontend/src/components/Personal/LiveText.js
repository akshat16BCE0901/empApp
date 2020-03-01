import React, {Component} from 'react';

import 'jquery/dist/jquery.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

class LiveText extends Component
{
    componentDidMount = () =>{
        const script1 = document.createElement("script");
        script1.src = "https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.4/sockjs.min.js";
        script1.async = true;
        document.body.appendChild(script1);

        const script2= document.createElement("script");
        script2.src = "https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js";
        script2.async = true;
        document.body.appendChild(script2);

        const script3 = document.createElement("script");
        script3.src = "/js/main.js";
        script3.async = true;
        document.body.appendChild(script3);

        const script4 = document.createElement("script");
        script4.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
        script4.async = true;
        document.body.appendChild(script4);

        const script5 = document.createElement("script");
        script5.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
        script5.async = true;
        document.body.appendChild(script5);

        const script6 = document.createElement("script");
        script6.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js";
        script6.async = true;
        document.body.appendChild(script6);

    }
    render(){
        return(
            <div id="main-content" className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form className="form-inline">
                            <div className="form-group">
                                <label htmlFor="connect">WebSocket connection:</label>
                                <button id="connect" className="btn btn-default" type="submit">Connect</button>
                                <button id="disconnect" className="btn btn-default" type="submit"
                                        disabled="disabled">Disconnect
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <form className="form-inline">
                            <div className="form-group">
                                <label htmlFor="name">What is your name?</label>
                                <input type="text" id="name" className="form-control" placeholder="Your name here..." />
                            </div>
                            <button id="send" className="btn btn-default" type="submit">Send</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table id="conversation" className="table table-striped">
                            <thead>
                            <tr>
                                <th>Greetings</th>
                            </tr>
                            </thead>
                            <tbody id="greetings">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default LiveText;