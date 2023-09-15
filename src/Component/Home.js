import { Link, useNavigate } from 'react-router-dom';
import Center from './Center';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Navbar = () => {

  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);
  const navigate = useNavigate()
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  function FormSubmit() {
    let From = document.getElementById('from').value;
    let To = document.getElementById('to').value;
    if (From !== "" && To !== "") {
      alert("Welcome To My Website");
      navigate("/Flight");
    }
  }

  function showdata(e) {
    e.stopPropagation()
    document.getElementById("ShowNav").style.display = "block";
    document.getElementById("ShowLoginPage").style.display = "none";
    document.getElementById("ShowUrl").style.display = "none";
    document.getElementById("borderd3").style.border = "2px solid white";
    document.getElementById("borderd1").style.border = "none";
    document.getElementById("borderd2").style.border = "none";
    document.getElementById("pasengersDetails1").style.display = "none";


  };
  function hidedata() {
    document.getElementById("ShowNav").style.display = "none";

  };

  function ShowLoginpage(e) {
    e.stopPropagation()
    document.getElementById("ShowLoginPage").style.display = "block";
    document.getElementById("ShowNav").style.display = "none";
    document.getElementById("ShowUrl").style.display = "none";
    document.getElementById("borderd2").style.border = "2px solid white";
    document.getElementById("borderd1").style.border = "none";
    document.getElementById("borderd3").style.border = "none";
    document.getElementById("pasengersDetails1").style.display = "none";
  };
  function Hideloginpage() {
    document.getElementById("ShowLoginPage").style.display = "none";

  };
  function showurl(e) {
    e.stopPropagation()
    document.getElementById("ShowUrl").style.display = "block";
    document.getElementById("ShowLoginPage").style.display = "none";
    document.getElementById("ShowNav").style.display = "none";
    document.getElementById("borderd1").style.border = "2px solid white";
    document.getElementById("borderd2").style.border = "none";
    document.getElementById("borderd3").style.border = "none";
    document.getElementById("pasengersDetails1").style.display = "none";
  };
  function HideUrl() {
    document.getElementById("ShowUrl").style.display = "none";
  };

  function hadelFillData(e) {
    e.stopPropagation()
    document.getElementById("ShowLoginPage").style.display = "none";
    document.getElementById("ShowNav").style.display = "none";
    document.getElementById("ShowUrl").style.display = "none";
    document.getElementById("pasengersDetails1").style.display = "block";
  }
  function removeDetails() {
    document.getElementById("pasengersDetails1").style.display = "none";
  }

  function HideOpennav(e) {
    e.stopPropagation()
    document.getElementById("ShowLoginPage").style.display = "none";
    document.getElementById("ShowNav").style.display = "none";
    document.getElementById("ShowUrl").style.display = "none";
  }

  return (
    <div onClick={HideOpennav}>

      <div className="Navbar">

        <div className="container NavStart">

          <Link to={"/"}>  <div className="logo">
            <i class="fa-solid fa-house-tsunami"></i> <span>HansRaj</span>
            <img width={"100px"} src="Images/3.png" alt="" />
          </div>
          </Link>
          <div className="login">
            <div className="user" id='borderd1' onClick={showurl}>
              <i class="fa-solid fa-earth-asia"></i>
            </div>
            <div className="user" id='borderd2' onClick={ShowLoginpage}>
              <i class="fa-solid fa-user"></i><span className='HideNav'>Log in</span>
            </div>

            <div className="user" id='borderd3' onClick={showdata}>
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>

          <div className="urlPage" id='ShowUrl' >
            <div className="box10">
              <h3>Regional Settings  <button className='btn btn-danger' onClick={HideUrl}>X</button></h3>
              <div className="row">
                <div className="col-12">
                  <div className="box9">
                    <label htmlFor="lang">Language</label> <br />
                    <select name="" id="">
                      <option value="">Select Language</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="box9">
                    <label htmlFor="country">Country / Region</label> <br />
                    <select name="" id="country">
                      <option value="">Select Country</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="box9">
                    <label htmlFor="currency">Currency</label> <br />
                    <select name="" id="currency">
                      <option value="">Select Currency</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="loginPage" id='ShowLoginPage'>
            <div className="box7">
              <div className="logo">
                <div className="innerLogo">
                  <i class="fa-solid fa-house-tsunami"></i> <span>HansRaj</span>
                  <img width={"100px"} src="Images/3.png" alt="" />
                </div>
              </div>
              <button className='btn btn-danger' onClick={Hideloginpage}>X</button>
            </div>
            <h2>Get The Full Exprience </h2>
            <p>Track prices, make trip planning easier and enjoy faster booking.</p>
            <div className="row">
              <div className="col-12">
                <div className="box8">
                  <a href=""><i class="fa-solid fa-apple-whole"></i>Continue with Apple </a>
                </div>
              </div>
              <div className="col-12">
                <div className="box8">
                  <a href=""><i class="fa-brands fa-facebook"></i>Facebook </a>
                </div>
              </div>
              <div className="col-12">
                <div className="box8">
                  <a href=""><i class="fa-brands fa-google"></i>Google </a>
                </div>
              </div>
              <div className="col-12">
                <div className="box8">
                  <a href=""><i class="fa-regular fa-envelope"></i>Email </a>
                </div>
              </div>
            </div>

            <div className="SelectInp">
              <div className="input2">
                <input id='select2' type="checkbox" /> <label htmlFor='select2'> Remember me</label>
              </div>
            </div>

            <p>By continuing you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>



          </div>

          <div className="Nav" id='ShowNav'>
            <div className="mainnav">
              <ul>
                <button onClick={hidedata} className='btn btn-danger'>X</button>
                <Link to={"/Flight"}><li><i className='fa-solid fa-plane'></i> Flights </li></Link>
                <Link to={"/Hotel"}> <li><i className='fa-solid fa-hotel'></i> Hotels </li></Link>
                <Link to={"/CarHire"}> <li><i className='fa-solid fa-car'></i> Car hire </li></Link>
                <hr />
                <span>
                  <li><a href=""><i class="fa-brands fa-wpexplorer"></i>Explore Everywhere </a></li>
                  <li><a href=""><i class="fa-solid fa-question"></i>Help </a></li>
                </span>
              </ul>
            </div>
          </div>




        </div>

        <div className="container cont-1">

          <h1 data-aos="fade-up" className='mt-4 mb-4'>Millions of cheap flights. One simple search.</h1>
          <form action="">
            <div className="search">
              <div className="mainInput" data-aos="fade-right">

                <div className="input1">
                  <label for="from" >From </label><br />
                  <input type="text" required id="from" placeholder="Country,city or airtport" />
                </div>
                <div className="input1">
                  <label for="to" >To </label><br />
                  <input type="text" required id="to" placeholder="Country,city or airtport" />
                </div>
              </div>


              <div className="mainInput" data-aos="fade-left">
                <div className="input1 details2">
                  <label for="depart" required >Departure </label><br />
                  <input type="date" id="depart" />
                </div>


                <div id='pasengerdata'>
                  <div className="input1 updatedata1" onClick={hadelFillData}>
                    <label for="pasenger" >Travellers and cabin class </label><br />
                    <div>{count} Adult, {count1} Children <i class="fa-solid fa-caret-down"></i></div>
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

              <div className="input2">
                <button onClick={FormSubmit} className='btn btn-primary'>Search</button>
              </div>

            </div>

          </form>

          <div className="SelectInp mt-2 pb-5">
            <div className="input2">
              <input id='select' type="checkbox" /> <label htmlFor='select'> Direct flights</label>
            </div>
          </div>

        </div>

      </div>

      <Center />
    </div >
  )
}

export default Navbar
