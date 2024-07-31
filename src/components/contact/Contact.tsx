const Contact = () => {
  return (
    <section className="px-5">
      <div className="max-w-screen-xl m-auto space-y-4">
        <h1 className="text-4xl scroll-mt-24" id="contact">
          <a className="inline-block" href="#contact">
            #
          </a>
          Contact
        </h1>
        <div className="flex justify-center items-center border-4 gap-6 border-dotted p-3">
          <a
            className="block"
            href="https://www.linkedin.com/in/dixit-lohar10/"
            target="_blank">
            <img src="/assets/images/linkedin.png" alt="linkedin" width={120} />
          </a>
          <a className="block" href="mailto:dixitmalviya10@gmail.com">
            <img src="/assets/images/new.png" alt="gmail" width={120} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
