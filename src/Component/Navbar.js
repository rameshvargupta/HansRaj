// import { Link } from 'react-router-dom';

// const Navbar = () => {


//     function showdata() {

//         document.getElementById("ShowNav").style.display = "block";
//         document.getElementById("borderd3").style.border = "2px solid white";
//         document.getElementById("borderd1").style.border = "none";
//         document.getElementById("borderd2").style.border = "none";

//     };
//     function hidedata() {
//         document.getElementById("ShowNav").style.display = "none";

//     };

//     function ShowLoginpage() {
//         document.getElementById("ShowLoginPage").style.display = "block";
//         document.getElementById("borderd2").style.border = "2px solid white";
//         document.getElementById("borderd1").style.border = "none";
//         document.getElementById("borderd3").style.border = "none";
//     };
//     function Hideloginpage() {
//         document.getElementById("ShowLoginPage").style.display = "none";

//     };
//     function showurl() {
//         document.getElementById("ShowUrl").style.display = "block";
//         document.getElementById("borderd1").style.border = "2px solid white";
//         document.getElementById("borderd2").style.border = "none";
//         document.getElementById("borderd3").style.border = "none";
//     };
//     function HideUrl() {
//         document.getElementById("ShowUrl").style.display = "none";
//     };



//     return (
//         <div>
//             <div className="Navbar">
//                 <div className="container NavStart">

//                     <Link to={"/Home"}>  <div className="logo">
//                         <i class="fa-solid fa-house-tsunami"></i> <span>HansRaj</span>
//                         <img width={"100px"} src="Images/3.png" alt="" />
//                     </div>
//                     </Link>
//                     <div className="login">
//                         <div className="user" id='borderd1' onClick={showurl}>
//                             <i class="fa-solid fa-earth-asia"></i>
//                         </div>
//                         <div className="user" id='borderd2' onClick={ShowLoginpage}>
//                             <i class="fa-solid fa-user"></i><span>Log in</span>
//                         </div>

//                         <div className="user" id='borderd3' onClick={showdata}>
//                             <i class="fa-solid fa-bars"></i>
//                         </div>
//                     </div>

//                     <div className="urlPage" id='ShowUrl'>
//                         <div className="box10">
//                             <h3>Regional Settings  <button className='btn btn-danger' onClick={HideUrl}>X</button></h3>
//                             <div className="row">
//                                 <div className="col-12">
//                                     <div className="box9">
//                                         <label htmlFor="lang">Language</label> <br />
//                                         <select name="" id="">
//                                             <option value="">Select Language</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="col-12">
//                                     <div className="box9">
//                                         <label htmlFor="country">Country / Region</label> <br />
//                                         <select name="" id="country">
//                                             <option value="">Select Country</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="col-12">
//                                     <div className="box9">
//                                         <label htmlFor="currency">Currency</label> <br />
//                                         <select name="" id="currency">
//                                             <option value="">Select Currency</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="loginPage" id='ShowLoginPage'>
//                         <div className="box7">
//                             <div className="logo">
//                                 <div className="innerLogo">
//                                     <i class="fa-solid fa-house-tsunami"></i> <span>HansRaj</span>
//                                     <img width={"100px"} src="Images/3.png" alt="" />
//                                 </div>
//                             </div>
//                             <button className='btn btn-danger' onClick={Hideloginpage}>X</button>
//                         </div>
//                         <h2>Get The Full Exprience </h2>
//                         <p>Track prices, make trip planning easier and enjoy faster booking.</p>
//                         <div className="row">
//                             <div className="col-12">
//                                 <div className="box8">
//                                     <a href=""><i class="fa-solid fa-apple-whole"></i>Continue with Apple </a>
//                                 </div>
//                             </div>
//                             <div className="col-12">
//                                 <div className="box8">
//                                     <a href=""><i class="fa-brands fa-facebook"></i>Facebook </a>
//                                 </div>
//                             </div>
//                             <div className="col-12">
//                                 <div className="box8">
//                                     <a href=""><i class="fa-brands fa-google"></i>Google </a>
//                                 </div>
//                             </div>
//                             <div className="col-12">
//                                 <div className="box8">
//                                     <a href=""><i class="fa-regular fa-envelope"></i>Email </a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="SelectInp">
//                             <div className="input2">
//                                 <input id='select2' type="checkbox" /> <label htmlFor='select2'> Remember me</label>
//                             </div>
//                         </div>

//                         <p>By continuing you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>



//                     </div>

//                     <div className="Nav" id='ShowNav'>
//                         <div className="mainnav">
//                             <ul>
//                                 <button onClick={hidedata} className='btn btn-danger'>X</button>
//                                 <li><Link to={"/Flight"}><i className='fa-solid fa-plane'></i> Flights</Link></li>
//                                 <li><Link to={"/Hotel"}><i className='fa-solid fa-hotel'></i> Hotels</Link></li>
//                                 <li><Link to={"/CarHire"}><i className='fa-solid fa-car'></i> Car hire</Link></li>
//                                 <hr />
//                                 <span>
//                                     <li><a href=""><i class="fa-brands fa-wpexplorer"></i>Explore Everywhere </a></li>
//                                     <li><a href=""><i class="fa-solid fa-question"></i>Help </a></li>
//                                 </span>
//                             </ul>
//                         </div>
//                     </div>




//                 </div>


//                 <div className="container cont-1">

//                     <h1 className='mt-4 mb-4'>Millions of cheap flights. One simple search.</h1>
//                     <div className="search">

//                         <div className="mainInput">

//                             <div className="input1">
//                                 <label for="from" >From </label><br />
//                                 <input type="text" id="from" placeholder="Country,city or airtport" />
//                             </div>
//                             <div className="input1">
//                                 <label for="to" >To </label><br />
//                                 <input type="text" id="to" placeholder="Country,city or airtport" />
//                             </div>
//                         </div>

//                         <div className="mainInput">

//                             <div className="input1">
//                                 <label for="depart" >Departure </label><br />
//                                 <input type="date" id="depart" />
//                             </div>

//                             <div className="input1">
//                                 <label for="depart" >Travellers and cabin class </label><br />
//                                 <div>1 Adult, Economy</div>
//                             </div>
//                         </div>


//                         <div className="input2">
//                             <button className='btn btn-primary'>Search</button>
//                         </div>

//                     </div>
//                     <div className="SelectInp pb-5">
//                         <div className="input2">
//                             <input id='select' type="checkbox" /> <label htmlFor='select'> Direct flights</label>
//                         </div>
//                     </div>

//                 </div>

//             </div>

           
//         </div >
//     )
// }

// export default Navbar
