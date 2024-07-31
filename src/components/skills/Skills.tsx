import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <section className="px-5">
      <div className="max-w-screen-xl m-auto space-y-4">
        <h1 className="text-4xl scroll-mt-24" id="skills">
          <a className="inline-block" href="#skills">
            #
          </a>
          Skills
        </h1>
        <Marquee pauseOnHover gradient speed={50}>
          <div className="flex gap-7 justify-between py-3 relative">
            {[
              { path: "html.png", title: "HTML" },
              { path: "css.png", title: "CSS" },
              { path: "js.png", title: "JavaScript" },
              { path: "reactjs.png", title: "React" },
              { path: "redux.png", title: "Redux" },
              { path: "tailwindcss.svg", title: "Tailwind CSS" },
              { path: "ts.png", title: "TypeScript" },
              { path: "nextjs.svg", title: "Next.js" },
              { path: "primereact.png", title: "PrimeReact" },
              { path: "primeFlex.svg", title: "PrimeFlex" },
              { path: "mui.png", title: "Material-UI" },
              { path: "sass.png", title: "Sass" },
            ].map(({ path, title }: { path: string; title: string }) => (
              <img
                key={path}
                className={`p-1 aspect-square block object-contain grayscale hover:grayscale-0 hover:filter-none transition-all duration-300 last:mr-7`}
                src={`/assets/logos/${path}`}
                alt={title}
                title={title}
                width={120}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
