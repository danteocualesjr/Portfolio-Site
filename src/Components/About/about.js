import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
                <section id="about">
                <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="images/profilephoto2.jpg" />
                </div>
                <div className="nine columns main-col">
                    <h2>About</h2>
                    <p>I'm currently the Section Lead, and one of the Project Managers, of Lambda School's "Lambda Next", a post-graduate program designed to help its alumni land Software Engineering jobs quickly. I'm super excited, grateful, and honored to be part of this awesome project.</p>
                    <p>I'm also a proud student of the same school. We just finished learning Full Stack Web Development and Computer Science and it was a blast.</p>
                    <p>I'm also a writer. In my spare time, I write short stories, opinion pieces, and articles on programming and Computer Science. My short fiction and opinion pieces have appeared in The Philippines Graphic and The Philippine Daily Inquirer, while my articles have been published in Hacker Noon and Medium.</p>
                    <p>Feel free to reach out to me if you need anything!</p>
                    <div className="row">
                    <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                        <span>Dante O. Cuales, Jr.</span><br />
                        <span>P. Sanchez Street, Mandaue<br />
                            Cebu, Philippines, 6014
                        </span><br />
                        <span>(+63) 917 892 8033</span><br />
                        <span>danteocualesjr@gmail.com</span>
                        </p>
                    </div>
                    <div className="columns download">
                        <p>
                        <a href="#" className="button"><i className="fa fa-download" />Download My Resume</a>
                        </p>
                    </div>
                    </div> {/* end row */}
                </div> {/* end .main-col */}
                </div>
            </section>
        )
    }
}

export default About;