import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class IndividualJiraPage extends Component
{

    componentDidMount = () =>{

    }
    render(){
        return(
            <div className="row" style={{backgroundColor:"white",padding : "10px"}}>
                <div className="col-md-4">
                    <p><span className="h6">ID : </span>22</p>
                    <p><span className="h6">Title : </span>Reduce DAC Build Time</p>
                    <p><span className="h6">Assignee : </span>Praful Martis</p>
                    <p><span className="h6">Story Points : </span>4</p>
                    <p><span className="h6">Project : </span>DAC Refinement</p>
                    <p><span className="h6">ID : </span>4</p>
                    <p><span className="h6">ID : </span>4</p>
                </div>
                <div className="col-md-4">
                    <p><span className="h6">ID : </span>22</p>
                    <p><span className="h6">Title : </span>Reduce DAC Build Time</p>
                    <p><span className="h6">Assignee : </span>Praful Martis</p>
                    <p><span className="h6">Story Points : </span>4</p>
                    <p><span className="h6">Project : </span>DAC Refinement</p>
                    <p><span className="h6">ID : </span>4</p>
                    <p><span className="h6">ID : </span>4</p>
                </div>
                <div className="col-md-4">
                    <h2 className="text-center">Quick Actions</h2>
                    <div className="text-center">
                        <Button variant="success">Mark as Completed</Button>
                        <Button variant="danger">Mark as Aborted</Button>
                        <Button variant="warning">Mark as On hold</Button>
                        <Button variant="info">Mark as In Play</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndividualJiraPage;