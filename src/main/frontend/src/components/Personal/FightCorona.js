import React, {Component} from 'react';
import Axios from 'axios';
import { Card } from 'react-bootstrap';
class FightCorona extends Component
{
    state=  {
        INData : {
            "total_cases" : "loading..",
            "total_recovered" : "loading..",
            "total_unresolved" : "loading..",
            "total_deaths" : "loading..",
            "total_new_cases_today" : "loading..",
            "total_new_deaths_today" : "loading..",
            "total_active_cases" : "loading..",
            "total_serious_cases":"loading.." 
        },

        WorldData : {
            "total_cases" : "loading..",
            "total_recovered" : "loading..",
            "total_unresolved" : "loading..",
            "total_deaths" : "loading..",
            "total_new_cases_today" : "loading..",
            "total_new_deaths_today" : "loading..",
            "total_active_cases" : "loading..",
            "total_serious_cases":"loading.." 
        }


    }
    componentDidMount = () =>{
        Axios.get("https://thevirustracker.com/free-api?countryTotal=IN")
        .then(response => response.data)
        .then((data) =>{
            this.setState({
                INData : {
                    "total_cases" : data.countrydata[0].total_cases,
                    "total_recovered" : data.countrydata[0].total_recovered,
                    "total_unresolved" : data.countrydata[0].total_unresolved,
                    "total_deaths" : data.countrydata[0].total_deaths,
                    "total_new_cases_today" : data.countrydata[0].total_new_cases_today,
                    "total_new_deaths_today" : data.countrydata[0].total_new_deaths_today,
                    "total_active_cases" : data.countrydata[0].total_active_cases,
                    "total_serious_cases":data.countrydata[0].total_serious_cases 
                }
            });
            console.log(this.state);
        });

        Axios.get("https://thevirustracker.com/free-api?global=stats")
        .then(response => response.data)
        .then((data) =>{
            this.setState({
                WorldData : {
                    "total_cases" : data.results[0].total_cases,
                    "total_recovered" : data.results[0].total_recovered,
                    "total_unresolved" : data.results[0].total_unresolved,
                    "total_deaths" : data.results[0].total_deaths,
                    "total_new_cases_today" : data.results[0].total_new_cases_today,
                    "total_new_deaths_today" : data.results[0].total_new_deaths_today,
                    "total_active_cases" : data.results[0].total_active_cases,
                    "total_serious_cases":data.results[0].total_serious_cases 
                }
            });
            console.log(this.state);
        });
        
    }

    render(){
        return(
            <>
                <div className="row bg-info">
                    <div className="col-md-12">
                        <h1 className="text-center" style={{color : "white"}}>Indian Stats</h1>
                    </div>
                </div>
                <div style={{padding : '20px'}} className="row bg-info">
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total Cases</h4>
                            <h5 className="text-center">{this.state.INData.total_cases}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total Recovered</h4>
                            <h5 className="text-center">{this.state.INData.total_recovered}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total Unresolved</h4>
                            <h5 className="text-center">{this.state.INData.total_unresolved}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total Deaths</h4>
                            <h5 className="text-center">{this.state.INData.total_deaths}</h5>
                        </Card>
                    </div>
                </div>
                <div style={{padding : '20px'}} className="row bg-info">
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total New Cases Today</h4>
                            <h5 className="text-center">{this.state.INData.total_new_cases_today}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total New Deaths Today</h4>
                            <h5 className="text-center">{this.state.INData.total_new_deaths_today}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total Active Cases</h4>
                            <h5 className="text-center">{this.state.INData.total_active_cases}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total Serious Cases</h4>
                            <h5 className="text-center">{this.state.INData.total_serious_cases}</h5>
                        </Card>
                    </div>
                </div>

                <div className="row pt-1 bg-secondary">
                    <div className="col-md-12">
                        <h1 className="text-center" style={{color: 'white'}}>World Stats</h1>
                    </div>
                </div>
                <div style={{padding : '20px'}} className="row bg-secondary">
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total Cases</h4>
                            <h5 className="text-center">{this.state.WorldData.total_cases}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total Recovered</h4>
                            <h5 className="text-center">{this.state.WorldData.total_recovered}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total Unresolved</h4>
                            <h5 className="text-center">{this.state.WorldData.total_unresolved}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total Deaths</h4>
                            <h5 className="text-center">{this.state.WorldData.total_deaths}</h5>
                        </Card>
                    </div>
                </div>
                <div style={{padding : '20px'}} className="row bg-secondary">
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total New Cases Today</h4>
                            <h5 className="text-center">{this.state.WorldData.total_new_cases_today}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total New Deaths Today</h4>
                            <h5 className="text-center">{this.state.WorldData.total_new_deaths_today}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total Active Cases</h4>
                            <h5 className="text-center">{this.state.WorldData.total_active_cases}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Total Serious Cases</h4>
                            <h5 className="text-center">{this.state.WorldData.total_serious_cases}</h5>
                        </Card>
                    </div>
                </div>
            </>
        )
    }
}

export default FightCorona;