import React, { Component } from 'react';


class Offerride extends Component {
    render() {
        return (
            <body>
                <header className="header">
                    <nav>
                        <h1 className="headertop">Ride_My_Way</h1>
                        <div className="list-space">
                            <button className="cl-1">
                                <a href="home.html" className="navig">Home</a>
                            </button>
                            <button className="cl-1" >
                                <a href="offer_ride.html" className="navig">Offer Ride</a>
                            </button>
                            <button className="cl-1">
                                <a href="index.html" className="navig">SignOut</a>
                            </button>
                        </div>
                    </nav>
                </header>

                <main>
                    <section className="findride">
                        <div className="ride">
                            <div className="searchride">
                                <button className="search" id="myBtn">Search Ride</button>
                                <div id="myModal" className="modal">


                                    <div className="modal-content">
                                        <span className="close">&times;</span>
                                        <div className="pop-up">
                                            <h2>Create Ride</h2>
                                            <form action="" style={{display: 'flex', flexDirection: 'column'}} className= {{}}>
                                                <input type="text" name="location" id="inpute" placeholder="Your Location" />
                                                <input type="number" name="phone" id="inpute" placeholder="Phone Number" />
                                                <input type="text" name="Destination" id="inpute" placeholder="Destination" />
                                                <input type="password" name="password" id="inpute" placeholder="Road to pass" />
                                                <input type="submit" name="" id="submit" />
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="availableride">
                                <div className="offerdisplay">
                                    <div className="offerlist" style={{marginBottom: '0',borderRadius: '0', borderBottom: '2 solid blue'}}>
                                        <div className="name">Starting</div>
                                        <div className="phoneno">Destination</div>
                                        <div className="destin">Cost</div>
                                    </div>

                                    <div className="offerlist">
                                        <div className="name">Makumbusho</div>
                                        <div className="phoneno">Kimara</div>
                                        <div className="destin">Tsh.2000/=</div>
                                        <div className="acceptbtn">
                                            <button className="accept">details</button>

                                        </div>
                                    </div>

                                    <div className="offerlist">
                                        <div className="name">Makumbusho</div>
                                        <div className="phoneno">Kimara</div>
                                        <div className="destin">Tsh.2000/=</div>
                                        <div className="acceptbtn">
                                            <button className="accept">details</button>

                                        </div>
                                    </div>

                                    <div className="offerlist">
                                        <div className="name">Makumbusho</div>
                                        <div className="phoneno">Kimara</div>
                                        <div className="destin">Tsh.2000/=</div>
                                        <div className="acceptbtn">
                                            <button className="accept">details</button>

                                        </div>
                                    </div>

                                    <div className="offerlist">
                                        <div className="name">Makumbusho</div>
                                        <div className="phoneno">Kimara</div>
                                        <div className="destin">Tsh.2000/=</div>
                                        <div className="acceptbtn">
                                            <button className="accept">details</button>

                                        </div>
                                    </div>

                                    <div className="offerlist">
                                        <div className="name">Makumbusho</div>
                                        <div className="phoneno">Kimara</div>
                                        <div className="destin">Tsh.2000/=</div>
                                        <div className="acceptbtn">
                                            <button className="accept">details</button>

                                        </div>
                                    </div>

                                    <div className="offerlist">
                                        <div className="name">Makumbusho</div>
                                        <div className="phoneno">Kimara</div>
                                        <div className="destin">Tsh.2000/=</div>
                                        <div className="acceptbtn">
                                            <button className="accept">details</button>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        );
    }
}

export default Offerride;