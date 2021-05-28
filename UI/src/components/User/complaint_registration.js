import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import img from '../images/complaint.jpg';
import Nav from './nav.js';



const image = {
    backgroundImage: 'url(' + img + ')',
    width: "100%",
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  }
export default class complaint extends Component {
   
    
    render() {
        return (
            <div class="wrapper" style={image}>
                <Nav/>
                <div class="main_content">
                    <center>
                    <div class="header"><b>Complaint Registration</b></div>  
                    <br/><br/>
                    <div class="info">
                    <div className="auth-wrapper">
    <div className="auth-inner">
    <div>
            {/* <div><Helmet><script src="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"></script></Helmet></div> */}
        
            
            <form>

                <div className="form-group">
                    <label>
                        Category:
                        <select>
                            <option value="Electricity">Electricity</option>
                            <option value="Water">Water</option>
                            <option value="Road">Road</option>
                            <option value="Garbage">Garbage</option>
                        </select>
                    </label>
                 </div>
                <div className="form-group">
                    Upload Image:
                    <input type="file" name="file" />
                </div>

                <div className="form-group">
                    <label>Location:</label>
                    <input type="text" name="location" className="form-control" placeholder="Location" onChange={this.handleLocationChange}/>
                </div>
                {/* <div>
        <h1>{this.state.address}</h1>
        <div>
          <LocationPicker
            containerElement={ <div style={ {height: '100%'} } /> }
            mapElement={ <div style={ {height: '400px'} } /> }
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
          />
        </div>
      </div> */}

                <div className="form-group">
                    <label>Mobile Number:</label>
                    <input type="text" name="mobile" className="form-control" placeholder="Enter mobile number" onChange={this.handleMobileChange} />
                </div>

                <div className="form-group">
                    <label>Description:</label><br></br>
                    {/* <input type="password" className="form-control" placeholder="Enter password" /> */}
                    <textarea cols={33} rows={4}/>
                </div>
               
         
      
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>
             
        </div></div>
            </div>
                    </div>
                    </center>
                     
                    
                    </div>
            
          </div>  
            
        );
    }
}