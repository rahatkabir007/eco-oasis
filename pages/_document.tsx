import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

          {/* Poppins  */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />


          {/* React Slick Carousel  */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <style>
            {
              `
	::-webkit-scrollbar {
	  width: 8px;
	  height: 5px !important;
	}
	::-webkit-scrollbar-track {
	  box-shadow: inset 0 0 2px grey; 
	  border-radius: 18px;
	}
	::-webkit-scrollbar-thumb {
	  background: #165A3E; 
	  border-radius: 10px;
	  height:5px;
	}
	::-webkit-scrollbar-thumb:hover {
	  background: #b30000; 
	}
	`
            }
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
