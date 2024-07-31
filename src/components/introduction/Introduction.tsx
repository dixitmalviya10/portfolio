import ParticleEffect from "../ParticleEffect";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <section className="relative p-5">
      <ParticleEffect />
      <div className="max-w-screen-xl m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1 text-center md:text-left space-y-3">
            <div>
              <TypeAnimation
                sequence={[
                  // Using HTML entity for line break
                  `Frontend Developer`,
                  1000,

                  `Reactjs Developer`,
                  1000,
                ]}
                speed={50}
                className="text-xl md:text-5xl block whitespace-pre-line text-white"
                repeat={Infinity}
              />
            </div>
            <div className="space-x-3">
              <a
                href="https://www.linkedin.com/in/dixit-lohar10/"
                target="_blank">
                <button className="bg-white border py-3 w-32 rounded">
                  View LinkedIn
                </button>
              </a>
              <a href="https://github.com/dixitmalviya10" target="_blank">
                <button className="border text-white py-3 w-32 rounded shadow-lg">
                  Github
                </button>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 -z-10">
            <img
              className="m-auto md:ml-auto md:mr-0 brightness-0 invert"
              src="/src/assets/images/pngwing.com.png"
              alt="image"
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
