import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
                <section id="resume">
                {/* Education----------------------------------------------- */}
                <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                    <div className="twelve columns">
                        <h3>Lambda School</h3>
                        <p className="info">Full Stack Web Development and Computer Science <span>•</span> <em className="date">December 2018</em></p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                        </p>
                    </div>
                    </div> {/* item end */}
                    <div className="row item">
                    <div className="twelve columns">
                        <h3>University of the Visayas</h3>
                        <p className="info">Bachelor of Science in Nursing <span>•</span> <em className="date">March 2008</em></p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                        </p>
                    </div>
                    </div> {/* item end */}
                    <div className="row item">
                    <div className="twelve columns">
                        <h3>Cebu Doctors' University</h3>
                        <p className="info">Bachelor of Arts in Psychology <span>•</span> <em className="date">March 2008</em></p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                        </p>
                    </div>
                    </div> {/* item end */}
                </div> {/* main-col end */}
                </div> {/* End Education */}
                {/* Work
            ----------------------------------------------- */}
                <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                    <div className="twelve columns">
                        <h3>Lambda School</h3>
                        <p className="info">Section Lead and Project Manager <span>•</span> <em className="date">September 2018 - Present</em></p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                        </p>
                    </div>
                    </div> {/* item end */}
                    <div className="row item">
                    <div className="twelve columns">
                        <h3>CebuDAC Transport and Van Services</h3>
                        <p className="info">Operations Manager <span>•</span> <em className="date">January 2002 - April 2018</em></p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                        </p>
                    </div>
                    </div> {/* item end */}
                </div> {/* main-col end */}
                </div> {/* End Work */}
                {/* Skills
            ----------------------------------------------- */}
                <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                    </p>
                    <div className="bars">
                    <ul className="skills">
                        <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                        <li><span className="bar-expand react" /><em>React</em></li>
                        <li><span className="bar-expand redux" /><em>Redux</em></li>
                        <li><span className="bar-expand mongodb" /><em>MongoDB</em></li>
                        <li><span className="bar-expand express" /><em>Express</em></li>
                        <li><span className="bar-expand nodejs" /><em>Node.js</em></li>
                        <li><span className="bar-expand html" /><em>HTML</em></li>
                        <li><span className="bar-expand css" /><em>CSS</em></li>
                        <li><span className="bar-expand python" /><em>Python</em></li>
                        <li><span className="bar-expand django" /><em>Django</em></li>
                        <li><span className="bar-expand c" /><em>C</em></li>
                        <li><span className="bar-expand sqlite" /><em>SQLite</em></li>
                    </ul>
                    </div>{/* end skill-bars */}
                </div> {/* main-col end */}
                </div> {/* End skills */}
            </section>
        )
    }
}

export default Resume;