import React, { useEffect } from "react";
import "./footer.css";
// import video3 from "../../assets/video3.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import img10 from "../../assets/img10.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  // creating a react hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <img src={img10} alt="tajmahal" />
        {/* <video
          src={video3}
          controls
          loop
          autoPlay
          muted
          type="video/mp4"
        ></video> */}
      </div>

      <div className="secContent flex">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep In Touch</small>
            <h2>travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Your Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              Send <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" /> Travel
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              ratione rem similique veritatis nisi nobis. Et maiores vitae
              quidem quis id voluptatum dolorem ea, totam atque omnis
              exercitationem suscipit rem?
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiFillTwitterCircle className="icon" />
              <BsYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">Our Agency</span>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> Services
              </li>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> Insurance
              </li>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> Agency
              </li>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> Tourism
              </li>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> Payment
              </li>
            </div>
            {/* Group Two */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle"> Our Partners</span>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> Booking
              </li>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> RentCars
              </li>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> HotelWorld
              </li>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> Trivago
              </li>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> TripAdvisior
              </li>
            </div>
            {/* Group Three */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">Last Minute</span>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> India
              </li>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> America
              </li>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> Londan
              </li>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> USA
              </li>

              <li className="footerList flex">
                <BiRightArrowAlt className="icon" /> Rashia
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <p>BEST TRAVEL WEBSITE THEME</p>
            <p>COPYRIGHT RESERVED - ISRATECH 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
