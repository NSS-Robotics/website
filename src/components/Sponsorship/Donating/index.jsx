import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function DonatingSlider() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="step">
            <img
              src="/images/donating/1.webp"
              alt="The NSSF donations homepage"
            />
            <div class="wooshgroup">
              <h2>Step 1</h2>
              <p>
                We process all of our donations through the Northern Secondary
                School Foundation (NSSF) website.&nbsp;
                <strong>
                  Donations of $20 or more are eligible to receive a charitable
                  tax receipt.&nbsp;
                </strong>
                Click the button below to open the NSSF donation webpage in a
                new tab.
              </p>
              <a
                class="except"
                href="https://nssf.ca/support-us/"
                target="_blank"
              >
                NSSF Website
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="step">
            <img src="/images/donating/2.webp" alt="The NSSF donation form" />
            <div class="wooshgroup">
              <h2>Step 2</h2>
              <p>
                Scroll down the page until you come to the section which looks
                like this. On the right side of the screen is the form which is
                used to make either the one time or monthly donation.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="step">
            <img
              src="/images/donating/3.webp"
              style={{ zoom: '50%' }}
              alt="Zoomed image of the NSSF donation form"
            />
            <div className="wooshgroup">
              <h2>Step 3</h2>
              <p style={{ 'text-align': 'left' }}>
                [1] Choose whether you would like your donation to be monthly or
                one time.
                <br />
                [2] Enter the amount you would donate; either by picking from a
                preset amount or by entering a custom amount.
                <br />
                [3] This is who the donation will go to. Please make sure this
                is set to "NSS Robotics Team".
                <br />
                [4] Send a message to us along with your donation (Optional).
                <br />
                [5] Dedicate your donation to someone (Optional).
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="step">
            <img
              src="/images/donating/4.webp"
              style={{ zoom: '50%' }}
              alt="The second part of the NSSF donation form"
            />
            <div className="wooshgroup">
              <h2>Step 4</h2>
              <p>
                Enter all the information needed by the form including: Email,
                First and Last Names and Address.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="step">
            <img
              src="/images/donating/5.webp"
              style={{
                height: 'fit-content',
                'align-self': 'center',
              }}
              alt="The 3 payment options of the NSSF donation form"
            />
            <div className="wooshgroup">
              <h2>Step 5</h2>
              <p>
                There are three different options when it comes to how you can
                pay. You can choose from either a [1] credit card, [2] PayPal,
                or a [3] CanadaHelps Gift Card. You can pick the option you want
                to use by selecting one of the dots at the top of the form.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
