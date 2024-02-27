import React from "react";
import "./App.css"; // Assuming you have a CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <div className="centered-content">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="container">
        <div className="upper-part">
          <div className="left">
            <img src="1.png" alt="Left" className="left-image" />
          </div>
          <div className="right">
            <p>
              <b>
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </b>
            </p>
            <ul className="text-center">
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img src="2.png" alt="Right" className="right-image" />
            <p>
              Government of India has awarded the{" "}
              <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
              Joint Managing Director of C.R.I. Group received the award from
              Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
              Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
        <div className="lower-part text-left">
          <p>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
          <img src="3.png" alt="Lower" className="lower-image mx-auto" />
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
          <hr className="divider" />

          <p>
            <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
          </p>
          <p>
            CHEMICALS|PROCESS POWER WATER|WASTE WATER OILS|GAS PHARMA
            SUGARS|DISTILLERIES PAPER|PULP MARINE|DEFENCE METAL|MINING
            FOOD|BEVERAGE PETROCHEMICAL|REFINERIES SOLAR BUILDING HVAC FIRE
            FIGHTING AGRICULTURE|RESIDENTIAL
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="bottom-bar max-w-3xl mx-auto">
          <div className="bottom-item">
            <img src="4.png" alt="Tool Free" />
            <a href="tel:1-800-123-4567">Toll Free 1 800 123 4567</a>
          </div>
          <div className="bottom-item">
            <img src="5.png" alt="Facebook" />
            <a href="https://www.facebook.com/yourpage">Facebook</a>
          </div>
          <div className="bottom-item">
            <img src="6.png" alt="Website" />
            <a href="https://www.yourwebsite.com">Website</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
