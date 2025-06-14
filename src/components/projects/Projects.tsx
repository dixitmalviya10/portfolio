import { LinkIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  return (
    <section className="px-5">
      <div className="max-w-screen-xl m-auto space-y-4">
        <h1 className="text-4xl scroll-mt-24" id="projects">
          <a className="inline-block" href="#projects">
            #
          </a>
          Projects
        </h1>
        <div className="min-h-72 flex justify-center py-4 flex-wrap items-center gap-5 border-4 border-dotted">
          <a
            href="https://moviebase-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-300 p-5 rounded-lg shadow-inner transition-all relative hover:shadow-xl hover:shadow-blue-50">
            <LinkIcon className="size-8 absolute text-blue-400 -right-2 -top-2" />
            <h1 className="text-4xl sm:text-5xl text-blue-400">Moviebase</h1>
          </a>
          <a
            href="https://tictactoe-livid-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-300 p-5 rounded-lg shadow-inner transition-all relative hover:shadow-xl hover:shadow-blue-50">
            <LinkIcon className="size-8 absolute text-blue-400 -right-2 -top-2" />
            <h1 className="text-4xl sm:text-5xl text-blue-400">TicTacToe</h1>
          </a>
          <a
            href="https://calculator-delta-ten-49.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-300 p-5 rounded-lg shadow-inner transition-all relative hover:shadow-xl hover:shadow-blue-50">
            <LinkIcon className="size-8 absolute text-blue-400 -right-2 -top-2" />
            <h1 className="text-4xl sm:text-5xl text-blue-400">Calculator</h1>
          </a>
          <a
            href="https://sales-board-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-300 p-5 rounded-lg shadow-inner transition-all relative hover:shadow-xl hover:shadow-blue-50">
            <LinkIcon className="size-8 absolute text-blue-400 -right-2 -top-2" />
            <h1 className="text-4xl sm:text-5xl text-blue-400">SalesBoard</h1>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
