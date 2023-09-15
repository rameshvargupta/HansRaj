import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer'
import Aos from 'aos';
import "aos/dist/aos.css";

const Flight = () => {
    const [selectedRadio, setSelectedRadio] = useState('return');
    const [inputBoxes, setInputBoxes] = useState([]);
    const [count, setcount] = useState(0);
    const [count1, setcount1] = useState(0);
    const navigate = useNavigate();
   
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    function FormSubmit() {
        let From = document.getElementById('from').value;
        let To = document.getElementById('to').value;
        if (From !== "" && To !== "") {
           alert("Welcome To My Website");
            navigate("/Hotel");
        }
    }

    const handleRadioChange = (e) => {
        setSelectedRadio(e.target.id);
    };

    const handleAddBox = () => {
        setInputBoxes([...inputBoxes, { id: inputBoxes.length }]);
    };

    const handleDeleteBox = (id) => {
        setInputBoxes(inputBoxes.filter((box) => box.id !== id));
    };

    function MoreShow() {
        document.getElementById("ShowMore").style.display = "block";
        document.getElementById("showbtn").style.display = "none";
        document.getElementById("showbtn2").style.display = "block"
    }
    function HideMore() {
        document.getElementById("ShowMore").style.display = "none";
        document.getElementById("showbtn2").style.display = "none"
        document.getElementById("showbtn").style.display = "block";
    }

    function hadelFillData(e) {
        e.stopPropagation();
        document.getElementById("pasengersDetails1").style.display = "block";
    }
    function removeDetails() {
        document.getElementById("pasengersDetails1").style.display = "none";
    }

    function hadelshownav(e) {
        e.stopPropagation();
        document.getElementById("showSmallNav").style.display = "block"
        document.getElementById("pasengersDetails1").style.display = "None";
    }

    function hideSmallNav() {
        document.getElementById("showSmallNav").style.display = "none"
    }
    function HideOpennav(e) {
        e.stopPropagation();
        document.getElementById("showSmallNav").style.display = "none"
    }


    function validateform() {
        let email = document.getElementById("emailInput").value;
        // if (!email==='') {
        //     alert(`Thanks Your Email Address is ${email}`)
        // }
    }

    return (
        <div onClick={HideOpennav}>

            <div className="Navbar">
                <div className="container NavStart">

                    <Link to={"/"} data-aos="fade-down">  <div className="logo">
                        <i class="fa-solid fa-house-tsunami"></i> <span>HansRaj</span>
                        <img width={"100px"} src="Images/3.png" alt="" />
                    </div>
                    </Link>

                    <div className="login2" data-aos="fade-down">
                        <li  ><Link className='active' to={"/Flight"}><i className='fa-solid fa-plane'></i> Flights</Link></li>
                        <li  ><Link to={"/Hotel"}><i className='fa-solid fa-hotel'></i> Hotels</Link></li>
                        <li  ><Link to={"/CarHire"}><i className='fa-solid fa-car'></i> Car Hire</Link></li>
                    </div>

                    <div className="smallcart" onClick={hadelshownav} data-aos="fade-down">
                        <i class="fa-solid fa-bars"></i>
                    </div>

                </div>
            </div>

            <div className="smallNav" id='showSmallNav'>
                <div className="innerNav">
                    <button onClick={hideSmallNav} className='btn btn-danger'>X</button>
                    <ul>
                        <Link to={"/Flight"}> <li className='active3'><i className='fa-solid fa-plane'></i> Flights</li></Link>
                        <Link to={"/Hotel"}><li><i className='fa-solid fa-hotel'></i> Hotels</li></Link>
                        <Link to={"/CarHire"}> <li><i className='fa-solid fa-car'></i> Car Hire</li></Link>
                    </ul>
                </div>
            </div>

            <div className="box10">
                <div className="flightP">
                    <img src="Images/6.jpg" alt="" />
                </div>
                <div className="container">

                    <div className="box11" >
                        <h1 data-aos="zoom-in-up">The best flight deals to everywhere, from anywhere</h1>

                        <div className="FlightInput">
                            <div className="search3" data-aos="zoom-in-up">

                                <form action="">

                                    <div className="flightbox">
                                        <div className="RedioButton">

                                            <div className="innerRedio">
                                                <input type="radio" name="redio" id="return" checked={selectedRadio === "return"} onChange={handleRadioChange} />
                                                <label htmlFor="return">Return</label>
                                            </div>
                                            <div className="innerRedio">
                                                <input type="radio" name="redio" id="OneWay" checked={selectedRadio === "OneWay"} onChange={handleRadioChange} />
                                                <label htmlFor="OneWay">One Way</label>
                                            </div>
                                            <div className="innerRedio">
                                                <input type="radio" name="redio" id="Multi" checked={selectedRadio === "Multi"} onChange={handleRadioChange} />
                                                <label htmlFor="Multi">Multi-City</label>
                                            </div>
                                        </div>

                                        <div className='search2' style={{ display: selectedRadio === 'return' ? 'block' : 'none' }}>

                                            <div className="search">

                                                <div className="mainInput" >

                                                    <div className="input1">
                                                        <label for="from" >From </label><br />
                                                        <input type="text" required id="from" placeholder="Country,city or airtport" />
                                                    </div>
                                                    <div className="input1">
                                                        <label for="to" >To </label><br />
                                                        <input type="text" required id="to" placeholder="Country,city or airtport" />
                                                    </div>
                                                </div>

                                                <div className="mainInput">

                                                    <div id='pasengerdata'>
                                                        <div className="input1" onClick={hadelFillData}>
                                                            <label for="pasenger" >Travellers and cabin class </label><br />
                                                            <div>{count} Adult, {count1} Children  <i class="fa-solid fa-caret-down"></i></div>
                                                        </div>

                                                        <div className="pasengersDetails" id='pasengersDetails1'>
                                                            <div className="removeButton">
                                                                <h4>Cabin class</h4> <button className='btn btn-danger' onClick={removeDetails}>X</button>
                                                            </div>
                                                            <p className='p1'>We can only show Economy prices fot this search </p>
                                                            <p>To see Business and First Class options, please tell us your travel dates or destination.</p>

                                                            <div className="innerDetails">
                                                                <div className="pasangers1">
                                                                    <strong>Adult</strong>
                                                                    <p>Aged 16+</p>
                                                                </div>
                                                                <div className="pasangers1">
                                                                    <button onClick={() => count !== 0 ? setcount(count - 1) : ""}>-</button> <strong>{count}</strong> <button onClick={() => count < 6 ? setcount(count + 1) : ""}>+</button>
                                                                </div>
                                                            </div>

                                                            <div className="innerDetails">
                                                                <div className="pasangers1">
                                                                    <strong>Childern</strong>
                                                                    <p>Aged 0 to 15</p>
                                                                </div>
                                                                <div className="pasangers1">
                                                                    <button onClick={() => count1 !== 0 ? setcount1(count1 - 1) : ""}>-</button> <strong>{count1}</strong> <button onClick={() => count1 < 4 ? setcount1(count1 + 1) : ""}>+</button>
                                                                </div>
                                                            </div>
                                                            <button onClick={removeDetails} className='btn btn-primary done'>Done</button>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="Checkbox">
                                                <div className="InnerCheckbox">
                                                    <input type="checkbox" id='checkbox1' />
                                                    <label htmlFor="checkbox1">Add Nearby Airports</label>
                                                </div>
                                                <div className="InnerCheckbox">
                                                    <input type="checkbox" id='checkbox2' />
                                                    <label htmlFor="checkbox2">Direct Flights Only</label>
                                                </div>


                                            </div>
                                            <div className="input3">
                                                <button onClick={FormSubmit} className='btn btn-primary'>Search</button>
                                            </div>

                                        </div>

                                        <div style={{ display: selectedRadio === 'OneWay' ? 'block' : 'none' }} className="search4">

                                            <div className="OneWayInput">
                                                <div className="InnerOneWay">
                                                    <input type="text" placeholder='From' />
                                                    <input type="text" placeholder='To' />
                                                    <input type="date" placeholder='From' />
                                                </div>
                                                <div className="InnerOneWay">
                                                    <input type="text" placeholder='From' />
                                                    <input type="text" placeholder='To' />
                                                    <input type="date" placeholder='From' />
                                                </div>
                                                <button className='btn btn-primary'>Search</button>
                                            </div>

                                        </div>

                                        <div style={{ display: selectedRadio === 'Multi' ? 'block' : 'none' }} className="search5">


                                            <div className="lastInput mt-2">
                                                <div className="mb-4" id="InputData">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder='From Country,city or airtport'
                                                    />
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="To Country,city or airtport"
                                                    />


                                                    <div className="inputBox1 mt-4">
                                                        {inputBoxes.map((box) => (
                                                            <div key={box.id}>

                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id={`name${box.id}`}
                                                                    placeholder="From Country,city or airtport"
                                                                />

                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id={`name${box.id}`}
                                                                    placeholder="To Country,city or airtport" />

                                                                <button
                                                                    onClick={() => handleDeleteBox(box.id)}
                                                                    className="btn btn-danger mb-2"
                                                                    style={{ float: 'right', marginTop: '-47.5px', }}
                                                                >
                                                                    Remove
                                                                </button>
                                                                <div className='gapInput'></div>
                                                            </div>

                                                        ))}
                                                    </div>


                                                </div>
                                                <div className="multiButton">
                                                    <button className="btn btn-success" id="btn" onClick={handleAddBox}>
                                                        <i class="fa-solid fa-plus"></i>  Add Another Flights
                                                    </button>
                                                    <button id='Multibtn' className="btn btn-primary" data-aos="fade-up" >
                                                        Search
                                                    </button>
                                                </div>

                                            </div>


                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="container mt-3 flightPageM">
                <div className="row">
                    <div className=" col-sm-12 col-md-4 col-lg-4" data-aos="zoom-in-up">
                        <div className="box12">
                            <i className='fa-solid fa-plane'></i>
                            <p>Explore the best flight deals from anywhere, to everywhere, then book with no fees</p>
                        </div>
                    </div>
                    <div className=" col-sm-12 col-md-4 col-lg-4" data-aos="zoom-in-up">
                        <div className="box12">
                            <i class="fa-solid fa-calendar-days"></i>
                            <p>Compare flight deals from over 1000 providers, and choose the cheapest, fastest or greenest tickets.</p>
                        </div>
                    </div>
                    <div className=" col-sm-12 col-md-4 col-lg-4" data-aos="zoom-in-up">
                        <div className="box12">
                            <i class="fa-regular fa-bell"></i>
                            <p>Find the cheapest month - or even day - to fly, and set up Price Alerts to book when the price is right</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container flightPage ">
                <p data-aos="zoom-in-up">Flight deals from India</p>
                <p data-aos="zoom-in-up">Here are the flight deals with the lowest prices. Act fast – they all depart within the next three months.</p>

                <div className="box13">
                    <div className="row">

                        <div className="col-sm-6 col-lg-4" data-aos="zoom-in-up">
                            <figure>
                                <div className="image3">
                                    <img src="Images/bang.jpg" alt="" /></div>
                                <figcaption>
                                    <div className="imageBox1">
                                        <h4>Bangkok</h4> <h5>Thailand</h5>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Sat, 12 Sep</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Fri, 21 Sep</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className='LastText'> from Le 3,492 <i class="fa-solid fa-chevron-right"></i></div>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="col-sm-6 col-lg-4" data-aos="zoom-in-up">
                            <figure>
                                <div className="image3">
                                    <img src="Images/singapore.jpg" alt="" /></div>
                                <figcaption>
                                    <div className="imageBox1">
                                        <h4>Singapore</h4> <h5>Singapore</h5>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Fri, 17 Sep</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Mon, 29 Sep</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className='LastText'> from Le 2,592 <i class="fa-solid fa-chevron-right"></i></div>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="col-sm-6 col-lg-4" data-aos="zoom-in-up">
                            <figure>
                                <div className="image3">
                                    <img src="Images/Bangalore.jpg" alt="" /></div>
                                <figcaption>
                                    <div className="imageBox1">
                                        <h4>Bangalore</h4> <h5>India</h5>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Thur, 03 Aug</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Mon, 14 Aug</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className='LastText'> from Le 1,445 <i class="fa-solid fa-chevron-right"></i></div>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="col-sm-6 col-lg-4" data-aos="zoom-in-up">
                            <figure>
                                <div className="image3">
                                    <img src="Images/Mumbai.jpg" alt="" /></div>
                                <figcaption>
                                    <div className="imageBox1">
                                        <h4>Mumbai</h4> <h5>India</h5>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Tue, 8 Sep</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Fri, 27 Sep</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className='LastText'> from Le 3,442 <i class="fa-solid fa-chevron-right"></i></div>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="col-sm-6 col-lg-4" data-aos="zoom-in-up">
                            <figure>
                                <div className="image3">
                                    <img src="Images/london.jpeg" alt="" /></div>
                                <figcaption>
                                    <div className="imageBox1">
                                        <h4>London</h4> <h5>UK</h5>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Sat, 15 July</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Mon, 19 July</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className='LastText'> from Le 9,152 <i class="fa-solid fa-chevron-right"></i></div>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="col-sm-6 col-lg-4" data-aos="zoom-in-up">
                            <figure>
                                <div className="image3">
                                    <img src="Images/delhi.jpg" alt="" /></div>
                                <figcaption>
                                    <div className="imageBox1">
                                        <h4>Delhi</h4> <h5>India</h5>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Tue, 14 Sep</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Fri, 27 Sep</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className='LastText'> from Le 1,892 <i class="fa-solid fa-chevron-right"></i></div>
                                </figcaption>
                            </figure>
                        </div>





                    </div>
                </div>
                <div className="box15" id='showbtn' data-aos="zoom-in-up">
                    <button className='btn btn-primary' onClick={MoreShow}>See More <i class="fa-solid fa-chevron-down"></i></button>
                </div>

                <div className="box14" id='ShowMore'>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4" data-aos="zoom-in-up" >
                            <figure>
                                <div className="image3">
                                    <img src="Images/Hyderabad.jpg" alt="" /></div>
                                <figcaption>
                                    <div className="imageBox1">
                                        <h4>Hyderabad</h4> <h5>India</h5>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Fri, 24 Sep</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Mon, 28 Sep</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className='LastText'> from Le 2,982 <i class="fa-solid fa-chevron-right"></i></div>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="col-sm-6 col-lg-4" data-aos="zoom-in-up">
                            <figure>
                                <div className="image3">
                                    <img src="Images/IndiraGandhi.jpg" alt="" /></div>
                                <figcaption>
                                    <div className="imageBox1">
                                        <h4>Indira Gandhi</h4> <h5>India</h5>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Sat, 18 Sep</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Tue, 25 Sep</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className='LastText'> from Le 2,892 <i class="fa-solid fa-chevron-right"></i></div>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="col-sm-6 col-lg-4" data-aos="zoom-in-up" >
                            <figure>
                                <div className="image3">
                                    <img src="Images/dubai.jpg" alt="" /></div>
                                <figcaption>
                                    <div className="imageBox1">
                                        <h4>Dubai</h4> <h5>UAE</h5>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Fri, 28 Sep</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className="imageBox2">
                                        <div className="innerBox1">
                                            <i class="fa-solid fa-house-tsunami"></i>
                                            <div className="innerDate">
                                                <div> Fri, 05 Aug</div>
                                                <div> CCU - DAC with Air India</div></div>
                                        </div>
                                        <div>Direct</div>
                                    </div>
                                    <div className='LastText'> from Le 8,492 <i class="fa-solid fa-chevron-right"></i></div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>

                <div className="box16" id='showbtn2'>
                    <button className='btn btn-primary' onClick={HideMore}>See Less <i class="fa-solid fa-chevron-up"></i></button>
                </div>




            </div>

            <div className="container lastBox mt-5">
                <div className="lastBox">
                    <h2 data-aos="zoom-in-up">Looking for the best flight deals to anywhere in the world?</h2>
                    <p data-aos="zoom-in-up">It’s easy around here. 100 million travellers use us as their go-to tool, comparing flight deals and offers from more than 1,200 airlines and travel providers. With so many options to choose from in one place, you can say hello to savings, and goodbye to stress – here’s how.</p>
                    <div className="row">

                        <div className="col-sm-12 col-md-4 col-lg-4" data-aos="zoom-in-up">
                            <div className="ParentBox">
                                <img className='innerImagefirst' src="https://content.skyscnr.com/m/3e55723dcc8a2d0f/original/image1.svg" alt="" />
                            </div>
                            <div className="innerBox2">
                                <h5>Search ‘Everywhere’, explore anywhere</h5>
                                <p>Enter your departure airport and travel dates, then hit ‘Everywhere’. You’ll see flights to every destination in the world, cheapest first.</p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4" data-aos="zoom-in-up">
                            <div className="ParentBox">
                                <img src="https://content.skyscnr.com/m/7b7b3eaf2ab4081c/original/image2.svg" alt="" />
                            </div>
                            <div className="innerBox2">
                                <h5>Pay less, go further with transparent pricing</h5>
                                <p>The cheapest flight deals. No hidden fees. No funny business. With us, the price you see when you search is what you’ll pay.</p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4" data-aos="zoom-in-up">
                            <div className="ParentBox">
                                <img src="https://content.skyscnr.com/m/4ab58b7e3ae3790c/original/image3.svg" alt="" />
                            </div>
                            <div className="innerBox2">
                                <h5>Book when it's best with Price Alerts</h5>
                                <p>Found your flight, but not quite ready to book? Set up Price Alerts and we’ll let you know when your flight price goes up or down.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container subscribeMain mb-5">
                <div className="row">
                    <div className="col-md-6 col-lg-6" data-aos="fade-up">
                        <div className="subscribePage">
                            <h3>Don’t miss a great deal</h3>
                            <p>Stay one step ahead. Find the best value travel with the latest deals, tips and news.</p>
                            <form action=""><div><input required type="email" placeholder='Email Address' id='emailInput' /></div>
                                <div><button id='disBtn' onClick={validateform} className='btn btn-primary'>Get Email Alert</button></div></form>
                            <p>You can unsubscribe at any time. Read our <span>Privacy Policy</span> for more info.</p>

                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6" data-aos="fade-up">
                        <div className="subscribeImage">
                            <img className='img-fluid' src="Images/notepad.png" alt="" />
                        </div>
                    </div>

                </div>

            </div>
            <div data-aos="fade-up">
                <Footer />
            </div>

        </div>
    )
}

export default Flight
