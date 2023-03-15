import React, { useEffect } from "react";
import "./Main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img from "../../assets/img.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The optiome of romance,Bora Bora is the one of the best travel destination in the world. This place known for its luxuries stays and adventurious ectivities",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Pichu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Huaya Picchu is a mountain peru,rising over machu picchu,the so-called lost city of Incas. This place is popular among tourists as the sunrise from the sun gate is simply spectacular",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Greate Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The optiome of romance,Bora Bora is the one of the best travel destination in the world. This place known for its luxuries stays and adventurious ectivities",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "The optiome of romance,Bora Bora is the one of the best travel destination in the world. This place known for its luxuries stays and adventurious ectivities",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Maxico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "The optiome of romance,Bora Bora is the one of the best travel destination in the world. This place known for its luxuries stays and adventurious ectivities",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Itely",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "The optiome of romance,Bora Bora is the one of the best travel destination in the world. This place known for its luxuries stays and adventurious ectivities",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambdia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "The optiome of romance,Bora Bora is the one of the best travel destination in the world. This place known for its luxuries stays and adventurious ectivities",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "The optiome of romance,Bora Bora is the one of the best travel destination in the world. This place known for its luxuries stays and adventurious ectivities",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "The optiome of romance,Bora Bora is the one of the best travel destination in the world. This place known for its luxuries stays and adventurious ectivities",
  },
];

const Main = () => {
  // creating a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent flex">
        {data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <dev className="desc">
                    <p>{description}</p>
                  </dev>
                  <button className="btn flex">
                    Details <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
