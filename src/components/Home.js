import React from 'react';
import web from '../images/undraw.svg';
import './Home.css';



function Home() {
    return (
        <>
            <section id='header' className=''>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>

                                    <h1>Hey there you also stuck for How to build a perfect resume
<strong>This resume builder is for you</strong>
                                    </h1>
                                    <h2 className='mt-3'></h2>
                                    <div className='mt-3'>
                                        <a href="" className='btn-get-started'> Get Started</a>

                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img'></div>
                                <img src={web} className='img-fluid animated' alt=' home img' />

                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
export default Home;