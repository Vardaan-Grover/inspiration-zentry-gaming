import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const links = [
  {
    href: 'https://www.linkedin.com/in/vardaan-grover/',
    icon: <FaLinkedin size={20} />,
  },
  { href: 'https://github.com/Vardaan-Grover', icon: <FaGithub size={20} /> },
  {
    href: 'https://www.linkedin.com/in/vardaan-grover/',
    icon: <FaXTwitter size={20} />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-violet-950">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm">Inspired by Zentry</p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-300 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="font-semibold text-center text-sm md:text-left">
          Made by Vardaan Grover with 💜
        </p>
      </div>
    </footer>
  );
};

export default Footer;
