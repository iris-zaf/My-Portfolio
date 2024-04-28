import ImageOne from "../components/ImageOne";
import ImageTwo from "../components/ImageTwo";
import TextBox from "../components/TextBox";
import mongodb from "../images/mongodb.png";
// import Athens from "../images/WeatherApp.png";
// import Donation from "../images/DonationApp.png";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "../homepage/Homepage.css";
import Contact from "../components/contact/Contact";
import { motion } from "framer-motion";
function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: " #ecd4d4",
          position: "relative",

          overflow: "hidden",
        }}
      >
        {" "}
        <ImageOne />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <TextBox />
        </motion.div>
        <ImageTwo />
        {/* <ImageThree /> */}
        <MDBRow
          className="row-cols-1 row-cols-md-4
       m-5"
          id="content"
        >
          {" "}
          <MDBCol className="smallCardContainer">
            {" "}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
            >
              <MDBCard className="h-100 smallCard">
                {/* <MDBCardImage src={Athens} alt="weather-app" position="top" /> */}
                <MDBCardBody>
                  <MDBCardTitle>
                    {" "}
                    <a
                      href="https://weather-app-iris.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Weather App{" "}
                    </a>
                  </MDBCardTitle>
                  <MDBCardText>
                    Weather App allows the user to get informed of the
                    temperature, humidity and wind speed of the city they
                    search. It utalizes the OpenWeatherMap and Unsplash APIs.
                    Providing a better experience,the background changes
                    depending on the city.
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
                </MDBCardFooter>
              </MDBCard>
            </motion.div>
          </MDBCol>
          <MDBCol className="smallCardContainer">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
            >
              <MDBCard className="h-100 smallCard">
                <MDBCardBody>
                  <MDBCardTitle>
                    {" "}
                    <a
                      href="https://beekind.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      BeeKind
                    </a>
                  </MDBCardTitle>
                  <MDBCardText>
                    BeeKind allows users to donate easily to various charities
                    across the US and UK. Every.org Charity API is being used
                    for all charity data to be fetched. Powered by the Stripe
                    API,each user is able to enter their debit/credit card
                    details in order to donate to their selected charity. Email
                    subscription is offered as an option.
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
                    <img
                      src={mongodb}
                      alt="mongodb"
                      style={{ width: "25px" }}
                    />
                  </large>
                </MDBCardFooter>
              </MDBCard>
            </motion.div>
          </MDBCol>
        </MDBRow>{" "}
        <hr class="separator" />
        <hr class="separator separator--line" />
        <Contact />
      </div>{" "}
    </>
  );
}

export default Home;
