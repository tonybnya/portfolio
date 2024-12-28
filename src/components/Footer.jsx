import React from "react";
import Social from "./Social";

function Footer() {
  return (
    <div className="text-center py-4 dark:text-gray-50">
      <Social />
      <p className="font-light mt-2">
        &copy; Copyright {new Date().getFullYear()} &bull; All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
