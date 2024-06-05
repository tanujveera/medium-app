import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-green-500 text-7xl w-full text-white transition-all duration-300 ease-in-out hover:rounded-full">
        <div className="justify-center font-serif py-20 flex hover:cursor-pointer">
          <p className="inline-block transition transform duration-300 ease-in-out hover:-translate-x-6">Unlock a world of wisdom </p>
          <p className="inline-block transition transform duration-300 ease-in-out hover:translate-x-6">{"→"}</p>
        </div>
        <hr className="border border-black opacity-50"></hr>
      </div>
      <div className="px-[500px] py-6">
        <ul className="flex justify-around text-gray-500 text-xs">
          <li>Help</li>
          <li>Status</li>
          <li>About</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Blog</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Text to speech</li>
          <li>Teams</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
