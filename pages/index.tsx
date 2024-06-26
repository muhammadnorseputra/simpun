import type { NextPage } from "next";
import { useEffect } from "react";
import Router from "next/router";
import { getCookie, setCookie } from 'cookies-next';

const SplashScreen: NextPage = () => {
  useEffect(() => {
    if (getCookie('splashscreen') !== null || typeof getCookie('splashscreen') !== 'undefined') {
      setTimeout(() => {
        Router.push("/me");
        setCookie('splashscreen', true, { maxAge: 3600, path: '/' });
        console.log(getCookie('splashscreen'))
      }, 1000);
    }
  });
  return (
  <div className="scene">
    <span className="cloud cloud--small" />
    <svg xmlns="http://www.w3.org/2000/svg" id="plane" className="plane" viewBox="0 0 104 47" x={0} y={0} width={104} height={47} background-color="#ffffff00">
      <g id="avion">
        <path d="M20 36C25 38 69 43 80 40 92 38 106 33 104 21 103 13 95 13 90 9 85 5 79 2 76 1 70-1 65 0 60 2 57 3 25 14 23 13 21 12 12 2 9 3 5 4 1 5 1 6 2 7 15 34 20 36Z" fill="#0085b2" />
        <path d="M23 36C28 37 69 43 80 40 88 38 98 34 102 29 82 32 22 36 23 36Z" stroke="#ffffff00" strokeWidth={1} fill="#14647f" />
        <path d="M42 39C48 40 60 40 67 40 71 32 72 26 72 26L44 29C44 29 44 35 42 39Z" stroke="#ffffff00" strokeWidth={1} fill="#0c3b4d" />
        <path d="M7 16C7 16 9 20 10 22 13 27 16 13 16 13L7 16Z" stroke="#ffffff00" strokeWidth={1} fill="#0c3b4d" />
        <path d="M40 29C40 29 41 34 34 42 27 51 48 46 58 39 74 28 72 25 72 25L40 29Z" stroke="#ffffff00" strokeWidth={1} fill="#006e96" />
        <path d="M5 14C5 14 6 15 3 19 1 22 10 20 13 17 19 11 17 11 17 11L5 14Z" stroke="#ffffff00" strokeWidth={1} fill="#006e96" />
        <path d="M90 10C88 8 83 4 80 3 78 3 68 7 68 8 70 12 80 8 90 10Z" stroke="#ffffff00" strokeWidth={1} fill="#0c3b4d" />
        <path d="M89 9C87 7 82 3 79 2 77 2 67 6 67 7 69 11 79 7 89 9Z" stroke="#ffffff00" strokeWidth={1} fill="#afe2ff" />
      </g>
    </svg>
    <span className="cloud cloud--medium" />
    <span className="cloud cloud--large" />
    <h3 className="text-black"><strong>👋🏻</strong> mohon tunggu loading ...</h3>
  </div>
  );
};

export default SplashScreen;
