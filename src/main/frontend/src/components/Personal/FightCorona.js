import React, {Component} from 'react';
import Axios from 'axios';
import { Card, Navbar, Nav, Badge, NavDropdown, ListGroup} from 'react-bootstrap';
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

        StateData : [],
        GlobalCountryWiseData : []

    }
    componentDidMount = async() =>{
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

        await Axios.get("https://corona.lmao.ninja/countries?sort=cases")
        .then(response => response.data)
        .then((data) =>{
            this.setState({
                GlobalCountryWiseData : data
            })
            console.log(this.state.GlobalCountryWiseData);
        })
        
        
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
        };
        const data_global = {
            columns : [
                {
                    label : 'Country',
                    field : 'country',
                },
                {
                    label : 'Total Cases',
                    field : 'cases',
                },
                {
                    label : 'Total Deaths',
                    field : 'deaths',
                },
                {
                    label : 'Total Recovered',
                    field : 'recovered',
                },
                {
                    label : 'Cases Today',
                    field : 'todayCases',
                },
                {
                    label : 'Deaths Today',
                    field : 'todayDeaths',
                }
            ],

            rows : this.state.GlobalCountryWiseData
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
                                <Nav.Link style={{color : 'black'}}  href="#global_country_wise_data">Global Country Wise Data&nbsp;&nbsp;<Badge variant="primary">New</Badge> </Nav.Link>
                                <NavDropdown title="Info Section">
                                    <NavDropdown.Item href="#indian_helplines">Indian Helplines</NavDropdown.Item>
                                    <NavDropdown.Item href="#important_websites">Important Websites</NavDropdown.Item>
                                    <NavDropdown.Item href="#global_helplines">Global Helplines</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#symptoms">Symptoms</NavDropdown.Item>
                                    <NavDropdown.Item href="#prevention">Prevention</NavDropdown.Item>
                                    
                                </NavDropdown>
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
                            <h1 className="text-center">🧐</h1>
                            <h4 className="text-center">Total Cases</h4>
                            <h5 className="text-center">{this.state.INData.total_cases}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">😇</h1>
                            <h4 className="text-center">Total Recovered</h4>
                            <h5 className="text-center">{this.state.INData.total_recovered}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">🤢</h1>
                            <h4 className="text-center">Total Unresolved</h4>
                            <h5 className="text-center">{this.state.INData.total_unresolved}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">😞</h1>
                            <h4 className="text-center">Total Deaths</h4>
                            <h5 className="text-center">{this.state.INData.total_deaths}</h5>
                        </Card>
                    </div>
                </div>
                <div style={{padding : '20px'}} className="row bg-info">
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">😷</h1>
                            <h4 className="text-center">Total New Cases Today</h4>
                            <h5 className="text-center">{this.state.INData.total_new_cases_today}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">😔</h1>
                            <h4 className="text-center">Total New Deaths Today</h4>
                            <h5 className="text-center">{this.state.INData.total_new_deaths_today}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">🤧</h1>
                            <h4 className="text-center">Total Active Cases</h4>
                            <h5 className="text-center">{this.state.INData.total_active_cases}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">🤕</h1>
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
                            <h1 className="text-center">🧐</h1>
                            <h4 className="text-center">Total Cases</h4>
                            <h5 className="text-center">{this.state.WorldData.total_cases}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">😇</h1>
                            <h4 className="text-center">Total Recovered</h4>
                            <h5 className="text-center">{this.state.WorldData.total_recovered}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">🤢</h1>
                            <h4 className="text-center">Total Unresolved</h4>
                            <h5 className="text-center">{this.state.WorldData.total_unresolved}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">😞</h1>
                            <h4 className="text-center">Total Deaths</h4>
                            <h5 className="text-center">{this.state.WorldData.total_deaths}</h5>
                        </Card>
                    </div>
                </div>
                <div style={{padding : '20px'}} className="row bg-secondary">
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">😷</h1>
                            <h4 className="text-center">Total New Cases Today</h4>
                            <h5 className="text-center">{this.state.WorldData.total_new_cases_today}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">😔</h1>
                            <h4 className="text-center">Total New Deaths Today</h4>
                            <h5 className="text-center">{this.state.WorldData.total_new_deaths_today}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">🤧</h1>
                            <h4 className="text-center">Total Active Cases</h4>
                            <h5 className="text-center">{this.state.WorldData.total_active_cases}</h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h1 className="text-center">🤕</h1>
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
                <div id="global_country_wise_data" className="row" style={{backgroundColor:"#e0ab16",padding : "10px"}}>
                    <div className="col-md-12">
                        <h1 className="text-center">Global Country wise Data</h1>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:"#e0ab16",padding : "10px"}}>
                    <div className="col-md-12"  style={{backgroundColor:"white",padding : "10px"}}>
                        <MDBDataTable
                            striped
                            hover
                            responsive
                            small
                            data= {data_global}
                            >
                        </MDBDataTable>
                    </div>
                </div>
                <div className="row" id="indian_helplines" style={{backgroundColor:"#c7fcd1",padding : "10px"}}>
                    <div className="col-md-12">
                        <h1 className="text-center">Indian Helplines</h1>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:"#c7fcd1",padding : "10px"}}>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Toll Free Number</h4>
                            <h5 className="text-center"><a href="tel:+91-11-23978046">+91-11-23978046</a></h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Toll Free Number</h4>
                            <h5 className="text-center"><a href="tel:1075">1075</a></h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Helpline Email</h4>
                            <h5 className="text-center"><a href="mailto:ncov2019@gov.in">ncov2019@gov.in</a></h5>
                        </Card>
                    </div>
                    <div className="col-md-3 p-2">
                        <Card body>
                            <h4 className="text-center">Helpline Email</h4>
                            <h5 className="text-center"><a href="mailto:ncov2019@gmail.com">ncov2019@gmail.com</a></h5>
                        </Card>
                    </div>
                </div>
                <div className="row" id="symptoms_and_prevention" style={{backgroundColor:"white",padding : "10px"}}>
                    <div className="col-md-12">
                        <h1 className='text-center'>Symptoms and Prevention</h1>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:"white",padding : "10px"}}>
                    <div id="symptoms" className="col-md-12">
                        <div className="row p-2">
                            <div className="col-md-12">
                                <h2 className="text-center">Symptoms</h2>
                            </div>
                        </div>
                        <div className="row p-2">
                            <p className="text-justify">
                                The COVID-19 virus affects different people in different ways. COVID-19 is a respiratory disease and most infected people will develop mild to moderate symptoms and recover without requiring special treatment. People who have underlying medical conditions and those over 60 years old have a higher risk of developing severe disease and death.
                            </p>
                            <p>
                                <b className="h5">Common symptoms include -</b>
                                <br />
                                <br />
                                <ListGroup>
                                    <ListGroup.Item>Fever</ListGroup.Item>
                                    <ListGroup.Item>Tiredness</ListGroup.Item>
                                    <ListGroup.Item>Dry Cough</ListGroup.Item>
                                </ListGroup>
                            </p>
                            <p className="text-justify">
                                <b className="h5">Other symptoms include -</b>
                                <br />
                                <br />
                                <ListGroup>
                                    <ListGroup.Item>Shortness of Breath</ListGroup.Item>
                                    <ListGroup.Item>Ached and Pains</ListGroup.Item>
                                    <ListGroup.Item>Sore throat</ListGroup.Item>
                                    <ListGroup.Item>and very few people will report diarrhoea, nausea or a runny nose.</ListGroup.Item>
                                </ListGroup>
                            </p>
                            <p className="text-justify">
                                People with mild symptoms who are otherwise healthy should self-isolate and contact their medical provider or a COVID-19 information line for advice on testing and referral.
                            </p>
                            <p className="text-justify">
                                People with fever, cough or difficulty breathing should call their doctor and seek medical attention.  
                            </p>
                        </div>
                    </div>
                    <div id="prevention" className="col-md-12">
                        <div className="row p-2">
                            <div className="col-md-12">
                                <h2 className="text-center">Prevention</h2>
                            </div>
                        </div>
                        <div className="row p-2">
                            <p>
                                <b className="h5">To prevent infection and to slow transmission of COVID-19, do the following:</b>
                                <br />
                                <br />
                                <ListGroup>
                                    <ListGroup.Item>Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.</ListGroup.Item>
                                    <ListGroup.Item>Maintain at least 1 metre distance between you and people coughing or sneezing.</ListGroup.Item>
                                    <ListGroup.Item>Avoid touching your face.</ListGroup.Item>
                                    <ListGroup.Item>Cover your mouth and nose when coughing or sneezing.</ListGroup.Item>
                                    <ListGroup.Item>Stay home if you feel unwell.</ListGroup.Item>
                                    <ListGroup.Item>Refrain from smoking and other activities that weaken the lungs.</ListGroup.Item>
                                    <ListGroup.Item>Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.</ListGroup.Item>
                                </ListGroup>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default FightCorona;