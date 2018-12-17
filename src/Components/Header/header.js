import React, { Component } from 'react';

class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
            {/*Generated Code*/}
            <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                {/* <li><a className="smoothscroll" href="#blog">Blog</a></li> */}
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul> {/* end #nav */}
            </nav> {/* end #nav-wrap */}
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
                <h3><span>Section Lead</span> and <span>Project Manager</span> at Lambda School | <span>{resumeData.role}</span> | <span>Software Engineer</span> | <span>Writer</span> @ Hacker Noon</h3>
                <hr/>
                <ul className="social">
                    <li><a href="https://www.facebook.com/dante.cuales.jr"><i className="fa fa-facebook" /></a></li>
                    <li><a href="https://twitter.com/dantecualesjr"><i className="fa fa-twitter" /></a></li>
                    {/* <li><a href="#"><i className="fa fa-google-plus" /></a></li> */}
                    <li><a href="https://www.linkedin.com/in/danteocualesjr/"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="https://www.instagram.com/danteocualesjr/"><i className="fa fa-instagram" /></a></li>
                    <li><a href="#"><i className="fa fa-skype" /></a></li>
                </ul>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
            </header>
            </React.Fragment>
        );
    }
};

export default Header;