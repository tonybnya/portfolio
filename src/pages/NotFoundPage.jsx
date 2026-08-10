import bg from "/assets/images/bg.png";
import logo from "/assets/images/profile.png";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row text-white">
      <div className="w-full h-44 sm:h-56 lg:w-1/2 lg:h-screen">
        <img
          src={bg}
          alt="Background illustration"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="w-full lg:w-1/2 flex flex-col justify-between max-lg:justify-center items-center px-6 py-10 sm:px-8 bg-black lg:min-h-screen bg-repeat relative"
        style={{ backgroundImage: "url('/assets/images/noise.jpg')" }}
      >
        <div className="flex flex-col items-center gap-3 mb-12">
          <img
            src={logo}
            alt="Portfolio logo"
            className="h-12 w-12 max-lg:w-10 max-lg:h-10"
          />
          <span className="text-4xl max-lg:text-lg font-sans font-medium text-white tracking-normal">
            Portfolio
          </span>
        </div>

        <div className="text-center space-y-4 mb-12 flex flex-col gap-4">
          <h1 className="text-4xl max-lg:text-lg font-sans font-medium leading-tight tracking-normal">
            Oops! You have
            <br />
            discovered a world not
            <br />
            found!
          </h1>
          <p className="text-lg max-lg:text-sm font-sans leading-6 tracking-normal">
            Return to serious stuff.
          </p>

          <a
            href="/"
            className="uppercase font-medium tracking-wide font-sans max-sm:text-sm py-2 px-4 rounded-md hover:cursor-pointer hover:bg-black/50 hover:scale-105 bg-black shadow-lg shadow-white/50 drop-shadow-xl"
            rel="noopener noreferrer"
            aria-label="Go to home page"
          >
            Home
          </a>
        </div>

        <div className="mt-12 text-[#ffba00] text-sm font-bold font-mono">
          <span>Error Code 404</span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
