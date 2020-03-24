import React, {Component} from 'react';
import Axios from 'axios';
class FightCorona extends Component
{
    state=  {
        INData : {

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
    }

    render(){
        return(
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

export default FightCorona;