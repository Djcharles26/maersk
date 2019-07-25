import React, {Component} from 'react';
import request from 'superagent';
import {
 
 Container

} from 'react-bootstrap';

let img = './IMG/buque.jpg';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            email: "",
            password:"",
            username:""
        };

    }


    render(){
        return(
        <section className='call-to-action text-white text-center' style={{backgroundImage:'url(' + img + ')', height:'750px' , backgroundSize:'cover', backgroundPosition:'center'}}>
        <Container id="top">
            <h3 style={{color:"white"}}>Sign Up</h3>

               <br/> <a href='/auth/signIn'><h4 style={{textAlign:"center", color:"red"}} >or Sign in</h4></a>

        </Container>
    </section>
    
    )}
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        console.log("Submitting");
        //  console.log(this.state);
        request.post('https://9becf051.ngrok.io/api/email',
        {
            email:this.state.email,
            username:this.state.username,
            password:this.state.password

        })
        .then(result=>{
            console.log(result.body);
        })
        .catch(error=>{
            console.error(error);
        })
    };
}

export default SignUp;