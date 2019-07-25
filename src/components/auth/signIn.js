import React, {Component} from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import {
    Container
    
} from 'react-bootstrap';
import TextField from '../common/TextField';
import validateInput from '../../actions/validateInput';
import {login } from '../../actions/authActions';

let img = './IMG/containers.jpg';
class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            errors: {},
            isLoading: false
        }

        this.onChange = this.onChange.bind (this);
        this.onSubmit = this.onSubmit.bind (this);
    }

    isValid() {
        const { errors, isValid} = validateInput(this.state);
        if(!isValid) {
            this.setState({errors});
        
        }
        return isValid;
    }

    onSubmit(e){
        e.preventDefault ();
        if(this.isValid()){
            this.setState({errors: {}, isLoading: true});
            this.props.login(this.state).then(
                (res) => this.props.history.push('/home'),
                (err) => this.setState({errors: err.response.body.errors, isLoading:false})
            );
            
        }
        console.log(this.state.errors);
    }


    



    onChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        
        let { errors, isLoading } = this.state;
        return(
        <section className='call-to-action text-white text-center' style={{backgroundImage:'url(' + img + ')', backgroundSize:'cover', backgroundPosition:'center', height:'650px'}}>
        <Container id="top">
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Log In</h1>
                        <p className="lead text-center">Sign in to your account</p>
                        <form noValidate onSubmit={ this.onSubmit }>
                             { errors.form && <div className="error input-feedback">{errors.form}</div>}
                            <TextField 
                                placeholder="Email Address"
                                name="email"
                                type="email"
                                value={ this.state.email }
                                onChange={ this.onChange }
                                error={ errors.email }
                            />
                            <TextField 
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={ this.state.password }
                                onChange={ this.onChange }
                                error={ errors.password }
                            />
                            <button type="submit" className="btn btn-info btn-block mt-4" >Log in</button>
                            <br/> <a href='/auth/signUp'><h6 style={{textAlign:"center", color:"orange"}} disabled={isLoading} >or Sign up</h6></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    </section>
    
    )
    }
}
SignIn.propTypes = {
    login: Proptypes.func.isRequired
}



export default connect(null, { login })( SignIn);

