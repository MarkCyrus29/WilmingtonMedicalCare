import React from "react";
import Button from "./Button";

function GetInTouch() {
  return (
    <section className="w-screen h-auto bg-secondary flex flex-col justify-center py-24">
      <h1 className="text-center pb-10 !text-background">Get In Touch</h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-around px-6 md:px-16">
        {/* Map Section */}
        <div className="w-full md:w-[50%] flex justify-center">
          <div className="w-[90%] bg-background rounded-xl shadow-lg p-6 flex flex-col items-center gap-4">
            <h2 className="text-xl font-semibold text-slate-800">
              Find Us on the Map
            </h2>
            <p className="text-sm text-slate-600 text-center">
              Our Wilmington clinic is easy to find. Stop by or plan your visit
              using the map below.
            </p>
            <div className="w-full h-64 rounded-lg overflow-hidden border border-slate-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672.0811549253938!2d-77.8988823152866!3d34.241953429701915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f5fa7433afd9%3A0xef323e99178d1274!2sWilmington%20Mental%20Health%2C%20PLLC!5e0!3m2!1sen!2sjp!4v1749665586838!5m2!1sen!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                aria-hidden="false"
              ></iframe>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="w-full md:w-[50%] flex justify-center">
          <div className="w-[90%] bg-background rounded-xl shadow-lg p-6 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-slate-800 text-center">
              Stay Updated
            </h2>
            <p className="text-sm text-slate-600 text-center">
              Sign up with your email to receive the latest updates and
              announcements.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <Button
                title={"Subscribe"}
                type={"submit"}
                className="bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
