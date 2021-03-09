import React, { Component } from 'react'
import axios from 'axios'
export default class SignUp extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            firstName:null,
            middleName:null,
            lastName:null,
            mobile:null,
            email:null, 
            passwordHash:null, 
            admin:null, 
            vendor:null, 
            lastLogin:null,
            intro:null,
            profile:null,

        }
    }
    changeHandeler=(event)=>
    {
        this.setState({[event.target.name]:event.target.value});
    }
    
    handleSubmit=(event)=>
    {
    event.preventDefault()
    console.log(this.state)
    axios.post('http://127.0.0.1:5000/',this.state)
    .then(response =>{
    console.log(response)
    }
    
    )
    .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
    });

    }

    render()
    {   const {firstName,middleName,lastName,mobile,email
        , passwordHash, admin, vendor, lastLogin, intro, profile
    }=this.state
        return(

            <form onSubmit={this.handleSubmit}>
            
				<div>
                <label>First Name</label>
                <input type="text" name="firstName" value={firstName}
                onChange={this.changeHandeler}
                />
                </div>
				<div>
                <label>Middle Name</label>
                <input type="text" name="middleName" value={middleName}
                onChange={this.changeHandeler}
                />
                </div>
				<div>
                <label>Last Name</label>
                <input type="text" name="lastName" value={lastName}
                onChange={this.changeHandeler}
                />
                </div>
				<div>
                <label>Mobile</label>
                <input type="mobile" name="mobile" value={mobile}
                onChange={this.changeHandeler}
                />
                </div>
				<div>
                <label>Email</label>
                <input type="email" name="email" value={email}
                onChange={this.changeHandeler}
                />
                </div>
				<div>
                <label>Password</label>
                <input type="password" name="passwordHash" value={passwordHash}
                onChange={this.changeHandeler}
                />
                </div>
				<div>
                <label>admin</label>
                <input type="number" name="admin" value={admin}
                onChange={this.changeHandeler}
                />
                </div>
				<div>
                <label>Vendor</label>
                <input type="number" name="vendor" value={vendor}
                onChange={this.changeHandeler}
                />
                </div>
				<div>
                <label>LastLogin</label>
                <input type="date"  name="lastLogin"value={lastLogin}
                onChange={this.changeHandeler}
                />
                </div>
                <div>
                <label>Intro</label>
                <input type="textarea" name="intro" value={intro}
                onChange={this.changeHandeler}
                />
                </div>
				 <div>
                <label>profile</label>
                <input type="text" name="profile" value={profile}
                onChange={this.changeHandeler}
                />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}