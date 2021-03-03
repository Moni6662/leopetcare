import "./Adopt.css";

function Adopt() {
    return (
        <div className="adopt">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>heading</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corporis, dolore dolorum sint velit sed adipisci laborum esse animi aliquid fuga doloribus pariatur. Quas laudantium, excepturi consectetur soluta laborum quo?</p>
                        <div className="row">
                            <div className="col-md-6">
                                <i className="fa fa-eye"></i>
                                <h1>590+</h1>
                                <p>Lorem, ipsum.</p>
                            </div>
                            <div className="col-md-6">
                                <i className="fa fa-eye"></i>
                                <h1>590+</h1>
                                <p>Lorem, ipsum.</p>
                            </div>
                        </div>
                        <button className="btn btn-info mt-5">Brows Now </button>
                    </div>

                    <div className="col-md-6">
                       
                          <img className="ml-5" src="../img/download.jpg" alt="img" height="400px" width="500px" />
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Adopt;