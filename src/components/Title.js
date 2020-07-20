import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Title() {
  return (
    <div className="Title">
      <h1>Covid-19 Tracker</h1>
      <h3>慌てないで！</h3>
      <div className="social">
        <p>Bryan Race</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/BrynRac"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
