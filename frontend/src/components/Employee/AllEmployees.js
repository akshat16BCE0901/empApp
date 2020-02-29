import React, {Component} from 'react';
import Axios from 'axios';
import {MDBDataTable} from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.css";

class AllEmployees extends Component
{
    state = {
        employees : []
    }
    componentDidMount(){
        const URL = "https://akkiapp.herokuapp.com/employee/viewall";
        Axios.get(URL).then(response => response.data)
        .then((data)=>{
            this.setState({employees : data});
            this.setState({employees : this.state.employees.filter(emp => emp.firstname!=null)})
            console.log(this.state.employees);
        });
    }

    render(){
        const data = {
            columns: [
              {
                label: 'ID',
                field: 'id',
                sort: 'asc'
              },
              {
                label: 'First Name',
                field: 'firstname',
                sort: 'asc'
              },
              {
                label: 'Last Name',
                field: 'lastname',
                sort: 'asc'
              },
              {
                label: 'Address',
                field: 'address',
                sort: 'asc'
              },
              {
                label: 'Phone',
                field: 'phone',
                sort: 'asc'
              },
              {
                label: 'Email',
                field: 'email',
                sort: 'asc'
              },
              {
                label: 'Date Of birth',
                field: 'date_of_birth',
                sort: 'asc'
              }
            ],
            rows: this.state.employees
        };
        return(
            <div className="row" style={{backgroundColor:"white",padding : "10px"}}>
                <div className="col-md-12">
                    <MDBDataTable
                        striped
                        hover
                        responsive
                        data= {data}
                        >
                    </MDBDataTable>
                        
                </div>
            </div>
        )
    }
}

export default AllEmployees;