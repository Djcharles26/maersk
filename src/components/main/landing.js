import React, {Component} from 'react';
import {
 Row,
 Container,
 Form
} from 'react-bootstrap';

let img = './IMG/bg-masthead.jpg';

class Landing extends  Component{

    render(){
        return (
            
            <div>
                

                <header className="masthead text-white text-center" style= {{backgroundImage:'url('+ img +')', backgroundSize:'cover', backgroundPosition:'center' }} >
                    <Container>
                        <Row>
                            <div className="col-xl-9 mx-auto">
                                <h1 className="mb-2" style={{color:"#F59336"}}>MAERSK DB Service</h1>
                                <h3 className="mb-3">Crear Cuenta</h3>
                            </div>

                            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                <Form>
                                    <div className="form-row">
                                        <div className="col-12 col-md-9 mb-2 mb-md-0">
                                            <input className="form-control form-control-lg" type="email" placeholder="Enter your email..."/>

                                        </div>
                                        <div className="col-12 col-md-3">
                                            <a className="btn btn-primary btn-block btn-lg" role="button" href="/auth/signUp">Sign up!</a>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </Row>
                    </Container>
                </header>

                
            </div>
        )
    }

}
export default Landing;