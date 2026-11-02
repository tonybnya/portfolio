import Social from "./Social";

const Footer = () => {
  return (
    <div className="text-center py-4 text-gray-50">
      <Social />
      <p className="font-sans text-sm italic mt-2 text-[#6b7280]">
        &copy; {new Date().getFullYear()} &bull; All Rights Reserved &bull;
      </p>
    </div>
  );
};

export default Footer;
