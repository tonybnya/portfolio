import bg from "/assets/images/bg.png";
import logo from "/assets/images/portfolio.svg";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex text-white">
      <div className="w-1/2 h-screen">
        <img
          src={bg}
          alt="Background illustration"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="w-1/2 flex flex-col justify-between max-lg:justify-center items-center p-8 bg-black min-h-screen bg-repeat relative"
        style={{ backgroundImage: "url('/assets/images/noise.jpg')" }}
      >
        <div className="flex flex-col items-center gap-3 mb-12">
          <img src={logo} className="h-12 w-12 max-lg:w-10 max-lg:h-10" />
          <span className="text-4xl max-lg:text-lg font-bold font-dm text-white tracking-tight">
            Portfolio
          </span>
        </div>

        <div className="text-center space-y-4 mb-12 flex flex-col gap-4">
          <h1 className="text-4xl max-lg:text-lg font-semibold font-mona leading-none tracking-tight">
            Oops! You have
            <br />
            discovered a world not
            <br />
            found!
          </h1>
          <p className="text-lg max-lg:text-sm font-light font-modern leading-6 tracking-tight">
            <a
              href="https://github.com/tonybnya"
              target="_blank"
              className="text-yellow-500 font-bold animate-pulse"
            >
              Tony
            </a>{" "}
            is just in a click away. Let&apos;s go back and
            <br />
            continue with serious stuff.
          </p>

          <a
            href="/"
            className="uppercase font-semibold tracking-wide font-dm max-sm:text-sm py-2 px-4 rounded-md hover:cursor-pointer hover:bg-black/50 hover:scale-105 bg-black shadow-lg shadow-white/50 drop-shadow-xl"
            rel="noopener noreferrer"
            aria-label="Go to home page"
          >
            Go to Home
          </a>
        </div>

        <div className="mt-12 text-[#8f7d5e] text-sm font-bold font-modern">
          <span>Error Code 404</span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
