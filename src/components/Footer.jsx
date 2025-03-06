import Social from "./Social";

const Footer = () => {
  return (
    // <div className="text-center py-4 dark:text-gray-50 text-black">
    <div className="text-center py-4 text-gray-50">
      <Social />
      <p className="font-light mt-2">
        &copy; {new Date().getFullYear()} &bull; All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
