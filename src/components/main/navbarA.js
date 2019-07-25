import React, {Component} from 'react';
import {
 Navbar,
 Container,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  {logout} from '../../actions/authActions';

class NavBarA extends Component{

    logout(e){
        e.preventDefault();
        this.props.logout();
    }
    


    render(){
        const { isAuthenticated } = this.props.auth;

        const userLinks = (
            <div className="collapse navbar-collapse" id="navcol-1">
                <a className="btn btn-primary ml-auto" role="button" href="top" onClick={this.logout.bind(this)}>Sign Out</a>
            </div>
        )

        const guestLinks = (
            <div className="collapse navbar-collapse" id="navcol-1">
                <a className="btn btn-primary ml-auto" role="button" href="/auth/signIn">Sign In</a>
            </div>
        )

        


        return(
            <div id="top">
                <Navbar  expand='lg' bg='light' variant='light'>
                    <Container>
                        <a className="navbar-brand" href="#top">MAERSK DB Service</a>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                        </button>
                        {isAuthenticated ? userLinks: guestLinks}
                    </Container>
                </Navbar> 
            </div>
        )
    }
}

NavBarA.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
}

function mapStateToProps(state){
    return {
        auth: state.auth
    };
}
export default connect(mapStateToProps, {logout} )(NavBarA);