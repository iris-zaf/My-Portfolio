import ImageOne from "../components/ImageOne";
import ImageTwo from "../components/ImageTwo";
import TextBox from "../components/TextBox";
import mongodb from "../images/mongodb.png";
import Athens from "../images/WeatherApp.png";
import Donation from "../images/DonationApp.png";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "../homepage/Homepage.css";
import Fade from "react-reveal/Fade";

import Contact from "../components/contact/Contact";
function Home() {
  return (
    <div style={{ backgroundColor: " #ecd4d4" }}>
      <ImageOne />

      <TextBox />
      <ImageTwo />

      {/* <ImageThree /> */}

      <MDBRow className="row-cols-1 row-cols-md-3 m-5" id="content">
        {" "}
        <Fade top distance="20%">
          <MDBCol className="smallCardContainer">
            <MDBCard className="h-100 smallCard">
              <MDBCardImage src={Athens} alt="weather-app" position="top" />
              <MDBCardBody>
                <MDBCardTitle>Weather App</MDBCardTitle>
                <MDBCardText>
                  This is a weather app that shows the weather of the city you
                  search for ,collecting data from the OpenWeatherMap API. While
                  searching for a place the background image changes based on
                  the location searched with the help of the unsplash API.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Technologies used:</small>
                <br />
                <large className="text-muted ">
                  <i class="fa-brands fa-html5 fa-xl p-2"></i>
                </large>
                <large className="text-muted ">
                  <i class="fa-brands fa-css3-alt fa-xl p-2"></i>
                </large>
                <large className="text-muted ">
                  <i class="fa-brands fa-js fa-xl p-2"></i>
                </large>
                <br></br>
                <a href="#" target="_blank" rel="noreferrer">
                  Visit the Project
                </a>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol className="smallCardContainer">
            <MDBCard className="h-100 smallCard">
              <MDBCardImage
                src={Donation}
                alt="donation"
                position="top"
                style={{ height: "30vh" }}
              />
              <MDBCardBody>
                <MDBCardTitle>BeeKind Donation App</MDBCardTitle>
                <MDBCardText>
                  This is a donation app that allows users to donate to various
                  charities. All data is collected from the Every.orf Charity
                  API. With the use of the Stripe API the user is able to enter
                  their credit card details and proceed with the payment. There
                  is an option to subscribe to the newsletter with a valid gmail
                  address and get a notification verifying the subscription
                  process.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Technologies used:</small>
                <br />
                <large className="text-muted ">
                  <i class="fa-brands fa-react fa-xl p-2"></i>
                </large>
                <large className="text-muted ">
                  <i class="fa-brands fa-node fa-xl p-2"></i>
                </large>
                <large className="text-muted imageContainer">
                  <img src={mongodb} alt="mongodb" style={{ width: "25px" }} />
                </large>
                <br></br>
                <a
                  href="https://beekind.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the Project
                </a>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol className="smallCardContainer">
            <MDBCard className="h-100 smallCard">
              <MDBCardImage
                src={Donation}
                alt="donation"
                position="top"
                style={{ height: "30vh" }}
              />
              <MDBCardBody>
                <MDBCardTitle>BeeKind Donation App</MDBCardTitle>
                <MDBCardText>
                  This is a donation app that allows users to donate to various
                  charities. All data is collected from the Every.orf Charity
                  API. With the use of the Stripe API the user is able to enter
                  their credit card details and proceed with the payment. There
                  is an option to subscribe to the newsletter with a valid gmail
                  address and get a notification verifying the subscription
                  process.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Technologies used:</small>
                <br />
                <large className="text-muted ">
                  <i class="fa-brands fa-react fa-xl p-2"></i>
                </large>
                <large className="text-muted ">
                  <i class="fa-brands fa-node fa-xl p-2"></i>
                </large>
                <large className="text-muted imageContainer">
                  <img src={mongodb} alt="mongodb" style={{ width: "25px" }} />
                </large>
                <br></br>
                <a
                  href="https://beekind.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the Project
                </a>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol className="smallCardContainer">
            <MDBCard className="h-100 smallCard">
              <MDBCardImage
                src={Donation}
                alt="donation"
                position="top"
                style={{ height: "30vh" }}
              />
              <MDBCardBody>
                <MDBCardTitle>BeeKind Donation App</MDBCardTitle>
                <MDBCardText>
                  This is a donation app that allows users to donate to various
                  charities. All data is collected from the Every.orf Charity
                  API. With the use of the Stripe API the user is able to enter
                  their credit card details and proceed with the payment. There
                  is an option to subscribe to the newsletter with a valid gmail
                  address and get a notification verifying the subscription
                  process.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Technologies used:</small>
                <br />
                <large className="text-muted ">
                  <i class="fa-brands fa-react fa-xl p-2"></i>
                </large>
                <large className="text-muted ">
                  <i class="fa-brands fa-node fa-xl p-2"></i>
                </large>
                <large className="text-muted imageContainer">
                  <img src={mongodb} alt="mongodb" style={{ width: "25px" }} />
                </large>
                <br></br>
                <a
                  href="https://beekind.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the Project
                </a>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol className="smallCardContainer">
            <MDBCard className="h-100 smallCard">
              <MDBCardImage
                src={Donation}
                alt="donation"
                position="top"
                style={{ height: "30vh" }}
              />
              <MDBCardBody>
                <MDBCardTitle>BeeKind Donation App</MDBCardTitle>
                <MDBCardText>
                  This is a donation app that allows users to donate to various
                  charities. All data is collected from the Every.orf Charity
                  API. With the use of the Stripe API the user is able to enter
                  their credit card details and proceed with the payment. There
                  is an option to subscribe to the newsletter with a valid gmail
                  address and get a notification verifying the subscription
                  process.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Technologies used:</small>
                <br />
                <large className="text-muted ">
                  <i class="fa-brands fa-react fa-xl p-2"></i>
                </large>
                <large className="text-muted ">
                  <i class="fa-brands fa-node fa-xl p-2"></i>
                </large>
                <large className="text-muted imageContainer">
                  <img src={mongodb} alt="mongodb" style={{ width: "25px" }} />
                </large>
                <br></br>
                <a
                  href="https://beekind.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the Project
                </a>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </Fade>
      </MDBRow>

      <Contact />
    </div>
  );
}

export default Home;
