import React, { useEffect } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import "aos/dist/aos.css";

const Center = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div >
            <div className="CenterPage">
            <div className="container mt-5 mb-1">
                <div className="row box">

                    <div className="col-md-4 col-sm-12  col-lg-4 mb-2" data-aos="zoom-in-up">
                        <Link to={"/CarHire"}> <div className="box1">
                            <i class="fa-solid fa-car"></i><span>Car Hire</span>
                        </div></Link>
                    </div>
                    <div className="col-md-4 col-sm-12  col-lg-4 mb-2" data-aos="zoom-in-up">
                        <Link to={"/Hotel"}>   <div className="box1">
                            <i class="fa-solid fa-hotel"></i> <span>Hotels</span>
                        </div></Link>
                    </div>
                    <div className="col-md-4 col-sm-12  col-lg-4 mb-2" data-aos="zoom-in-up">
                        <div className="box1">
                            <i class="fa-solid fa-earth-asia"></i> <span>Explore every Where</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container image " data-aos="zoom-in-up">
                <img className='img-fluid' src="Images/1.png" alt="" />
            </div>

            <div className="container cont-3">
                <h4 data-aos="fade-up">Popular places at the moment</h4>
                <p data-aos="fade-up">Other travelers are loving these destinations too. Search for flights, hotels and rental cars and join them on this adventure.</p>
                <div className="row">

                    <div className="col-sm-12 col-md-6 col-lg-4" data-aos="zoom-in-up">
                        <div className="box2">
                            <div className="image2">
                                <img className='img-fluid' width={"130px"} src="Images/dubai.jpg" alt="" />
                            </div>
                            <div className="innerBox">
                                <h6>Dubai</h6>
                                <a href="">Flights</a>
                                <a href="">Hotels</a>
                                <a href="">Rental cars</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4" data-aos="zoom-in-up">
                        <div className="box2">
                            <div className="image2">
                                <img className='img-fluid' width={"130px"} src="Images/bang.jpg" alt="" />
                            </div>
                            <div className="innerBox">
                                <h6>Bangkok</h6>
                                <a href="">Flights</a>
                                <a href="">Hotels</a>
                                <a href="">Rental cars</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4" data-aos="zoom-in-up">
                        <div className="box2">
                            <div className="image2">
                                <img className='img-fluid' width={"130px"} src="Images/singapore.jpg" alt="" />
                            </div>
                            <div className="innerBox">
                                <h6>Singapore</h6>
                                <a href="">Flights</a>
                                <a href="">Hotels</a>
                                <a href="">Rental cars</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4" data-aos="zoom-in-up">
                        <div className="box2">
                            <div className="image2">
                                <img className='img-fluid' width={"130px"} src="Images/london.jpeg" alt="" />
                            </div>
                            <div className="innerBox">
                                <h6>London</h6>
                                <a href="">Flights</a>
                                <a href="">Hotels</a>
                                <a href="">Rental cars</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4" data-aos="zoom-in-up">
                        <div className="box2">
                            <div className="image2">
                                <img className='img-fluid' width={"130px"} src="Images/IndiraGandhi.jpg" alt="" />
                            </div>
                            <div className="innerBox">
                                <h6>Indira Gandhi </h6>
                                <a href="">Flights</a>
                                <a href="">Hotels</a>
                                <a href="">Rental cars</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4" data-aos="zoom-in-up">
                        <div className="box2">
                            <div className="image2">
                                <img className='img-fluid' width={"130px"} src="Images/Mumbai.jpeg" alt="" />
                            </div>
                            <div className="innerBox">
                                <h6>Mumbai</h6>
                                <a href="">Flights</a>
                                <a href="">Hotels</a>
                                <a href="">Rental cars</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4" data-aos="zoom-in-up">
                        <div className="box2">
                            <div className="image2">
                                <img className='img-fluid' width={"130px"} src="Images/Hyderabad.jpg" alt="" />
                            </div>
                            <div className="innerBox">
                                <h6>Hyderabad</h6>
                                <a href="">Flights</a>
                                <a href="">Hotels</a>
                                <a href="">Rental cars</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4" data-aos="zoom-in-up">
                        <div className="box2">
                            <div className="image2">
                                <img className='img-fluid' width={"130px"} src="Images/delhi.jpg" alt="" />
                            </div>
                            <div className="innerBox">
                                <h6>New Delhi</h6>
                                <a href="">Flights</a>
                                <a href="">Hotels</a>
                                <a href="">Rental cars</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4" data-aos="zoom-in-up">
                        <div className="box2">
                            <div className="image2">
                                <img className='img-fluid' width={"130px"} src="Images/Bangalore.webp" alt="" />
                            </div>
                            <div className="innerBox">
                                <h6>Bangalore</h6>
                                <a href="">Flights</a>
                                <a href="">Hotels</a>
                                <a href="">Rental cars</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="accordion" id="accordionExample">
                <div className="container mt-5 mb-5">
                    <h4 className='mb-4' data-aos="zoom-in-up">Book Cheap Flights, Hotels & Car Rentals with SkyScanner</h4>


                    <div class="accordion-item" data-aos="zoom-in-up">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h5> Compare flights, hotels and cars from hundreds of providers and join 100 million savvy travelers. This is the method.
                                </h5>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div className="row">

                                    <div className="col-sm-6 col-lg-6">
                                        <div className="box4">
                                            <h6>
                                                Search for all locations. Go anywhere.
                                            </h6>
                                            <p>
                                                Want to go on a trip but don't know where? Maybe you are looking for a new place. For the cheapest flights to anywhere, any day, search 'all over' .
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="box4">
                                            <h6>
                                                Find the day when flights are cheapest
                                            </h6>
                                            <p>
                                                If you've got somewhere on your mind and want to find the cheapest flights to that destination, use 'month with the lowest prices' when you search. Then look for the days with the lowest airfares.  </p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-6">
                                        <div className="box4">
                                            <h6>
                                                Save time and money
                                            </h6>
                                            <p>
                                                Whether it's the fastest route or the smartest stay, find them all in a few taps. Then choose your preferred provider or hotel based on real traveler ratings and book without any extra fees. </p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-6">
                                        <div className="box4">
                                            <h6>
                                                Track fares and book flights to get the best fares   </h6>
                                            <p>
                                                Not ready to book yet? No problem – with fare alerts , we'll keep track of flight fares for you and let you know via email or app when they rise or fall.   </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="box4">
                                            <h6>
                                                Book low CO2 flights
                                            </h6>
                                            <p>
                                                Look for flights with low CO₂ emissions. Since we started showing this information, more than 10 million passengers have purchased tickets on low CO₂ emissions flights on their routes.  </p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-6">
                                        <div className="box4">
                                            <h6>
                                                Keep flexible
                                            </h6>
                                            <p>
                                                We understand how important it is to have a flexible plan. Find hotel and rental car options with free cancellation, so you can book now and make changes later if needed.  </p>
                                        </div>
                                    </div>
                                    <div className="box5">
                                        <a href="">View Flight Deals <i class="fa-solid fa-arrow-right"></i></a>
                                        <a href="">Compare Cheap Hotels <i class="fa-solid fa-arrow-right"></i></a>
                                        <a href="">Compare Affordable Rental Cars <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div data-aos="fade-up">
                <Footer />
            </div>
            </div>

        </div>
    )
}

export default Center
