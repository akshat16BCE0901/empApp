import React, {  useState, useEffect } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Axios from "axios";



function IndividualJiraPage()
{
    const [openDesc , setOpenDesc] = useState(true);
    const [openAtt , setOpenAtt] = useState(false);
    const [openComm , setOpenComm] = useState(false);

    useEffect(() => {

        Axios.get("http://localhost:8084/jira/view/32")
            .then(response => response.data)
            .then((data) => {
               console.log(data);
            });
    });
    return(
        <>
            <div className="row" style={{backgroundColor:"white",padding : "10px"}}>
                <div className="col-md-4">
                    <p><span className="h6">ID : </span>22</p>
                    <p><span className="h6">Title : </span>Reduce DAC Build Time</p>
                    <p><span className="h6">Assignee : </span>Praful Martis</p>
                    <p><span className="h6">Story Points : </span>4</p>
                    <p><span className="h6">Project : </span>DAC Refinement</p>
                </div>
                <div className="col-md-4">
                    <p><span className="h6">Status : </span>4</p>
                    <p><span className="h6">Sprint : </span>11.3</p>
                    <p><span className="h6">Date Created : </span>26-Feb-2020</p>
                    <p><span className="h6">Date Ended : </span>---</p>
                    <p><span className="h6">Priority : </span>High</p>
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
            <div className="row" style={{backgroundColor:"#e3e3e3",padding : "10px", border: '1px solid black'}}>
                <div className="col-md-12">
                    <h5 onClick={() => setOpenDesc(!openDesc)} aria-controls="description" aria-expanded={openDesc} >Description&nbsp;<i className="fas fa-angle-down"></i>  </h5>
                </div>
                <Collapse in={openDesc}>
                    <div id="description" className="col-md-12 text-justify">
                    As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run. As an IDL user, I want to reduce the DAC build time in order to make it faster to run.
                    </div>
                </Collapse>
            </div>
            <div className="row" style={{backgroundColor:"#e3e3e3",padding : "10px", border: '1px solid black'}}>
                <div className="col-md-12">
                    <h5 onClick={() => setOpenAtt(!openAtt)} aria-controls="attachments" aria-expanded={openAtt} >Attachments&nbsp;<i className="fas fa-angle-right"></i>  </h5>
                </div>
                <Collapse in={openAtt}>
                    <div id="atachments" className="col-md-12">
                    As an IDL user, I want to reduce the DAC build time in order<br />
                    As an IDL user, I want to reduce the DAC build time in order<br />
                    As an IDL user, I want to reduce the DAC build time in order<br />
                    </div>
                </Collapse>
            </div>
            <div className="row" style={{backgroundColor:"#e3e3e3",padding : "10px", border: '1px solid black'}}>
                <div className="col-md-12">
                    <h5 onClick={() => setOpenComm(!openComm)} aria-controls="comments" aria-expanded={openComm} >Comments&nbsp;<i className="fas fa-angle-right"></i>  </h5>
                </div>
                <Collapse in={openComm}>
                    <div id="comments" className="col-md-12">
                        As an IDL user, I want to reduce the DAC build time in order<br />
                        As an IDL user, I want to reduce the DAC build time in order<br />
                        As an IDL user, I want to reduce the DAC build time in order<br />
                        As an IDL user, I want to reduce the DAC build time in order<br />
                        As an IDL user, I want to reduce the DAC build time in order<br />
                        As an IDL user, I want to reduce the DAC build time in order<br />
                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default IndividualJiraPage;