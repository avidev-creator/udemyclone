import Coursel from "./Coursel";

function Content() {
  return (
    <>
      <div className="flex w-full pt-0 pb-6 justify-center">
        <img
          src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/2a8ae512-b6c5-4184-aa4b-ea6e7d2c81f9.jpg"
          width="1340"
          height="400"
        />
        <div className="flex flex-col absolute top-5 p-10 m-20 w-15 max-w-96 h-20 left-52">
          <div className="flex flex-row bg-white p-4">
            <h1 className="font-bold text-3xl overflow-hidden text-wrap p-4">
              Skills for the new year - and beyond
            </h1>
          </div>
          <div className="flex flex-row top-3 p-0 bg-white w-15 h-20">
            <span className="flex bg-white ml-2 my-0">
              GenAI is the #1 surging skill for 2024. Learn the latest skills
              from ₹389 in our New Year’s Sale.
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-screen-5xl h-32 justify-center bg-center bg-gray-300">
        <div>
          <span>
            <p className="text-gray-600 w-full mx-60 absolute">
              Trusted by over 15,000 companies and millions of learners around
              the world
            </p>
          </span>
          <ul className="flex w-full relative top-10 space-x-20 justify-evenly items-center">
            <li className="flex m-1 px-3 w-15">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"
                alt="Volkswagen logo"
                width="48"
                height="48"
                loading="lazy"
                className="flex mx-3"
              />
            </li>
            <li className="flex m-1 p-1 space-x-4 justify-center">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg"
                alt="Samsung logo"
                width="101"
                height="34"
                loading="lazy"
              />
            </li>
            <li className="flex m-1 p-1 space-x-4 justify-center">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"
                alt="Cisco logo"
                width="87"
                height="40"
                loading="lazy"
              />
            </li>
            <li className="flex m-1 p-1 space-x-4 justify-center">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
                alt="ATT&amp;T logo"
                width="97"
                height="40"
                loading="lazy"
              />
            </li>
            <li className="flex m-1 p-1 space-x-4 justify-center">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg"
                alt="Procter &amp; Gamble logo"
                width="48"
                height="48"
                loading="lazy"
              />
            </li>
            <li className="flex m-1 p-1 space-x-4 justify-center">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg"
                alt="Hewlett Packard Enterprise logo"
                width="94"
                height="40"
                loading="lazy"
              />
            </li>
            <li className="flex m-1 p-1 space-x-4 justify-center">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg"
                alt="Citi logo"
                width="62"
                height="40"
                loading="lazy"
              />
            </li>
            <li className="flex m-1 p-1 space-x-4 justify-center">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg"
                alt="Ericsson logo"
                width="55"
                height="48"
                loading="lazy"
              />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Coursel />
      </div>
    </>
  );
}

export default Content;
