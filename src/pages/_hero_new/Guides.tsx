import React from "react";

import "./styles.scss";

import Card from "./Card";
import { guides } from "./consts";

function Guides() {
  return (
    <div className="mt-[52px]">
      <h2 className="mb-6">Installation Guides</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <Card url="https://www.youtube.com/@iomete">
            <div className="flex justify-between h-auto sm:h-[106px] flex-col sm:flex-row gap-6">
              <div className="w-[100%] sm:w-[50%] ">
                <h4 className="mb-2">
                  Watch: How to run IOMETE Community Edition on AWS
                </h4>
                <p className="card-desc mb-0">
                  Watch 20 minute Youtube video on how to run Community Edition
                  on AWS.
                </p>
              </div>
              <div>
                <div>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube-nocookie.com/embed/gNtZrnKNg4Y?si=T3yaa88CRgwlNLrC"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="rounded-t-md h-[153px] sm:h-[153px] w-full sm:w-[309px] max-h-[120px]"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* <div className="bg-[#F6F8FA] dark:bg-[var(--ifm-color-emphasis-200)]  mb-[-20px] rounded-md h-[153px] sm:h-[133px] w-full sm:w-[309px] flex justify-center items-center">
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M51.2597 15.2075C51.0536 14.4011 50.6587 13.6552 50.1075 13.0315C49.5564 12.4077 48.8649 11.9239 48.09 11.62C40.5912 8.72376 28.6562 8.75001 28 8.75001C27.3438 8.75001 15.4087 8.72376 7.91 11.62C7.13511 11.9239 6.44357 12.4077 5.89246 13.0315C5.34134 13.6552 4.94643 14.4011 4.74031 15.2075C4.17375 17.3906 3.5 21.3806 3.5 28C3.5 34.6194 4.17375 38.6094 4.74031 40.7925C4.94612 41.5993 5.34089 42.3456 5.89203 42.9698C6.44316 43.594 7.13486 44.0781 7.91 44.3822C15.0938 47.1538 26.3375 47.25 27.8556 47.25H28.1444C29.6625 47.25 40.9128 47.1538 48.09 44.3822C48.8651 44.0781 49.5568 43.594 50.108 42.9698C50.6591 42.3456 51.0539 41.5993 51.2597 40.7925C51.8263 38.605 52.5 34.6194 52.5 28C52.5 21.3806 51.8263 17.3906 51.2597 15.2075ZM35.4856 28.7284L24.9856 35.7284C24.8538 35.8164 24.7006 35.8669 24.5423 35.8746C24.3841 35.8822 24.2267 35.8468 24.087 35.772C23.9473 35.6972 23.8306 35.5859 23.7492 35.4499C23.6678 35.314 23.6249 35.1585 23.625 35V21C23.6249 20.8416 23.6678 20.6861 23.7492 20.5501C23.8306 20.4141 23.9473 20.3028 24.087 20.228C24.2267 20.1532 24.3841 20.1178 24.5423 20.1255C24.7006 20.1331 24.8538 20.1836 24.9856 20.2716L35.4856 27.2716C35.6056 27.3514 35.7041 27.4597 35.7722 27.5868C35.8402 27.7139 35.8759 27.8558 35.8759 28C35.8759 28.1442 35.8402 28.2861 35.7722 28.4132C35.7041 28.5403 35.6056 28.6486 35.4856 28.7284Z"
                      fill="#FF0000"
                    />
                  </svg>
                </div> */}
              </div>
            </div>
          </Card>
        </div>

        {guides.map((guide, index) => (
          <div className="col-span-2 sm:col-span-1 " key={index}>
            <Card url={guide.url}>
              <div className="h-18 bg-[#F6F8FA] dark:bg-[var(--ifm-color-emphasis-200)] rounded-[3px] flex justify-center items-center mb-4 p-[18px]">
                {guide.icon}
              </div>

              <h4 className="mb-4">{guide.title}</h4>

              <p className="card-desc mb-0">{guide.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guides;
