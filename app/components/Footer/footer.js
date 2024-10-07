import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 shadow mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <span className="self-center text-lg font-semibold text-gray-900 dark:text-white">
            © 2023 Your Company Name
          </span>
          <ul className="flex flex-wrap items-center mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline mx-2">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mx-2">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mx-2">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mx-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
