import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-primary pt-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-3xl font-bold mb-4 font-playball text-primary">EverGlow</h3>
          <p className="text-md text-text leading-relaxed">
            Discover the glow that comes from within.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-heading font-bold mb-4 text-3xl tracking-wide">Company</h3>
          <ul className="space-y-2 text-text text-md font-body">
            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#features" className="hover:text-accent transition-colors">Our Services</a></li>
            <li><a href="#blog" className="hover:text-accent transition-colors">Blog</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-heading font-bold mb-4 text-3xl tracking-wide">Support</h3>
          <ul className="space-y-2 text-primary text-md font-body">
            <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Customer Support</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="font-heading font-bold mb-4 text-3xl tracking-wide">Get in Touch</h3>
          <p className="text-md text-primary mb-4 leading-relaxed font-body">
            EverGlow Wellness HQ<br />
            27 Jalan Serene, Kuala Lumpur, Malaysia<br />
            Email:{" "}
            <a
              href="mailto:support@everglow.co"
              className="underline hover:text-accent transition-colors"
            >
              support@everglow.co
            </a>
          </p>

          <div className="flex space-x-4 mt-3">
            <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" aria-label="X (Twitter)" className="hover:text-accent transition-colors">
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 mt-10 h-16 flex items-center justify-center text-md text-primary">
        © {new Date().getFullYear()} EverGlow Wellness. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
