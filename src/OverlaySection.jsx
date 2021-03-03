import "./OverlaySection.css";
import img from "module";

function OverlaySection() {
    return (
        <div className="overlaySection" id="page">
            <div className="container-fliud">
                <div className="row">
                   <div className="col-md-12">
                   
                    <div class="card ">
                    <img src="../img/dog.jpg" alt="" width="1347px" height="400px" />
                        <div class="card-img-overlay">
                            <div className="card-body">
                                <img className="img mb-3" src="../img/cardimg.jpg" alt=""/>
                                <h3 class="card-title">Card Title</h3>
                                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, est!
                                Libero recusandae neque debitis eos vitae laboriosam corporis nulla reiciendis!</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OverlaySection;

