import React, {Component} from 'react';
import './style/login.css';

class Login extends Component {


    render() {
        return (
            <body>
                <main>
                    <header>
                        <nav>
                            <h1>Race_My_Way</h1>
                        </nav>
                    </header>
                    <section>
                        <div class="login">
                            <form>
                                <input type="text" name="surname" placeholder="Surname" id="surname" />
                                <input type="password" name="password" placeholder="Password" id="password" />
                                <button id="submit">Submit</button>
                            </form>
                        </div>
                        <p>Forget Password?! Click <a href="signup.html" style={{ color: 'rgb(86, 118, 145)' }}>Here</a></p>
                    </section>
                </main>
            </body>

        );
    }
}
export default Login;