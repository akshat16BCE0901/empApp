import React, {Component} from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class CardSection extends Component
{

    state =  {
        allJiras : []
    };

    componentDidMount = () =>{
        const URL = "https://akkiapp.herokuapp.com/jira/viewall";
        Axios.get(URL).then(response => response.data)
            .then((data)=>{
                this.setState({allJiras : data});
                console.log(this.state.allJiras);
            })
    }

    render(){
        return(
            <CardColumns>
                <Card border="primary">
                    <Card.Header className="text-center h4">TPM - 19591</Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center">Reduce DAC Build Time</Card.Title>
                        <Card.Text className="text-center text-justify">
                            As an IDL user, I want to reduce the DAC build time in order to make it faster to run.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Button variant="primary">Open</Button>
                    </Card.Footer>
                </Card>
                {
                    this.state.allJiras.map(row =>(
                        <Card key={row.id}  border="primary">
                            <Card.Header className="text-center h4">TPM - {row.id}</Card.Header>
                            <Card.Body>
                                <Card.Title className="text-center">{row.title}</Card.Title>
                                <Card.Text className="text-center text-justify">
                                    {row.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Router>
                                    <Link to="/abc">
                                        <Button variant="primary">Open</Button>
                                    </Link>
                                    <Switch>
                                        <Route path="/abc">
                                            <Home />
                                        </Route>
                                    </Switch>
                                </Router>
                            </Card.Footer>
                        </Card>
                    ))
                }
            </CardColumns>
        )
    }

}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

export default CardSection;