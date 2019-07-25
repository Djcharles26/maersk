import React, {Component} from 'react';
import {
 Container,

} from 'react-bootstrap';
class Footer extends Component{
    render(){
        return(
            <footer className="footer bg-light">
                <Container id="top">
                    <div className="row">
                        <div className="col-lg-6 my-auto h-100 text-center text-lg-left" style={{fontSize:'20px'}}>
                            <ul className="list-inline mb-2">
                                <li className="list-inline-item"><a href="#top">About</a></li>
                                <li className="list-inline-item"><span>⋅</span></li>
                                <li className="list-inline-item"><a href="#top">Contact</a></li>
                                <li className="list-inline-item"><span>⋅</span></li>
                                <li className="list-inline-item"><a href="#top">Terms of &nbsp;Use</a></li>
                                <li className="list-inline-item"><span>⋅</span></li>
                                <li className="list-inline-item"><a href="#top">Privacy Policy</a></li>
                            </ul>
                            <p className="text-muted small mb-4 mb-lg-0">© JULA 2019. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 my-auto h-100 text-center text-lg-right">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><a href="#top"><i className="fab fa-facebook fa-2x fa-fw"></i></a></li>
                                <li className="list-inline-item"><a href="#top"><i className="fab fa-twitter fa-2x fa-fw"></i></a></li>
                                <li className="list-inline-item"><a href="#top"><i className="fab fa-instagram fa-2x fa-fw"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </footer>
        )
    }
}
export default Footer;