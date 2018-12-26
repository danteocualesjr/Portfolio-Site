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
                    <p>I'm Dante and I'm a Student Success Coordinator at Lambda School. I'm also the acting Section Lead of the school's Lambda Next, a program designed to provide guidance/mentorship, structure, and support to its graduates in their job search.</p> 
                    <p>I'm also a proud student of the same school. We studied Full Stack Web Development and Computer Science with special emphasis on JavaScript, React, Redux, MongoDB, Node.js, Express, Python, Django, SQLite, and C.</p>
                    <p>I'm also a published writer. In my spare time, I write short stories, opinion pieces, and articles on programming and Computer Science. My short fiction and opinion pieces have appeared in The Philippines Graphic and The Philippine Daily Inquirer, while my articles have been published in Hacker Noon and Medium.</p>
                    <p>Please feel free to contact me anytime!</p>
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
                        <a href="#" className="button"><i className="fa fa-download"/>Download My Resume</a>
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