import React from "react";
import "./Contact.css";
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'


const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We are always ready to provide the best services to you.
            <br />
            We believe a good place to live can make your life better.
          </span>

            <div className="flexColStart contactChannels">

                <div className="flexColStart row">
                    <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span>Call</span>
                            <span>021 123 145 14</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


        </div>

        {/* right side */}
        <div className="c-right">
          <img src="./contact.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
