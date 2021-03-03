import "./Nav.css"

function Nav() {
    return (
        <div className="navbar navbar-expand-lg bg-rgb(8,43,73)  navbar-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="muNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="myNavbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="navbar-nav  mr-auto ml-5">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#care">Care</a></li>
                                <li><a href="#service">Services</a></li>
                                <li><a href="#page">Pages</a></li>
                                <li><a href=" #blog">Blog</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;