const Work = () => {
  return (
    <section className="px-5">
      <div className="max-w-screen-xl m-auto space-y-4">
        <h1 className="text-4xl scroll-mt-24" id="work">
          <a className="inline-block" href="#work">
            #
          </a>
          Work
        </h1>

        <div className="mx-auto ">
          <div className="relative wrap overflow-hidden h-full">
            <div className="border-2-2 border-yellow-555 absolute h-full right-full sm:right-2/4 border-2 border-[#FFC100] rounded"></div>
            <div className="border-2-2 border-yellow-555 absolute h-full left-0 sm:left-2/4 border-2 border-[#FFC100] rounded"></div>

            <div className="sm:mb-8 flex justify-between sm:flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-1/3 sm:w-5/12"></div>
              <div className="order-1 sm:w-5/12 px-1 py-4 sm:text-right">
                <p className="mb-2 sm:mb-3 text-base text-yellow-300">
                  Oct 2023 - Present
                </p>
                <h3 className="mb-2 sm:mb-3 font-bold text-lg md:text-2xl">
                  THINKTANKER Pvt. Ltd
                </h3>
                <div className="mb-5 sm:mb-7">
                  <h4 className="font-bold text-lg text-slate-500">
                    MultiStoreSync - <br /> Multi-Store Management Service.
                  </h4>
                  <p className="md:text-base">
                    Created and launched MultiStoreSync, a comprehensive
                    platform designed to streamline inventory, product
                    information, and order management across multiple stores.
                    The platform ensures real-time synchronization and
                    centralized management, significantly reducing manual
                    updates and enhancing operational efficiency. Enabled
                    businesses to focus on growth by providing a reliable
                    solution for managing multi-store data seamlessly.
                  </p>
                </div>
                <div className="mb-5 sm:mb-7">
                  <h4 className="font-bold text-lg text-slate-500">
                    ImageBoost360 - <br />
                    Image Management, manipulation and delivery.
                  </h4>
                  <p className="md:text-base">
                    An intuitive platform for media transformation, management,
                    and delivery. Leveraging a worldwide CDN optimized for
                    media, ImageBoost360 allows users to securely manage and
                    organize their media, collaborate with team members, and
                    showcase rich media content such as 360 spins, deep image
                    zoom, and videos.
                  </p>
                </div>
              </div>
            </div>

            <div className="sm:mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-1/3 sm:w-5/12"></div>
              <div className="order-1 sm:w-5/12 px-1 sm:py-4">
                <p className="mb-2 sm:mb-3 text-base text-yellow-300">
                  Oct 2022 - Sept 2023
                </p>
                <h3 className="mb-2 sm:mb-3 font-bold text-lg md:text-2xl">
                  Silver WebBuzz Pvt. Ltd
                </h3>

                <div className="mb-5 sm:mb-7">
                  <h4 className="font-bold text-lg text-slate-500">
                    IPO Dekho - <br /> Information about IPOs in India.
                  </h4>
                  <p className="md:text-base">
                    IPO Dekho gives all IPO news, details, information, alerts,
                    and Live subscriptions which may be helpful to people who
                    are interested to invest in the market and initial public
                    offering (IPO), but are not able to invest due to lack of
                    information.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="mx-auto -mt-16 hidden sm:block"
            src="/src/assets/images/work.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
