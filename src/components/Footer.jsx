import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("fierquin.matteo@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide the popup after 2 seconds
  };

  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <div className="space-y-4">
        <div
          onClick={handleCopy}
          className="cursor-pointer relative flex items-center gap-4"
        >
          <img src="./images/mail.png" alt="mail" className="w-12" />
          <span className="text-xl font-bold">fierquin.matteo@gmail.com</span>
          {copied && (
            <span className="absolute top-0 left-0 mt-2 ml-2 p-1 bg-black text-white rounded">
              Copied
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <img src="./images/github.png" alt="github logo" className="w-12" />
          <a
            href="https://github.com/TwitsTeen"
            target="_blank"
            className="text-xl font-bold"
          >
            github.com/TwitsTeen
          </a>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="./images/linkedin.png"
            alt="linkedin logo"
            className="w-12"
          />
          <a
            href="https://www.linkedin.com/in/matt%C3%A9o-fierquin/"
            target="_blank"
            className="text-xl font-bold"
          >
            linkedin.com/in/mattéo-fierquin
          </a>
        </div>
      </div>

      <div className="mt-8 text-center">
        Copyright © 2024 - 2025 | Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
