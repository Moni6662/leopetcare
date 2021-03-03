import "./Section.css";

function Section() {
    return (
        <div className="section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p className="lead mt-5">Welcome to Leopet</p>
                        <h1 className="mt-5 text-danger">Give Your Pet <br />Best Care</h1>
                        
                    </div>
                    <div className="col-md-8">
                    <img src="../img/im.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Section;