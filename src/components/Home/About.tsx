import React from "react";
import { Button } from "../UI/Button";

function About() {
  return (
    <div className="w-full md:w-11/12 md:pt-16 pt-10 grid md:grid-cols-2 grid-cols-1 items-center gap-y-10 md:mr-16">
      <div className="md:order-2 order-1">
        <p className="text-xl text-grd">About Us</p>
        <p className="font-bold md:text-4xl text-3xl">
          Let’s Get Moving – Today!
          <span className="md:block inline-block">With Professionals</span>
        </p>
        <p className="mt-4 md:text-xl text-lg">
          Al Khajista Shifting Movers is here to help. With our reliable,
          friendly service and a team of seasoned professionals, we make your
          move simple and stress-free.{" "}
          <span className="font-medium">
            Contact us now to get a free, no-obligation quote and start planning
            your move today!
          </span>
        </p>
        <div className="w-full flex items-center justify-between md:flex-row flex-col gap-3 mt-7">
          <div className="md:w-52 w-11/12 py-4 px-2 rounded-xl text-center shadow-lg shadow-neutral-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.3}
              stroke="#ED852F"
              className="size-12 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>

            <p className="font-semibold pt-3">Full Protection</p>
          </div>
          <div className="bg-grd md:w-52 w-11/12 py-4 px-2 rounded-xl text-center shadow-lg shadow-neutral-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.3}
              stroke="white"
              className="size-12 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>

            <p className="font-semibold pt-3 text-white">Expert Team</p>
          </div>
          <div className="md:w-52 w-11/12 py-4 px-2 rounded-xl text-center shadow-lg shadow-neutral-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.3}
              stroke="#ED852F"
              className="size-12 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>

            <p className="font-semibold pt-3">24/7 Support</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center md:order-1 order-2">
        <div className="w-[500px] min-h-96 bg-white shadow-2xl shadow-neutral-200 rounded-3xl py-5 md:px-6 px-3">
          <h3 className="text-center font-semibold">Get Free Quote</h3>
          <form action="" className="flex w-full flex-col gap-y-2 mt-5">
            <input
              className="p-4 rounded-[50px] border focus:border-neutral-400 transition-colors outline-none"
              type="text"
              name="name"
              id=""
              placeholder="Your Name"
            />
            <input
              className="p-4 rounded-[50px] border focus:border-neutral-400 transition-colors outline-none"
              type="number"
              name="phone"
              id=""
              placeholder="Phone Number"
            />
            <input
              className="p-4 rounded-[50px] border focus:border-neutral-400 transition-colors outline-none"
              type="text"
              name="address"
              id=""
              placeholder="your address"
            />
            <select
              className="p-4 rounded-[50px] border focus:border-neutral-400 transition-colors outline-none"
              name="services"
              id=""
            >
              <option value="">Select Service</option>
              <option value="shifting">Shifting</option>
              <option value="relocation">Relocation</option>
              <option value="moving">Moving</option>
              <option value="other">Other</option>
            </select>
            <textarea
              className="resize-none h-32 p-4 rounded-2xl border focus:border-neutral-400 transition-colors outline-none"
              name="description"
              id=""
              placeholder="Tell Us More.."
            ></textarea>
            <Button type="submit" variant="secondary">
              Send Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
