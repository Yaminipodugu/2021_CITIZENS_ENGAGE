import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './UserHome.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Nav  from './nav.js';
import {Container,Row,Col} from 'react-bootstrap';

const Status = {
  'Pending': 'Pending',
  'Closed': 'Closed',
  };
  function enumFormatter(cell, row, enumObject) {
    //window.location.reload(false);
  return enumObject[cell];
  }

class viewComplaints extends Component{
  constructor(props) {
    super(props);
    this.state={
      complaints :[]
    }
}
indexN(cell, row, enumObject, index) {
  return (<div>{index+1}</div>) 
}
componentDidMount(){
  var body = {
    id: sessionStorage.getItem("Identity")
  }
  console.log("Body"+body.id);

      const url = "http://localhost:9000/userAllComplaints";
        let headers = new Headers();
    
        headers.append('Content-Type','application/json');
        headers.append('Accept','application/json');
    
        headers.append('Access-Control-Allow-origin',url);
        headers.append('Access-Control-Allow-Credentials','true');
    
        headers.append('POST','GET');
    
        fetch(url, {
          headers:headers,
          method: 'POST',
          body: JSON.stringify(body)
        })
        .then(response => {if(response.ok){
          // UserProfile.setEmail(this.state.email);
          response.json()
          .then(res=> {
            console.log("Response:"+res)
            this.setState({
                complaints : res
            })          
          })
        }
        
        })
        console.log(body);
        console.log("Body"+body.id);
           
  } 
  expandComponent(row) {
    var createdimg="/images/"+row.CreatedImage;
      var closedtime;
      var closedimg;
      
      if(row.Status === "Pending"){
        closedimg = row.ClosedImage;
        closedtime = "Not Yet Closed";
//        image = <Row>
//         <Col><button onClick={event =>  window.location.href= "/viewandclose/"+row.Cid}>Take Action</button></Col>
// </Row>
      }
      else{
        var img = "/images/"+row.ClosedImage;
        closedimg=<img src={img}/>;
        closedtime = row.ClosedAt;
      }
      return (
        <div>
          <Container border="8px">
            <Row>
              <Col>Cid : {row.Cid}</Col>
              <Col>Created Time : {row.CreatedAt}</Col>
              <Col>Closed Time : {closedtime}</Col>
            </Row>
           <Row>
              <Col>Problem Image : <img src={createdimg}/></Col>
      <Col>Solved Image :{closedimg}</Col>
          </Row>
          <Row>
      <Col>Description:{row.CreatedDescription}</Col>
      <Col>Description:{row.ClosedDescription}</Col>
      </Row>
      
</Container>
        </div>
      );
  }

  isExpandableRow(row) {    
      return true;      
  }

    render() {
        
      return (
        <div>
            <div className="wrapper">
            <Nav/>
            <br></br><br/>
            <br/>
                    <div className="main_content">
                        <div className="header"><h2><u>Complaints</u></h2></div>
                        <BootstrapTable data={ this.state.complaints } expandComponent={ this.expandComponent } expandableRow={ this.isExpandableRow } striped hover condensed pagination>
          <TableHeaderColumn width='70' dataField="any" dataFormat={this.indexN}>S.No</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Cid' isKey hidden>CID</TableHeaderColumn>
          <TableHeaderColumn  width='150' dataField='Email'>EMAIL</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Category'>CATEGORY</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Location'>LOCATION</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='Status' filterFormatted dataFormat={ enumFormatter }  formatExtraData={ Status } filter={ { type: 'SelectFilter', options: Status } }>STATUS</TableHeaderColumn>
           
      </BootstrapTable>
          </div></div></div>
        );
    }
}
export default withRouter(viewComplaints);