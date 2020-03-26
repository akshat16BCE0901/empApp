import React, {Component} from 'react';
import Axios from 'axios';
import { Card, Navbar, Nav } from 'react-bootstrap';
import {ResponsiveLine} from '@nivo/line';
import {MDBDataTable} from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
        },

        GraphData : [
            {
                "id" : "Total Cases",
                "color" : "#ff0000",
                "data" : [
                    
                ]
            },
            {
                "id" : "Total Deaths",
                "color" : "#0000ff",
                "data" : [
                    
                ]
            },
            {
                "id" : "Total Recovered",
                "color" : "#00ff00",
                "data" : [
                    
                ]
            }
        ],

        StateData : []

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
        });

        Axios.get("https://api.rootnet.in/covid19-in/stats/daily")
        .then(response => response.data)
        .then((data) =>{
            var res = data;
            for(let row of res.data)
            {
                var d = row.day;
                var date_arr = d.split("-");
                this.state.GraphData[0].data.push({
                    "x" : date_arr[2]+ "/"+date_arr[1],
                    "y" : row.summary.total
                });
                this.state.GraphData[1].data.push({
                    "x" : date_arr[2]+ "/"+date_arr[1],
                    "y" : row.summary.deaths
                });
                
                this.state.GraphData[2].data.push({
                    "x" : date_arr[2]+ "/"+date_arr[1],
                    "y" : row.summary.discharged
                });
            }
            for(var i=0;i<8;i++)
            {
                this.state.GraphData[0].data.shift();
                
                this.state.GraphData[1].data.shift();
                
                this.state.GraphData[2].data.shift();
            }
            var lastRow = res.data[res.data.length-1];
            for(let location of lastRow.regional)
            {
                this.state.StateData.push(location);
            }
        });
        
        
    }

    render(){
        const data = {
            columns : [
                {
                    label : 'State',
                    field : 'loc',
                    sort : 'asc'
                },
                {
                    label : 'Indian',
                    field : 'confirmedCasesIndian',
                    sort : 'asc'
                },
                {
                    label : 'Foreign',
                    field : 'confirmedCasesForeign',
                    sort : 'asc'
                },
                {
                    label : 'Discharged',
                    field : 'discharged',
                    sort : 'asc'
                },
                {
                    label : 'Deaths',
                    field : 'deaths',
                    sort : 'asc'
                }

            ],
            rows : this.state.StateData
        }
        return(
            <>
                <div className="row">
                    <Navbar collapseOnSelect bg="light" style={{padding : '15px'}} fixed="top" expand='md'>
                        <Navbar.Brand>FIGHT CORONA</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link style={{color : 'black'}} href="#state_wise_data">State wise Data</Nav.Link>
                                <Nav.Link style={{color : 'black'}}  href="#indian_stats">Indian Stats</Nav.Link>
                                <Nav.Link style={{color : 'black'}}  href="#world_stats">World Stats</Nav.Link>
                                <Nav.Link style={{color : 'black'}}  href="#indian_timeline">Indian Timeline</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>  
                <div id="state_wise_data" className="row" style={{backgroundColor:"white",padding : "10px"}}>
                    <div className="col-md-12">
                        <h1 className="text-center">State wise Data</h1>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:"white",padding : "10px"}}>
                    <div className="col-md-12">
                        <MDBDataTable
                            striped
                            hover
                            responsive
                            small
                            data= {data}
                            >
                        </MDBDataTable>
            
                    </div>
                </div>
                <div id="indian_stats" className="row bg-info">
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

                <div id="world_stats" className="row pt-1 bg-secondary">
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

                <div id="indian_timeline" className="row pt-1" style={{backgroundColor : 'white'}}>
                    <div className="col-md-12">
                        <h1 className="text-center">Indian Timeline</h1>
                    </div>
                </div>
                <div className="row pt-1" style={{backgroundColor : 'white'}}>
                    <div className="col-md-12" style={{height : '20em',width : '100em',minHeight:'0', minWidth : '0'}}> 
                        <ResponsiveLine
                            data={this.state.GraphData}
                            margin={{ top: 15, right: 60, bottom: 50, left: 30 }}
                            xScale={{ type: 'point' }}
                            yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                orient: 'bottom',
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: -30,
                                legend: '',
                                legendOffset: 36,
                                legendPosition: 'middle'
                            }}
                            axisLeft={{
                                orient: 'left',
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legendOffset: -40,
                                legendPosition: 'middle'
                            }}
                            colors={{ scheme: 'nivo' }}
                            pointSize={10}
                            pointColor={{ theme: 'background', inherit :'color' }}
                            pointBorderWidth={2}
                            pointBorderColor={{ from: 'serieColor' }}
                            pointLabel="y"
                            pointLabelYOffset={-12}
                            useMesh={true}
                            legends={[
                                {
                                    anchor: 'top-left',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 20,
                                    translateY: 0,
                                    itemsSpacing: 0,
                                    itemDirection: 'left-to-right',
                                    itemWidth: 100,
                                    itemHeight: 20,
                                    itemOpacity: 0.75,
                                    symbolSize: 12,
                                    symbolShape: 'circle',
                                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemBackground: 'rgba(0, 0, 0, .03)',
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                        >

                        </ResponsiveLine>
                    </div>
                </div>
            </>
        )
    }
}

export default FightCorona;