import "./Nav.css"

function Nav() {
    return (
        <div className="nav" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="ml-5">
                            <li><a href="home">Home</a></li>
                            <li><a href="#section">About</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#care">Care</a></li>

                            <li><a href="#page">Pages</a></li>


                            {/* <li><a href="">Blog</a></li> */}
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;