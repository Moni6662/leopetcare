import "./ContectUs.css";

function ContectUs() {
    return (
        <footer>
            <div className="container" id="contact">
                <div className="row">
                    <div className="col-md-12 text-center mb-5 mt-5">
                        <h3>Heading heare</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, deserunt?</p>
                        <form action="">
                            <input type="email" name="email" id="email" placeholder="Enter Your Email" />
                            <button className="bg-danger" htmlFor="email">Email</button>
                        </form>

                    </div>
                </div>


                <div className="row ">
                    <div className="col-md-3">
                        <h4>Meny</h4>
                        <ul >
                            <li><a href="#">home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3" >
                        <h4 >contact</h4>
                        <ul>
                            <li>1234567890</li>
                            <li>abc@gmail.com</li>
                        </ul>
                    </div>


                    <div className="col-md-3">
                        <h4> Address</h4>
                        <ul>
                            <li>1255,abc.def,bbs,hbbs</li>
                            <li>bhs hdsdn</li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                            <h4 >Opening Hours</h4>
                            <ul>
                                <li>Mon-Fri(9.00-6.00)</li>
                                <li>sat-Sun(closed)</li>
                            </ul>
                        </div>
                    </div>

                </div>
        </footer>
    );
}
export default ContectUs;


