import React, {Component} from 'react';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import google from './images/google.png';



class Signup extends Component{
  
    render(){
        return(
 
<body>
    <header>
        <nav>
            <h1>SignUp</h1>
        </nav>
    </header>
    <main>
        <section>
            <form>
                <input type="text" name="firstname" id="inpute" placeholder="Yourname"/>
                <input type="text" name="surname" id="inpute" placeholder="Surname"/>
                <input type="number" name="phone" id="inpute" placeholder="Phone Number"/>
                <input type="text" name="email" id="inpute" placeholder="Email"/>
                <input type="number" name="credit card" id="inpute" placeholder="Credit Card Number"/>
                <input type="password" name="password" id="inpute" placeholder="Password"/>
                <input type="password" name="Comform password" id="inpute" placeholder="Confirm Password"/>
                <a href="Login.html"><button  name="" id="submit">Submit</button></a> 
            </form>
        </section>
        <div className="link"> 
            <h2 style={{fontFamily:'Courier New, Courier, monospace'}}>Sign Up with:</h2>
           <div className="horizontal">
                 <img src={google} id="google" className="socialnk" alt="" height="50px" width="50px" alt=''/>

                <img src={facebook} id="facebook" className="socialnk" height="50px" width="50px" alt= ''/>
        
                 <img src={twitter} id="twitter" className="socialnk" height="50px" width="50px" alt=''/>
             
           </div>

          <div>
              <h3 style={{fontFamily: 'Courier New', fontSize: '20'}}>Do You have an Account?!</h3>
              <button id="signin">Sign in</button>
          </div>
          
        </div>
       
       
    </main>
</body>

        );
    }
}

export default Signup;