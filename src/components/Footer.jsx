import Social from "./Social";

const Footer = () => {
  return (
    <div className="text-center py-4 text-gray-50">
      <Social />
      <p className="font-mono text-sm mt-2 text-gray-50">
        &copy; {new Date().getFullYear()} &bull; All Rights Reserved &bull;
      </p>
    </div>
  );
};

export default Footer;
