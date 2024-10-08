"use client";
import Link from "next/link";

interface LinksInput {
  title: string;
  links: { href: string; label: string }[];
}

const LinksSection: React.FC<LinksInput> = ({ title, links }) => {
  return (
    <div>
      <h3 className="mb-8 text-slate-400">{title}</h3>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="hover:underline hover:text-blue-400">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const _Footer: React.FC = () => {
  const companyLinks = [
    { href: "/landing", label: "About Us" },
    { href: "/directory", label: "Contact Us" },
    { href: "/gallery", label: "Careers" },
    { href: "/faq", label: "Press" },
  ];

  const productsLinks = [
    { href: "/landing", label: "Features" },
    { href: "/directory", label: "Pricing" },
    { href: "/gallery", label: "News" },
    { href: "/faq", label: "Help Desk" },
    { href: "/login", label: "Support" },
  ];

  const servicesLinks = [
    { href: "/landing", label: "Digital Marketing" },
    { href: "/directory", label: "Content Writing" },
    { href: "/gallery", label: "SEO for Business" },
    { href: "/faq", label: "UI Design" },
  ];

  const legalLinks = [
    { href: "/landing", label: "Privacy Policy" },
    { href: "/directory", label: "Terms & Conditions" },
    { href: "/gallery", label: "Return Policy" },
  ];

  return (
    <footer className="bg-[#1c3c8c] text-white py-12 md:py-24">
      <div className="container mx-auto flex justify-evenly gap-8 px-10 md:px-20 text-lg max-lg:flex-col">
        {/* About Section */}
        <div className="w-[337px] max-lg:w-fit grid content-evenly max-lg:self-center gap-8">
          <img className="h-[63px] max-lg:justify-self-center" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c393fb4d98d77eb3cb0ee04acb1cc7e93bc7d7784c5e8f8ef8df0c8320a2add1" alt="Company logo" />
          <div className="w-[329px] max-lg:w-fit text-lg max-md:text-base max-lg:text-center text-stone-200">
            <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
          {/* Social Media Section */}
          <div>
            <ul className="flex justify-center space-x-8 text-gray-500">
              <li>
                <a
                  // href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.932 4.932 0 002.163-2.724c-.951.555-2.005.959-3.127 1.184A4.92 4.92 0 0016.616 3c-2.723 0-4.932 2.207-4.932 4.932 0 .39.045.768.128 1.131-4.094-.206-7.719-2.164-10.148-5.145-.424.723-.666 1.56-.666 2.457 0 1.69.859 3.179 2.159 4.048a4.933 4.933 0 01-2.229-.616v.062c0 2.366 1.676 4.345 3.897 4.794-.408.11-.839.17-1.282.17-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417a9.876 9.876 0 01-6.102 2.106c-.398 0-.79-.023-1.175-.067a13.945 13.945 0 007.548 2.211c9.054 0 14-7.496 14-13.986 0-.21-.005-.423-.014-.633a10.012 10.012 0 002.457-2.549z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  // href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.325v21.351C0 23.404.596 24 1.325 24H12.82v-9.294H9.692V11.3h3.128V8.432c0-3.1 1.894-4.787 4.66-4.787 1.325 0 2.465.099 2.798.143v3.243l-1.919.001c-1.504 0-1.794.714-1.794 1.763v2.314h3.587l-.467 3.406h-3.12V24h6.116c.729 0 1.324-.596 1.324-1.324V1.325C24 .596 23.404 0 22.675 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  // href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.057 1.97.24 2.432.402a4.92 4.92 0 011.734 1.01 4.92 4.92 0 011.01 1.734c.162.462.345 1.262.402 2.432.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.17-.24 1.97-.402 2.432a4.92 4.92 0 01-1.01 1.734 4.92 4.92 0 01-1.734 1.01c-.462.162-1.262.345-2.432.402-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.057-1.97-.24-2.432-.402a4.92 4.92 0 01-1.734-1.01 4.92 4.92 0 01-1.01-1.734c-.162-.462-.345-1.262-.402-2.432C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.057-1.17.24-1.97.402-2.432a4.92 4.92 0 011.01-1.734 4.92 4.92 0 011.734-1.01c.462-.162 1.262-.345 2.432-.402C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.756 0 8.344.014 7.052.072c-1.29.058-2.182.247-2.926.53a6.876 6.876 0 00-2.487 1.631A6.876 6.876 0 00.603 5.93c-.283.744-.472 1.636-.53 2.926C.014 8.756 0 9.244 0 12s.014 3.244.072 4.574c.058 1.29.247 2.182.53 2.926a6.876 6.876 0 001.631 2.487 6.876 6.876 0 002.487 1.631c.744.283 1.636.472 2.926.53 1.292.058 1.704.072 4.948.072s3.656-.014 4.948-.072c1.29-.058 2.182-.247 2.926-.53a6.876 6.876 0 002.487-1.631 6.876 6.876 0 001.631-2.487c.283-.744.472-1.636.53-2.926.058-1.292.072-1.704.072-4.948s-.014-3.656-.072-4.948c-.058-1.29-.247-2.182-.53-2.926a6.876 6.876 0 00-1.631-2.487A6.876 6.876 0 0019.93.603C19.186.32 18.294.131 17.004.072 15.704.014 15.244 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.838 3.838 0 110-7.676 3.838 3.838 0 010 7.676zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid max-[460px]:grid-cols-1 max-sm:grid-cols-2 max-lg:grid-cols-3 lg:grid-cols-4 gap-8 text-lg">
          {/* Links Section */}
          <LinksSection title="Company" links={companyLinks} />
          <LinksSection title="Products" links={productsLinks} />
          <LinksSection title="Services" links={servicesLinks} />
          <LinksSection title="Legal" links={legalLinks} />
          </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-24 text-center text-sm">
        &copy; {new Date().getFullYear()} nearbyTask. All rights reserved.
      </div>
    </footer>
  );
};

export default _Footer;
