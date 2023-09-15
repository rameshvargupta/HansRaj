import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Aos from 'aos';
import "aos/dist/aos.css";

const CarHire = () => {
const navigate=useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 })
}, [])

function FormSubmit() {
  let From = document.getElementById('destination').value;
  let To = document.getElementById('date1').value;
  if (From !== "" && To !== "") {
    alert("Welcome To My Website");
    navigate("/");
  }
}


  function hadelshownav(e) {
    e.stopPropagation();
    document.getElementById("showSmallNav").style.display = "block"
  }

  function hideSmallNav(e) {
    document.getElementById("showSmallNav").style.display = "none"
  }

  function HideOpennav(e) {
    e.stopPropagation();
    document.getElementById("showSmallNav").style.display = "none"
  }

  return (
    <div onClick={HideOpennav}>
      
      <div className="Navbar">
        <div className="container NavStart">

          <Link to={"/"}>  <div className="logo" data-aos="fade-down">
            <i class="fa-solid fa-house-tsunami"></i> <span>HansRaj</span>
            <img width={"100px"} src="Images/3.png" alt="" />
          </div>
          </Link>

          <div className="login2"  data-aos="fade-down">
            <li><Link to={"/Flight"}><i className='fa-solid fa-plane'></i> Flights</Link></li>
            <li><Link to={"/Hotel"}><i className='fa-solid fa-hotel'></i> Hotels</Link></li>
            <li><Link className='active' to={"/CarHire"}><i className='fa-solid fa-car'></i> Car Hire</Link></li>
          </div>

          <div className="smallcart " onClick={hadelshownav} data-aos="fade-down">
            <i class="fa-solid fa-bars"></i>
          </div>

        </div>

      </div>

      <div className="smallNav" id='showSmallNav'>
        <div className="innerNav">
          <button onClick={hideSmallNav} className='btn btn-danger'>X</button>
          <ul>
            <Link to={"/Flight"}> <li><i className='fa-solid fa-plane'></i> Flights</li></Link>
            <Link to={"/Hotel"}><li><i className='fa-solid fa-hotel'></i> Hotels</li></Link>
            <Link to={"/CarHire"}> <li className='active3' ><i className='fa-solid fa-car'></i> Car Hire</li></Link>
          </ul>
        </div>
      </div>


      <div className="hotelMain">

        <div className="hotelImage">
          <img className='img-fluid' src="Images2/romeo.jpg" alt="" />
        </div>

        <div className="container cont8">

          <div className="hotelbox1" data-aos="zoom-in-up">
            <form action="">
            <h1>Find the best car rental deals</h1>
            <div className="inputForm">

              <div className="InnerInputForm1">
                <label htmlFor="destination">Pick-up-location</label><br />
                <input type="text" id='destination' required placeholder='Enter City, airport or station' />
              </div>


              <div className="InnerInputForm2">

                <div className="formbox">
                  <label htmlFor="date1">Pick-up Date</label><br />
                  <input type="date" id='date1' required />
                </div>

                <div className="formbox">
                  <label htmlFor="date2">Time</label><br />
                  <input type="time" id='date2' />
                </div>

                <div className="formbox">
                  <label htmlFor="addperson">drop-off-Date</label><br />
                  <input type="date" id='date1' required />
                </div>
                <div className="formbox">
                  <label htmlFor="date2">Time</label><br />
                  <input type="time" id='date2' />
                </div>


              </div>
            </div>


            <div className="filterTicket Carfilter">

              <div className="innerFilter">

                <div className="innerDiv">
                  <input type="checkbox" id='free' />
                  <label htmlFor="free">Return car to a location</label>
                </div>

                <div className="innerDiv">
                  <input type="checkbox" id='free2' />
                  <label htmlFor="free2">Driver aged between 25-75</label>
                </div>
              </div>

              <div className="innerFilter">
                <button onClick={FormSubmit} className='btn btn-primary'>Search Cars <i class="fa-solid fa-arrow-right"></i></button>
              </div>

            </div>

            </form>
          </div>
          
        </div>    {/* close container */}
    

        <div className="container mt-3">
          <div className="row">
            <div className=" col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
              <div className="box12">
                <i className='fa-solid fa-car'></i>
                <p>Search for cheap car rental in seconds – anywhere in the world</p>
              </div>
            </div>
            <div className=" col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
              <div className="box12">
                <i class="fa-solid fa-calendar-days"></i>
                <p>Compare deals from trusted car hire providers in one place</p>
              </div>
            </div>
            <div className=" col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
              <div className="box12">
                <i class="fa-regular fa-bell"></i>
                <p>
                  Rent a car with a flexible booking policy or free cancellation</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container carBox1">
        <h1 data-aos="fade-up" className='mt-4'>Find the best car hire deals in Delhi</h1>
        <p data-aos="fade-up">Here are the most popular types of rental car you can pick up from a point near you in the next 30 days</p>

        <div className="row">

          <div className="col-sm-6 col-md-4 col-lg-4" data-aos="zoom-in-up">
            <div className="carbox2">

              <div className="InnerCar">
                <img className='img-fluid' src="Images2/car1.png" alt="" />
              </div>
              <hr />
              <h3>Intermediate</h3>

              <div className="CarQuality">

                <div className="innerQuality1">

                  <div className="divcar1">
                    <i className='fa-solid fa-user'></i> <span>5</span>
                  </div>
                  <div className="divcar2">
                    <i class="fa-solid fa-person-walking-luggage"></i> <span>4</span>
                  </div>
                </div>

                <div className="innerQuality">
                  <strong>Le 10,12</strong> <span>Per Day</span>
                </div>

              </div>
            </div>

          </div>
          <div className="col-sm-6 col-md-4 col-lg-4" data-aos="zoom-in-up">
            <div className="carbox2">

              <div className="InnerCar">
                <img className='img-fluid' src="Images2/car2.png" alt="" />
              </div>
              <hr />
              <h3>Economy</h3>

              <div className="CarQuality">

                <div className="innerQuality1">

                  <div className="divcar1">
                    <i className='fa-solid fa-user'></i> <span>6</span>
                  </div>
                  <div className="divcar2">
                    <i class="fa-solid fa-person-walking-luggage"></i> <span>2</span>
                  </div>
                </div>

                <div className="innerQuality">
                  <strong>Le 18,42</strong> <span>Per Day</span>
                </div>

              </div>
            </div>

          </div>
          <div className="col-sm-6 col-md-4 col-lg-4" data-aos="zoom-in-up">
            <div className="carbox2">

              <div className="InnerCar">
                <img className='img-fluid' src="Images2/car3.png" alt="" />
              </div>
              <hr />
              <h3>Premium</h3>

              <div className="CarQuality">

                <div className="innerQuality1">

                  <div className="divcar1">
                    <i className='fa-solid fa-user'></i> <span>4</span>
                  </div>
                  <div className="divcar2">
                    <i class="fa-solid fa-person-walking-luggage"></i> <span>4</span>
                  </div>
                </div>

                <div className="innerQuality">
                  <strong>Le 15,12</strong> <span>Per Day</span>
                </div>

              </div>
            </div>

          </div>
          <div className="col-sm-6 col-md-4 col-lg-4" data-aos="zoom-in-up">
            <div className="carbox2">

              <div className="InnerCar">
                <img className='img-fluid' src="Images2/car4.png" alt="" />
              </div>
              <hr />
              <h3>Fullsize</h3>

              <div className="CarQuality">

                <div className="innerQuality1">

                  <div className="divcar1">
                    <i className='fa-solid fa-user'></i> <span>8</span>
                  </div>
                  <div className="divcar2">
                    <i class="fa-solid fa-person-walking-luggage"></i> <span>5</span>
                  </div>
                </div>

                <div className="innerQuality">
                  <strong>Le 24,12</strong> <span>Per Day</span>
                </div>

              </div>
            </div>

          </div>
          <div className="col-sm-6 col-md-4 col-lg-4" data-aos="zoom-in-up">
            <div className="carbox2">

              <div className="InnerCar">
                <img className='img-fluid' src="Images2/car5.png" alt="" />
              </div>
              <hr />
              <h3>Compact</h3>

              <div className="CarQuality">

                <div className="innerQuality1">

                  <div className="divcar1">
                    <i className='fa-solid fa-user'></i> <span>6</span>
                  </div>
                  <div className="divcar2">
                    <i class="fa-solid fa-person-walking-luggage"></i> <span>3</span>
                  </div>
                </div>

                <div className="innerQuality">
                  <strong>Le 14,99</strong> <span>Per Day</span>
                </div>

              </div>
            </div>

          </div>
          <div className="col-sm-6 col-md-4 col-lg-4" data-aos="zoom-in-up">
            <div className="carbox2">

              <div className="InnerCar">
                <img className='img-fluid' src="Images2/car6.png" alt="" />
              </div>
              <hr />
              <h3>Mini</h3>

              <div className="CarQuality">

                <div className="innerQuality1">

                  <div className="divcar1">
                    <i className='fa-solid fa-user'></i> <span>4</span>
                  </div>
                  <div className="divcar2">
                    <i class="fa-solid fa-person-walking-luggage"></i> <span>2</span>
                  </div>
                </div>

                <div className="innerQuality">
                  <strong>Le 13,42</strong> <span>Per Day</span>
                </div>

              </div>
            </div>

          </div>
          <div className="col-sm-6 col-md-4 col-lg-4" data-aos="zoom-in-up">
            <div className="carbox2">

              <div className="InnerCar">
                <img className='img-fluid' src="Images2/car7.png" alt="" />
              </div>
              <hr />
              <h3>Intermediate</h3>

              <div className="CarQuality">

                <div className="innerQuality1">

                  <div className="divcar1">
                    <i className='fa-solid fa-user'></i> <span>6</span>
                  </div>
                  <div className="divcar2">
                    <i class="fa-solid fa-person-walking-luggage"></i> <span>3</span>
                  </div>
                </div>

                <div className="innerQuality">
                  <strong>Le 17,49</strong> <span>Per Day</span>
                </div>

              </div>
            </div>

          </div>
          <div className="col-sm-6 col-md-4 col-lg-4" data-aos="zoom-in-up">
            <div className="carbox2">

              <div className="InnerCar">
                <img className='img-fluid' src="Images2/car8.png" alt="" />
              </div>
              <hr />
              <h3>Premium</h3>

              <div className="CarQuality">

                <div className="innerQuality1">

                  <div className="divcar1">
                    <i className='fa-solid fa-user'></i> <span>4</span>
                  </div>
                  <div className="divcar2">
                    <i class="fa-solid fa-person-walking-luggage"></i> <span>1</span>
                  </div>
                </div>

                <div className="innerQuality">
                  <strong>Le 24,99</strong> <span>Per Day</span>
                </div>

              </div>
            </div>

          </div>
          <div className="col-sm-6 col-md-4 col-lg-4" data-aos="zoom-in-up">
            <div className="carbox2">

              <div className="InnerCar">
                <img className='img-fluid' src="Images2/car10.webp" alt="" />
              </div>
              <hr />
              <h3>Compact</h3>

              <div className="CarQuality">

                <div className="innerQuality1">

                  <div className="divcar1">
                    <i className='fa-solid fa-user'></i> <span>6</span>
                  </div>
                  <div className="divcar2">
                    <i class="fa-solid fa-person-walking-luggage"></i> <span>2</span>
                  </div>
                </div>

                <div className="innerQuality">
                  <strong>Le 19,12</strong> <span>Per Day</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="container mt-4 mb-4">
        <h1 data-aos="zoom-in-up" style={{ textAlign: "center" }}>Booking car hire in three simple steps</h1>

        <div className="row mt-5">

          <div className="col-md-4 col-lg-4" data-aos="fade-up">
            <div className="carcompare">
              <div className="innerLogo2">
                <img className='img-fluid' src="Images2/logo4.svg" alt="" />
              </div>
              <h4>Step 1: Search</h4>
              <p>Enter your location and see what's available. From family-friendly SUVs to luxury convertibles, you’ll get a great price on every type of hire car</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4" data-aos="fade-up">
            <div className="carcompare">
              <div className="innerLogo2">
                <img className='img-fluid' src="Images2/logo5.svg" alt="" />
              </div>
              <h4>Step 2: Compare</h4>
              <p>Compare rental cars on fuel policy, mileage, provider rating, flexible booking, cleanliness, customer service and more.</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4" data-aos="fade-up">
            <div className="carcompare">
              <div className="innerLogo2">
                <img className='img-fluid' src="Images2/logo6.svg" alt="" />
              </div>
              <h4>Step 3: Book</h4>
              <p>We compare car rental prices on 100s of sites for you, so once you've found your ride, you'll be redirected to book with the provider, with no extra fees.</p>
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

export default CarHire
