import React from "react";
const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white dark:bg-gray-900 dark:text-gray-300 py-8 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold">YourApp</h2>
            <p className="mt-2 text-gray-200">
              Build. Innovate. Connect. Elevate your experience with our
              platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Pricing", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-gray-300 transition">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Subscribe to Newsletter
            </h3>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social & Copyright Section */}
        <div className="mt-6 border-t border-gray-500 pt-4 text-center">
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} YourApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
