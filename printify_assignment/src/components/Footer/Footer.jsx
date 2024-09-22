import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube, faTiktok, faReddit } from '@fortawesome/free-brands-svg-icons';
import Logo from "./PrintifyLogo.png"

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="lg:col-span-1">
            <img
              src={Logo}
              alt="Printify Logo"
              className="w-32 mb-4"
            />
          </div>
          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Integrations */}
            <div>
              <h3 className="font-semibold text-gray-800">Integrations</h3>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li className="hover:text-green-600">Shopify</li>
                <li className="hover:text-green-600">Etsy</li>
                <li className="hover:text-green-600">eBay</li>
                <li className="hover:text-green-600">Amazon</li>
                <li className="hover:text-green-600">TikTok Shop</li>
                <li className="hover:text-green-600">PrestaShop</li>
                <li className="hover:text-green-600">BigCommerce</li>
                <li className="hover:text-green-600">Wix</li>
                <li className="hover:text-green-600">WooCommerce</li>
                <li className="hover:text-green-600">Squarespace</li>
                <li className="hover:text-green-600">Printify API</li>
                <li className="hover:text-green-600">Printify Pop-Up Store</li>
                <li className="hover:text-green-600">Shutterstock</li>
              </ul>
            </div>
            {/* Discover */}
            <div>
              <h3 className="font-semibold text-gray-800">Discover</h3>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li className="hover:text-green-600">Blog</li>
                <li className="hover:text-green-600">Guides</li>
                <li className="hover:text-green-600">Products</li>
                <li className="hover:text-green-600">Etsy print-on-demand</li>
                <li className="hover:text-green-600">Shopify print-on-demand</li>
                <li className="hover:text-green-600">Woocommerce print-on-demand</li>
                <li className="hover:text-green-600">Wix print-on-demand</li>
                <li className="hover:text-green-600">Squarespace print-on-demand</li>
                <li className="hover:text-green-600">Make Your Own Shirt</li>
                <li className="hover:text-green-600">Brands</li>
                <li className="hover:text-green-600">Pricing</li>
                <li className="hover:text-green-600">Shipping Rates</li>
                <li className="hover:text-green-600">Mockup Generator</li>
              </ul>
            </div>
            {/* Start Selling */}
            <div>
              <h3 className="font-semibold text-gray-800">Start selling</h3>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li className="hover:text-green-600">Custom T-shirts</li>
                <li className="hover:text-green-600">Custom Hoodies</li>
                <li className="hover:text-green-600">Custom Mugs</li>
                <li className="hover:text-green-600">Custom Socks</li>
                <li className="hover:text-green-600">Custom Backpacks</li>
                <li className="hover:text-green-600">Custom Branding</li>
                <li className="hover:text-green-600">Sell on Etsy</li>
                <li className="hover:text-green-600">Sell on Social Media</li>
                <li className="hover:text-green-600">Free T-shirt Designs</li>
                <li className="hover:text-green-600">Custom Products</li>
                <li className="hover:text-green-600">Start a Clothing Line</li>
                <li className="hover:text-green-600">Start POD Business</li>
                <li className="hover:text-green-600">Bulk Orders</li>
                <li className="hover:text-green-600">Transferring to Printify</li>
              </ul>
            </div>
            {/* Printify */}
            <div>
              <h3 className="font-semibold text-gray-800">Printify</h3>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li className="hover:text-green-600">Print on Demand</li>
                <li className="hover:text-green-600">Print Providers</li>
                <li className="hover:text-green-600">Experts Program</li>
                <li className="hover:text-green-600">Printify Express Delivery</li>
                <li className="hover:text-green-600">Become a Partner</li>
                <li className="hover:text-green-600">About</li>
                <li className="hover:text-green-600">Printify Quality Promise</li>
                <li className="hover:text-green-600">Jobs</li>
                <li className="hover:text-green-600">Webinars</li>
                <li className="hover:text-green-600">Printing Profits Podcast</li>
                <li className="hover:text-green-600">Contact Us</li>
                <li className="hover:text-green-600">Affiliate</li>
                <li className="hover:text-green-600">Contact Sales</li>
                <li className="hover:text-green-600">POD Glossary</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#!" className="text-green-600">
          <FontAwesomeIcon icon={faFacebook} /> {/* Replace with actual icons */}
          </a>
          <a href="#!" className="text-green-600">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#!" className="text-green-600">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#!" className="text-green-600">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#!" className="text-green-600">
          <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#!" className="text-green-600">
          <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="#!" className="text-green-600">
          <FontAwesomeIcon icon={faReddit} />
          </a>
        </div>

        {/*Bottom */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          
          <div className="mt-2 space-x-4">
            <a href="#!" className="hover:underline">
              Intellectual Property Policy
            </a>
            <a href="#!" className="hover:underline">
              Terms of Service
            </a>
            <a href="#!" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#!" className="hover:underline">
              Security
            </a>
            <p>© 2024 Printify, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
