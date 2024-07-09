import { Link } from 'react-router-dom';
import companyLogoWhite from '../assests/company_logo.png';
import facebookLogo from '../assests/icon-facebook.svg';
import youtubeLogo from '../assests/icon-youtube.svg';
import twitterLogo from '../assests/icon-youtube.svg';
import pinterestLogo from '../assests/icon-pinterest.svg';
import instagramLogo from '../assests/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <img src={companyLogoWhite} className="h-10" alt="Company Logo" />
            <p className="text-sm text-gray-300">
              Empowering your digital journey with innovative solutions.
            </p>
            <div className="flex space-x-4">
              {[facebookLogo, youtubeLogo, twitterLogo, pinterestLogo, instagramLogo].map((logo, index) => (
                <Link key={index} to="#" className="transition-transform hover:scale-110">
                  <img src={logo} className="h-6 w-6" alt={`Social Media ${index + 1}`} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Pricing', 'Products', 'About'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['Careers', 'Community', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="space-y-4">
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;