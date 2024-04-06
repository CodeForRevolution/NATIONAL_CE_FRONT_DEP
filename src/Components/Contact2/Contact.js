import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div class=" Contact-box" id="Contact">
        <div class="conatact-h2">
          <h2 class=" conatact-h2-child">Contact Us</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        <div class="row d-flex contact-info mb-5 contact1">
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
            <div class="align-self-stretch box p-4 text-center bg-light Contact-box1">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
              </div>
              <h3 class="mb-4">Address</h3>
              <p>Chandni chowk Delhi India</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate ">
            <div class="align-self-stretch box p-4 text-center bg-light Contact-box1">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="">
                  <i class="fa-solid fa-phone"></i>
                </span>
              </div>
              <h3 class="mb-4">Contact</h3>
              <p>
                <a href="tel://1234567920">+91 8207869386</a>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
            <div class="align-self-stretch box p-4 text-center bg-light Contact-box1">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="">
                  <i class="fa-solid fa-envelope"></i>
                </span>
              </div>
              <h3 class="mb-4">Email Address</h3>
              <p>
                <a href="/cdn-cgi/l/email-protection#1a73747c755a63756f6869736e7f34797577">
                  <span
                    class="__cf_email__"
                    data-cfemail="325b5c545d724b5d4740415b46571c515d5f"
                  >
                    ahmadraza@gmail.com
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
            <div class="align-self-stretch box p-4 text-center bg-light Contact-box1">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="">
                  <i class="fa-solid fa-blog"></i>
                </span>
              </div>
              <h3 class="mb-4">Website</h3>
              <p>
                <a href="#">http://khanclink.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
