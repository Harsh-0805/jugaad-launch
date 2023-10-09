import React from "react";
import "./App.css";
import jugaad from "./assets/jugaad_logo.png";
import ecellLogo from "./assets/ecell-white-img.png";

function App() {
  return (
    <div>
      <div className="bg-[#121212]">
        <div className="bg-yellow-500 bg-blend-darken bg-cover bg-left bg-no-repeat">
          <div className="h-full bg-gradient-to-b from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.7)_55.96%] to-[rgba(0,0,0,0.2)]">
            <div className="w-full h-screen flex justify-center overflow-hidden">
              <div className="w-full max-w-6xl 2xl:max-w-[95%] px-6 py-16">
                <div className="flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
                  <img src={ecellLogo} alt="Ecell" className="w-1/4" />
                  <img src={jugaad} alt="Jugaad" className="w-3/4" />
                </div>

                <span
                  id="L"
                  className="flex font-extrabold mt-16 flex-col zoom-in-out-box lg:flex-row gap-5 justify-center text-6xl xl:text-9xl text-white text-center w-full col-span-3 uppercase tracking-wider"
                >
                  <span>Coming</span>
                  <span> Soon!!</span>
                </span>
                <span className="flex mt-16 flex-col lg:flex-row gap-2 justify-center text-3xl xl:text-9xl text-white text-center w-full col-span-3 uppercase tracking-wider">
                  <span>"Paisa kamaya nahi,</span>
                  <span>Banaya jata hai"</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
