import Button from "../Button/Button";
import carpet from "../../assets/carpet.png";
import bed from "../../assets/bed.png";
import glass from "../../assets/glass.png";
import Sideglass from "../../assets/Sideglass.png";
import stair from "../../assets/stair.png";
import lint from "../../assets/lint.png";
import "./middle.css";
import Landing from "../Landingpage/Landing";

function middle() {
  return (
    <>
    <Landing/><br></br>
      <div>
        <p className="ee">Our Services</p>
        <p className="para">
          collection of cleaning services offered by a company. It includes
          visuals of various tasks such as vacuuming, mattress cleaning, wiping
          glass surfaces,<br></br>
         and sanitizing handrails. The layout is organized in a neat grid
          format with each service represented by a photo and a caption below
          it. While the<br></br>
          captions are mostly the same, the images themselves suggest a wider
          range of cleaning services beyond what's labeled.
        </p>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img className="imgage" src={carpet} alt="cleaning" />
              <div class="card-body">
                <h5 class="card-title">Carpet Cleaning</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img className="imgage" src={bed} alt="cleaning" />
              <div class="card-body">
                <h5 class="card-title">Bed Cleaning</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img className="imgage" src={glass} alt="cleaning" />
              <div class="card-body">
                <h5 class="card-title">Carpet Cleaning</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img className="imgage" src={Sideglass} alt="cleaning" />
              <div class="card-body">
                <h5 class="card-title">Glass Cleaning</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img className="imgage" src={stair} alt="cleaning" />
              <div class="card-body">
                <h5 class="card-title">Stair Cleaning</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img className="imgage" src={lint} alt="cleaning" />
              <div class="card-body">
                <h5 class="card-title">Lint Cleaning</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bt">
        <Button variant="book">View All</Button>
        </div>
      </div>
    </>
  );
}

export default middle;
