import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Aos from 'aos';
import "aos/dist/aos.css";

const Hotel = () => {
  const [selectedTab, setSelectedTab] = useState('Mumbai');
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  function FormSubmit() {
    let From = document.getElementById('destination').value;
    let To = document.getElementById('date2').value;
    if (From !== "" && To !== "") {
      alert("Welcome To My Website");
      navigate("/CarHire");
    }
  }

  function addPerson(e) {
    e.stopPropagation()
    document.getElementById("ShowDetails2").style.display = "block";
  }

  function hidePasengers() {
    document.getElementById("ShowDetails2").style.display = "None";
  }

  function hadelshownav(e) {
    e.stopPropagation()
    document.getElementById("showSmallNav").style.display = "block"
    document.getElementById("ShowDetails2").style.display = "None";
  }

  function hideSmallNav() {
    document.getElementById("showSmallNav").style.display = "none"
  }

  function HideOpennav(e) {
    e.stopPropagation()
    document.getElementById("showSmallNav").style.display = "none"
    // document.getElementById("ShowDetails2").style.display = "None";
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
            <li><Link to={"/Flight"}><i className='fa-solid fa-plane'></i> Flights</Link></li>
            <li><Link className='active' to={"/Hotel"}><i className='fa-solid fa-hotel'></i> Hotels</Link></li>
            <li><Link to={"/CarHire"}><i className='fa-solid fa-car'></i> Car Hire</Link></li>
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
            <Link to={"/Flight"}> <li><i className='fa-solid fa-plane'></i> Flights</li></Link>
            <Link to={"/Hotel"}><li className='active3'><i className='fa-solid fa-hotel'></i> Hotels</li></Link>
            <Link to={"/CarHire"}> <li><i className='fa-solid fa-car'></i> Car Hire</li></Link>
          </ul>
        </div>
      </div>

      <div className="hotelMain">
        <div className="hotelImage">
          <img className='img-fluid' src="Images2/hotel.jpg" alt="" />
        </div>

        <div className="container cont8">

          <div className="hotelbox1" data-aos="zoom-in-up">
            
            <form action="">

              <h1>Find the right hotel today</h1>
              <div className="inputForm">

                <div className="InnerInputForm1">
                  <label htmlFor="destination">Where do you want to stay?</label><br />
                  <input type="text" id='destination' required placeholder='Enter Destination or Hotel Name' />
                </div>

                <div className="InnerInputForm">
                  <div className="InnerInputForm2">

                    <div className="formbox">
                      <label htmlFor="date1">Check-in</label><br />
                      <input type="date" id='date1' required />
                    </div>
                    <div className="formbox">
                      <label htmlFor="date2">Check-out</label><br />
                      <input type="date" id='date2' required />
                    </div>

                    <div className="formbox pasengerBox" onClick={addPerson}>
                      <label htmlFor="addperson">Guest and Rooms</label><br />
                      <div id="addperson">
                        {`${count} Adult, ${count1} Child, ${count2} Rooms `} <i id='caret' class="fa fa-caret-down"></i>
                      </div>

                    </div>
                  </div>

                  <div className="pasengerDetails2" id='ShowDetails2'>

                    <div className="pasengerBtn">
                      <div className="pasengers">
                        <h5>Add Pasengers Details</h5>
                      </div>
                      <div className="divBtn"> <button className='btn btn-danger' onClick={hidePasengers}>X</button></div>
                    </div>

                    <div className='innerPasengers1'>

                      <div className="innerDetail1">
                        <i class="fa-solid fa-person"></i>  Adult
                      </div>
                      <div className="innerDetail2">
                        <button onClick={() => count !== 0 ? setCount(count - 1) : ''}   >-</button> <span>{count}</span> <button onClick={() => count <= 6 ? setCount(count + 1) : ""}>+</button>
                      </div>
                    </div>

                    <div className='innerPasengers1'>

                      <div className="innerDetail1">
                        <i class="fa-solid fa-person"></i>Children
                      </div>
                      <div className="innerDetail2">
                        <button onClick={() => count1 !== 0 ? setCount1(count1 - 1) : ""}  >-</button> <span>{count1}</span> <button onClick={() => count1 <= 3 ? setCount1(count1 + 1) : ""} >+</button>
                      </div>
                    </div>

                    <div className='innerPasengers1'>

                      <div className="innerDetail1">
                        <i class="fa-solid fa-person-booth"></i> Rooms
                      </div>
                      <div className="innerDetail2">
                        <button onClick={() => count2 !== 0 ? setCount2(count2 - 1) : ""}  >-</button> <span>{count2}</span> <button onClick={() => count2 <= 4 ? setCount2(count2 + 1) : ""} >+</button>
                      </div>
                    </div>
                    <div className="divBtn2" style={{ textAlign: "center " }}> <button className='btn btn-primary' onClick={hidePasengers}>Done</button></div>



                  </div>

                </div>


              </div>
              <div className="filterTicket">

                <div className="innerFilter">

                  <span>Popular Filter:</span>
                  <span><input type="checkbox" id='free' />
                    <label htmlFor="free">Free cancellation</label>
                  </span>
                  <span> <input type="checkbox" id='star4' />
                    <label htmlFor="star4">4 Start</label></span>

                  <span> <input type="checkbox" id='star3' />
                    <label htmlFor="star3">3 Start</label></span>
                </div>

                <div className="innerFilter">
                  <button onClick={FormSubmit} className='btn btn-primary'>Search Hotels <i class="fa-solid fa-arrow-right"></i></button>
                </div>

              </div>

            </form>

          </div>

        </div>

      </div>

      <div className="container mt-4">
        <div className="hotelbox2">
          <div className="imagebox2" data-aos="fade-up">
            <img className='img-fluid' src="Images2/swimming.jpg" alt="" />
          </div>
          <div className="hotelInnerbox2">
            <h2>Save On Your Next Stay</h2>
            <button className='btn btn-primary' data-aos="zoom-in-up">Discover a Deal</button>
          </div>
        </div>
      </div>

      <div className="container cont6 mb-5">
        <h2 data-aos="zoom-in-up">Plan your next staycation</h2>

        <div className="multibtn" data-aos="zoom-in-up">
          <button className={`Btn mb-2 ${selectedTab === 'Mumbai' ? 'active2' : ''}`} onClick={() => setSelectedTab('Mumbai')}>Mumbai</button>
          <button className={`Btn mb-2 ${selectedTab === 'NewDelhi' ? 'active2' : ''}`} onClick={() => setSelectedTab('NewDelhi')}>New Delhi</button>
          <button className={`Btn mb-2 ${selectedTab === 'Hyderabad' ? 'active2' : ''}`} onClick={() => setSelectedTab('Hyderabad')}>Hyderabad</button>
          <button className={`Btn mb-2 ${selectedTab === 'Bengaluru' ? 'active2' : ''}`} onClick={() => setSelectedTab('Bengaluru')}>Bengaluru</button>
        </div>

        <div className="cont10 mt-4">

          <div className="div1" style={{ display: selectedTab === 'Mumbai' ? 'block' : 'none' }}>

            <div className="row">

              <div className="col-sm-12 col-md-4 col-lg-4" data-aos="fade-up">
                <figure>
                  <div className="image3">
                    <img className='img-fluid' src="Images2/mumbai1.jpg" alt="" />
                    <div className="views">
                      <span className='rating1'>4.5</span> <span className='review'>5916 Reviews</span>
                    </div>
                  </div>

                  <figcaption>
                    <div className="place">
                      <i class="fa-solid fa-hotel"></i> Mumbai, India
                    </div>
                    <h5>ITC Maratha, a Luxary Collection Hotel, Mumbai</h5>
                    <div className="rating">
                      <div className="icon"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <h5>Le 36,28 <span>Per Night</span></h5>
                    </div>

                  </figcaption>
                </figure>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4" data-aos="fade-up">
                <figure>
                  <div className="image3">
                    <img className='img-fluid' src="Images2/mumbai2.webp" alt="" />
                    <div className="views">
                      <span className='rating1'>4.2</span> <span className='review'>3289 Reviews</span>
                    </div>
                  </div>

                  <figcaption>
                    <div className="place">
                      <i class="fa-solid fa-hotel"></i> Mumbai, India
                    </div>
                    <h5>ITC Maratha, a Luxary Collection Hotel, Mumbai</h5>
                    <div className="rating">
                      <div className="icon"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <h5>Le 32,98 <span>Per Night</span></h5>
                    </div>

                  </figcaption>
                </figure>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4" data-aos="fade-up">
                <figure>
                  <div className="image3">
                    <img className='img-fluid' src="Images2/mumbai3.jpg" alt="" />
                    <div className="views">
                      <span className='rating1'>4.7</span> <span className='review'>25497 Reviews</span>
                    </div>
                  </div>

                  <figcaption>
                    <div className="place">
                      <i class="fa-solid fa-hotel"></i> Mumbai, India
                    </div>
                    <h5>ITC Maratha, a Luxary Collection Hotel, Mumbai</h5>
                    <div className="rating">
                      <div className="icon"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <h5>Le 56,18 <span>Per Night</span></h5>
                    </div>

                  </figcaption>
                </figure>
              </div>



            </div>

          </div>

          <div className="div2" style={{ display: selectedTab === 'NewDelhi' ? 'block' : 'none' }}>
            <div className="row">

              <div className="col-sm-12 col-md-4 col-lg-4">
                <figure>
                  <div className="image3">
                    <img className='img-fluid' src="Images2/delhi1.jpg" alt="" />
                    <div className="views">
                      <span className='rating1'>4.6</span> <span className='review'>15697 Reviews</span>
                    </div>
                  </div>

                  <figcaption>
                    <div className="place">
                      <i class="fa-solid fa-hotel"></i> Delhi, India
                    </div>
                    <h5>A Luxary Collection Hotel, Delhi</h5>
                    <div className="rating">
                      <div className="icon"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <h5>Le 42,89 <span>Per Night</span></h5>
                    </div>

                  </figcaption>
                </figure>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4">
                <figure>
                  <div className="image3">
                    <img className='img-fluid' src="Images2/delhi2.jpg" alt="" />
                    <div className="views">
                      <span className='rating1'>4.5</span> <span className='review'>8945 Reviews</span>
                    </div>
                  </div>

                  <figcaption>
                    <div className="place">
                      <i class="fa-solid fa-hotel"></i> New Delhi, India
                    </div>
                    <h5>A Luxary Collection Hotel, Delhi</h5>
                    <div className="rating">
                      <div className="icon"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <h5>Le 52,13 <span>Per Night</span></h5>
                    </div>

                  </figcaption>
                </figure>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4">
                <figure>
                  <div className="image3">
                    <img className='img-fluid' src="Images2/delhi3.jpg" alt="" />
                    <div className="views">
                      <span className='rating1'>4.4</span> <span className='review'>12465 Reviews</span>
                    </div>
                  </div>

                  <figcaption>
                    <div className="place">
                      <i class="fa-solid fa-hotel"></i> Delhi, India
                    </div>
                    <h5>A Luxary Collection Hotel, New Delhi</h5>
                    <div className="rating">
                      <div className="icon"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <h5>Le 47,99 <span>Per Night</span></h5>
                    </div>

                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className="div3" style={{ display: selectedTab === 'Hyderabad' ? 'block' : 'none' }}>

            <div className="row">

              <div className="col-sm-12 col-md-4 col-lg-4">
                <figure>
                  <div className="image3">
                    <img className='img-fluid' src="Images2/hyd1.jpg" alt="" />
                    <div className="views">
                      <span className='rating1'>4.5</span> <span className='review'>20456 Reviews</span>
                    </div>
                  </div>

                  <figcaption>
                    <div className="place">
                      <i class="fa-solid fa-hotel"></i> Hyderabad, India
                    </div>
                    <h5>A Luxary Collection Hotel, Hyderabad</h5>
                    <div className="rating">
                      <div className="icon"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <h5>Le 58,99 <span>Per Night</span></h5>
                    </div>

                  </figcaption>
                </figure>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4">
                <figure>
                  <div className="image3">
                    <img className='img-fluid' src="Images2/hyd2.jpeg" alt="" />
                    <div className="views">
                      <span className='rating1'>4.6</span> <span className='review'>16548 Reviews</span>
                    </div>
                  </div>

                  <figcaption>
                    <div className="place">
                      <i class="fa-solid fa-bars"></i> Hyderabad, India
                    </div>
                    <h5>A Luxary Collection Hotel, Hyderabad</h5>
                    <div className="rating">
                      <div className="icon"><i class="fa-solid fa-hotel"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <h5>Le 56,99 <span>Per Night</span></h5>
                    </div>

                  </figcaption>
                </figure>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4">
                <figure>
                  <div className="image3">
                    <img className='img-fluid' src="Images2/hyd3.jpg" alt="" />
                    <div className="views">
                      <span className='rating1'>4.5</span> <span className='review'>12465 Reviews</span>
                    </div>
                  </div>

                  <figcaption>
                    <div className="place">
                      <i class="fa-solid fa-hotel"></i> Hyderabad, India
                    </div>
                    <h5>A Luxary Collection Hotel, Hyderabad</h5>
                    <div className="rating">
                      <div className="icon"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <h5>Le 63,99 <span>Per Night</span></h5>
                    </div>

                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className="div4" style={{ display: selectedTab === 'Bengaluru' ? 'block' : 'none' }}>
            <div className="row">

              <div className="col-sm-12 col-md-4 col-lg-4">
                <figure>
                  <div className="image3">
                    <img className='img-fluid' src="Images2/ban1.webp" alt="" />
                    <div className="views">
                      <span className='rating1'>4.5</span> <span className='review'>32499 Reviews</span>
                    </div>
                  </div>

                  <figcaption>
                    <div className="place">
                      <i class="fa-solid fa-hotel"></i> Bangolore, India
                    </div>
                    <h5>A Luxary Collection Hotel, Bangolore</h5>
                    <div className="rating">
                      <div className="icon"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <h5>Le 67,99 <span>Per Night</span></h5>
                    </div>

                  </figcaption>
                </figure>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4">
                <figure>
                  <div className="image3">
                    <img className='img-fluid' src="Images2/ban2.webp" alt="" />
                    <div className="views">
                      <span className='rating1'>4.7</span> <span className='review'>45325 Reviews</span>
                    </div>
                  </div>

                  <figcaption>
                    <div className="place">
                      <i class="fa-solid fa-hotel"></i> Bangolore, India
                    </div>
                    <h5>A Luxary Collection Hotel, Bangolore</h5>
                    <div className="rating">
                      <div className="icon"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <h5>Le 65,99 <span>Per Night</span></h5>
                    </div>

                  </figcaption>
                </figure>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4">
                <figure>
                  <div className="image3">
                    <img className='img-fluid' src="Images2/ban3.jpg" alt="" />
                    <div className="views">
                      <span className='rating1'>4.5</span> <span className='review'>12465 Reviews</span>
                    </div>
                  </div>

                  <figcaption>
                    <div className="place">
                      <i class="fa-solid fa-hotel"></i> Bangolore, India
                    </div>
                    <h5>A Luxary Collection Hotel, Bangolore</h5>
                    <div className="rating">
                      <div className="icon"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                      </div>
                      <h5>Le 59,99 <span>Per Night</span></h5>
                    </div>

                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className="viewMore">
            <a href="">View More Hotel</a>
          </div>
        </div>

      </div>


      <div className="container cont7 mb-4">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Get the best prices from top hotel providers</h2>
        <div className="row">

          <div className="col-6 col-md-4 col-sm-6 col-lg-2" data-aos="zoom-in-up">
            <div className="boxLogo">
              <img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_hc.986803f4.svg" alt="" />

            </div>
          </div>
          <div className="col-6 col-md-4 col-sm-6 col-lg-2" data-aos="zoom-in-up">
            <div className="boxLogo">
              <img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/d_ct.40903310.svg" alt="" />
            </div>
          </div>
          <div className=" col-6 col-md-4 col-sm-6 col-lg-2" data-aos="zoom-in-up">
            <div className="boxLogo">
              <img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_oi.0835cda8.svg" alt="" />
            </div>
          </div>
          <div className=" col-6 col-md-4 col-sm-6 col-lg-2" data-aos="zoom-in-up">
            <div className="boxLogo">
              <img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_xp.f4aeb353.svg" alt="" />

            </div>
          </div>
          <div className=" col-6 col-md-4 col-sm-6 col-lg-2" data-aos="zoom-in-up">
            <div className="boxLogo">
              <img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_ad.279c66d3.svg" alt="" />

            </div>
          </div>
          <div className=" col-6 col-md-4 col-sm-6 col-lg-2" data-aos="zoom-in-up">
            <div className="boxLogo">
              <img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_bc.304b1c65.svg" alt="" />
            </div>
          </div>

        </div>
      </div>

      <div className="container cont8">
        <div className="row">

          <div className="col-sm-4 col-md-4 col-lg-4" data-aos="fade-up">
            <div className="innercont8">
              <img src="Images2/logo2.svg" alt="" />   </div>
            <div className="innerbox5">
              <h2>Get Exclusive Rates</h2>
              <p>We’ve special deals with the world's leading hotels – and we share these savings with you.</p>
            </div>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4" data-aos="fade-up">
            <div className="innercont8">
              <img src="Images2/logo1.svg" alt="" />   </div>
            <div className="innerbox5">
              <h2>See It All</h2>
              <p>From local hotels to global brands, discover millions of rooms all around the world.</p>
            </div>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4" data-aos="fade-up">
            <div className="innercont8">
              <img src="Images2/logo3.svg" alt="" />   </div>
            <div className="innerbox5">
              <h2>Compare Right Here</h2>
              <p>No need to search anywhere else. The biggest names in travel are right here.</p>
            </div>
          </div>

        </div>




      </div>

      <div className="cont9 mt-4 ">
        <div className="container ">
          <h2 className='hotelh2'>Need Inspiration?</h2>
          <p>View our hand-picked hotel destinations</p>
          <div className="row mt-5">

            <div className="col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
              <figure>
                <div className="image3">
                  <img className='img-fluid' src="Images/bang.jpg" alt="" /></div>
                <figcaption>
                  <h2>Bangkok</h2>
                  <h5>Bangkok</h5>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
              <figure>
                <div className="image3">
                  <img className='img-fluid' src="Images/Bangalore.jpg" alt="" /></div>
                <figcaption>
                  <h2>Bangalore</h2>
                  <h5>India</h5>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
              <figure>
                <div className="image3">
                  <img className='img-fluid' src="Images/delhi.jpg" alt="" /></div>
                <figcaption>
                  <h2>Delhi</h2>
                  <h5>India</h5>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
              <figure>
                <div className="image3">
                  <img className='img-fluid' src="Images/london.jpeg" alt="" /></div>
                <figcaption>
                  <h2>London</h2>
                  <h5>UK</h5>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
              <figure>
                <div className="image3">
                  <img className='img-fluid' src="Images/singapore.jpg" alt="" /></div>
                <figcaption>
                  <h2>Singapore</h2>
                  <h5>Singapore</h5>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
              <figure>
                <div className="image3">
                  <img className='img-fluid' src="Images/Mumbai.jpg" alt="" /></div>
                <figcaption>
                  <h2>Mumbai</h2>
                  <h5>India</h5>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
              <figure>
                <div className="image3">
                  <img className='img-fluid' src="Images/Hyderabad.jpg" alt="" /></div>
                <figcaption>
                  <h2>Hyderabad</h2>
                  <h5>India</h5>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
              <figure>
                <div className="image3">
                  <img className='img-fluid' src="Images/dubai.jpg" alt="" /></div>
                <figcaption>
                  <h2>Dubai</h2>
                  <h5>UAE</h5>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4" data-aos="fade-up">
              <figure>
                <div className="image3">
                  <img className='img-fluid' src="Images/IndiraGandhi.jpg" alt="" /></div>
                <figcaption>
                  <h2>Indira Gandhi</h2>
                  <h5>India</h5>
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </div>


      <div data-aos="fade-up" >
        <Footer />
      </div>

    </div >
  )
}

export default Hotel
