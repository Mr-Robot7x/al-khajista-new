"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import proImage from "../../public/images/process.jpg";

function Process() {
  const [mobileSize, setMobileSize] = React.useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setMobileSize(true);
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
          setMobileSize(true);
        } else {
          setMobileSize(false);
        }
      });
    }
  }, []);
  return (
    <section className="md:w-11/12 w-full min-h-screen mt-10 relative">
      <h2 className="md:ml-10">
        Moving Process <br />
        By Profesionals Hands
      </h2>
      <div className="absolute md:top-5 top-20 md:right-24 right-2 flex items-center gap-x-3">
        <h3 className="text-xl">Watch Video</h3>
        <div className="w-[60px] h-[60px] bg-grd rounded-full  flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-10 drop-shadow-lg ts"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </div>
      </div>
      {mobileSize ? (
        <div className="w-full grid grid-cols-1 gap-y-5 mt-24 relative px-4">
          <div className="w-full h-52 bg-white/90  shadow-lg shadow-slate-100 rounded-3xl items-center justify-center flex flex-col p-2 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-12 drop-shadow-lg ts mb-3 rounded-full bg-grd p-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
              />
            </svg>

            <span className="text-xl font-medium">Book Your Service</span>
            <p className="text-sm mt-1">
              Easy online booking with flexible options to fit your schedule.
            </p>
          </div>
          <div className="w-full h-52 bg-white/90 shadow-lg shadow-slate-100 rounded-3xl flex items-center justify-center flex-col text-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-12 drop-shadow-lg ts mb-3 rounded-full bg-grd p-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>

            <span className="text-xl font-medium">Pack Your Goods</span>
            <p className="text-sm mt-1">
              Professional packing ensures all items are safe and secure.
            </p>
          </div>
          <div className="w-full h-52 bg-white/90 shadow-lg shadow-slate-100 rounded-3xl flex items-center justify-center flex-col text-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-12 drop-shadow-lg ts mb-3 rounded-full bg-grd p-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>

            <span className="text-xl font-medium">Safe Loading</span>
            <p className="text-sm mt-1">
              Trained movers carefully load items, prioritizing safety.
            </p>
          </div>
          <div className="w-full h-52 bg-white/90 shadow-lg shadow-slate-100 rounded-3xl flex items-center justify-center flex-col text-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-12 drop-shadow-lg ts mb-3 rounded-full bg-grd p-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>

            <span className="text-xl font-medium">Safe Delivery</span>
            <p className="text-sm mt-1">
              Reliable delivery ensures your goods arrive safely and on time.
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full grid grid-cols-3 gap-x-4 mt-10 px-10 relative">
          <div className="w-[600px] h-80 border border-rose-300 rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 md:flex hidden justify-items-end items-center flex-col -translate-y-1/2 -z-10">
            <Image
              src={proImage}
              width={500}
              height={320}
              className="mt-10"
              alt="Moving Process | Al Khajista"
            />
          </div>
          <div className="min-h-[70vh] w-auto flex items-center justify-end ">
            <div className="">
              <div className="w-72 h-52 bg-white/90 shadow-lg shadow-slate-100 rounded-3xl flex items-center justify-center flex-col text-center p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-12 drop-shadow-lg ts mb-3 rounded-full bg-grd p-1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>

                <span className="text-xl font-medium">Safe Delivery</span>
                <p className="text-sm mt-1">
                  Reliable delivery ensures your goods arrive safely and on
                  time.
                </p>
              </div>
            </div>
          </div>
          <div className="min-h-[78vh] flex flex-col justify-between items-center text-center ">
            <div className="w-72 h-52 bg-white/90  shadow-lg shadow-slate-100 rounded-3xl items-center justify-center flex flex-col p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-12 drop-shadow-lg ts mb-3 rounded-full bg-grd p-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                />
              </svg>

              <span className="text-xl font-medium">Book Your Service</span>
              <p className="text-sm mt-1">
                Easy online booking with flexible options to fit your schedule.
              </p>
            </div>
            <div className="">
              <div className="w-72 h-52 bg-white/90 shadow-lg shadow-slate-100 rounded-3xl flex items-center justify-center flex-col text-center p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-12 drop-shadow-lg ts mb-3 rounded-full bg-grd p-1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>

                <span className="text-xl font-medium">Safe Loading</span>
                <p className="text-sm mt-1">
                  Trained movers carefully load items, prioritizing safety.
                </p>
              </div>
            </div>
          </div>
          <div className="min-h-[70vh] flex items-center justify-start">
            <div className="w-72 h-52 bg-white/90 shadow-lg shadow-slate-100 rounded-3xl flex items-center justify-center flex-col text-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-12 drop-shadow-lg ts mb-3 rounded-full bg-grd p-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>

              <span className="text-xl font-medium">Pack Your Goods</span>
              <p className="text-sm mt-1">
                Professional packing ensures all items are safe and secure.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Process;
