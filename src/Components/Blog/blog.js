import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return (
                <section id="blog">
                <div className="text-container">
                <div className="row">
                    <div className="two columns header-col">
                    <h1><span>Blog</span></h1>
                    </div>
                    <div className="ten columns flex-container">
                    <div className="flexslider">
                        {/* <ul className="slides"> */}
                            <img alt src="images/blogpost1.jpg" />
                        {/* <li>
                            <blockquote>
                            <p>Your work is going to fill a large part of your life, and the only way to be truly satisfied is
                                to do what you believe is great work. And the only way to do great work is to love what you do.
                                If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.
                            </p>
                            <cite>Steve Jobs</cite>
                            </blockquote>
                        </li>  */}
                        {/* slide ends */}
                        {/* </ul> */}
                    </div> {/* div.flexslider ends */}
                    </div> {/* div.flex-container ends */}
                </div> {/* row ends */}
                </div>  {/* text-container ends */}
            </section>
        )
    }
}

// Make several snapshots of blog posts appear in the portfolio site.

export default Blog;