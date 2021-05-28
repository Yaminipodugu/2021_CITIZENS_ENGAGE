import React, { Component } from "react";
import {  withRouter } from "react-router-dom";
import './adminhome.css';
import Navigation  from './nav.js';
import './view.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button} from 'react-bootstrap'; 

var body;

class topRankedComplaint extends Component{
  constructor(props) {
    super(props);
    this.state={
      topranked :[]
    }
    
  }

  arraytoJson(valuearrs) {
    var arr=[]
      for (var i = 0; i < valuearrs.length; i++) {
          arr[i]={};
          arr[i].Location = valuearrs[i][0];
          arr[i].Category = valuearrs[i][1];
          arr[i].Count = valuearrs[i][2];
    }
    console.log(arr);
      return arr;
}

  componentDidMount()
  {
  
    console.log(body);
    
   
        const url = "http://localhost:9000/toprankedcomplaint";
          let headers = new Headers();
      
          headers.append('Content-Type','application/json');
          headers.append('Accept','application/json');
      
          headers.append('Access-Control-Allow-origin',url);
          headers.append('Access-Control-Allow-Credentials','true');
      
          headers.append('POST','GET');
      
          fetch(url, {
            headers:headers,
            method: 'GET',
            body: JSON.stringify(body)
          })
          .then(response => {if(response.ok){
            // UserProfile.setEmail(this.state.email);
            response.json()
            .then(res=> {
              console.log(res);
              console.log(response);

              // let Data={};
              // for(let i=0;i<res.length;i++)
              // {
              //   let obj1 = res[i][0];
              //   let obj2 = res[i][1];
              //   Data[i] = { 'Email':obj1, 'Count':obj2};
              // }
              this.setState({
                  topranked : this.arraytoJson(res)
              })          
            })
           console.log(this.state.topranked);
            
          }
          else if(!response.ok){
            
            alert("No data")
          }
          })    
          console.log(this.state.topranked);  
    } 

   
    indexN(cell, row, enumObject, index) {
      return (<div>{index+1}</div>) 
    }

    CellFormatter(cell, row) {
        return( <Button variant="link" onClick={() => 
            {sessionStorage.setItem("Location",row.Location)
            sessionStorage.setItem("Category",row.Category)
            window.location.href= "/topRankedList"
            }}>{cell}</Button>)
          }

    

    render() {
  
        return (
        <div>
       <div className="wrapper">
            <Navigation/>
            <br></br><br/>
            <br/>
           <div className="main_content">
                        <div className="header"><h2><u>Top Ranked Complaints</u></h2></div>
          <BootstrapTable data={ this.state.topranked } striped hover condensed height='120' scrollTop={ 'Bottom' }>
          <TableHeaderColumn width='250' dataField="any" dataFormat={this.indexN} isKey>Rank</TableHeaderColumn>
          <TableHeaderColumn  width='250' dataField='Location' dataFormat={this.CellFormatter} >Location</TableHeaderColumn>
          <TableHeaderColumn  width='250' dataField='Category' dataFormat={this.CellFormatter}>Category</TableHeaderColumn>
          <TableHeaderColumn  width='250' dataField='Count'>No. Of Complaints</TableHeaderColumn>
         
          
      </BootstrapTable>
            
          </div></div>
          </div>
        );
    }
}
export default withRouter(topRankedComplaint);