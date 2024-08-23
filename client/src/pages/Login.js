
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './../index.css';



import loginImage from './../Assets/Icons/medical-5459654_1280 1.png'; // Adjust the path as necessary
import logoImage from './../Assets/Logo-MedicAid.png';
import slide_image_1 from './../Assets/Fdoc1.png';
import slide_image_2 from './../Assets/Fdoc3.png';
import slide_image_3 from './../Assets/Fdoc4.png';
import slide_image_4 from './../Assets/Mdoc2.png';
import slide_image_5 from './../Assets/Mdoc3.png';
import slide_image_6 from './../Assets/Mdoc4.png';


const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="left-image-container">
        
        <div className="logo-and-title">
          <img src={logoImage} alt="MedicAid Logo" className="logo-image" />
          <div className="title-and-pitch">
            <h1 className="page-title">MedicAid</h1>
            <h5 className="logo-pitch">
              From Query to Cure, We Make Health Secure
            </h5>
          </div>
        </div>
        <div className="image-and-tagline">
          <img src={loginImage} alt="Medical Illustration" className="left-image" />
          <div className="tagline-container">
            
            <ul className="dynamic-text">
              {/* <li>
                <span>Have control over your health anytime, anywhere</span>
              </li> */}
              <li>
                <span>Enter your credentials <br />to stay informed,</span>
              </li>
              <li>
                <span>Expert Care, Anywhere Your Health, We’ll Repair.</span>
              </li>
              
            </ul>
            {/* <div className="static-text">Log in to MedicAid is Simple</div> */}
          </div>
        </div>
      </div>
      
      <div className="login-container">
        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-subtitle">Please log in to your account</p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          
          <button type="submit" className="login-button">Login</button>
          <div className="login-footer">
            <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
            <p className="signup-link">
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
      
      <div className="swiper-container">
      <h5>Log in to Consult with Our Specialists</h5>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3} /* Show 3 images side by side */
          spaceBetween={20} /* Space between slides */
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
         
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image_1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image_2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image_3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image_4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image_5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image_6" />
          </SwiperSlide>
        </Swiper>
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
