import React from "react";
import { Mail, MapPin, PhoneCall, Github, Twitter } from "lucide-react";

export const metadata = {
  title: "Contact Us - Get in Touch with Webrizen",
  description:
    "Have questions or inquiries? Contact Webrizen to learn more about our services, request a quote, or discuss potential collaborations. Our team is here to assist you!",
  authors: [
    {
      name: "Webrizen Team",
      url: "https://webrizen.com",
    },
  ],
  publisher: "Webrizen",
};

const Page = () => {
  return (
    <section className="md:container mx-auto md:p-14 p-4">
      <div className="flex flex-col items-center justify-center gap-5 px-5 py-7">
        <h1 className="font-sora text-5xl font-extrabold">Contact Us</h1>
        <p className="text-center text-lg font-medium text-gray-500">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div className="grid grid-cols-7 rounded-xl border dark:border-[rgba(225,225,225,0.2)] dark:bg-[rgba(225,225,225,0.1)] bg-white p-3 sm:min-h-[600px]">
        <div className="col-span-7 flex flex-col items-start justify-between gap-10 rounded-xl bg-black p-10 sm:col-span-3">
          <div>
            <h1 className="font-sora text-3xl font-medium text-white">Contact Information</h1>
            <p className="text-left font-medium text-gray-500">Say something to start a live chat!</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-7">
            <p className="flex items-center gap-4 text-lg font-medium text-white">
              <Mail size={20} />
              <a href="mailto:webrizen@gmail.com" className="font-rubik text-sm font-light text-white">webrizen@gmail.com</a>
            </p>
            <p className="flex items-center gap-4 text-lg font-medium text-white">
              <MapPin size={20} />
              <a href="https://maps.app.goo.gl/jx8gN3XkCvFa8T8c9" target="_blank" rel="noopener noreferrer" className="font-rubik text-sm font-light text-white">West Bengal, India</a>
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <a href="https://x.com/webrizen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl text-slate-300 hover:text-slate-100 cursor-pointer backdrop-blur-3xl hover:bg-[rgba(225,225,225,0.1)] flex justify-center items-center">
              <Twitter size={20} />
            </a>
            <a href="https://github.com/Webrizen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl text-slate-300 hover:text-slate-100 cursor-pointer backdrop-blur-3xl hover:bg-[rgba(225,225,225,0.1)] flex justify-center items-center">
              <Github size={20} />
            </a>
          </div>
        </div>

        <form
          action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
          method="POST"
          className="col-span-7 flex flex-col items-start justify-start gap-10 p-5 *:w-full sm:col-span-4 sm:p-10"
        >
          <input type="hidden" name="_next" value="https://webrizen.vercel.app/thanks" />
          <input type="hidden" name="_subject" value="Someone is trying to contact - New Request ✨" />

          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="border-b-2 bg-transparent px-2 py-3 font-rubik text-sm text-black dark:text-white focus:outline-none focus:border-primary"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="border-b-2 bg-transparent px-2 py-3 font-rubik text-sm text-black dark:text-white focus:outline-none focus:border-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-b-2 bg-transparent px-2 py-3 font-rubik text-sm text-black dark:text-white focus:outline-none focus:border-primary"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="border-b-2 bg-transparent px-2 py-3 font-rubik text-sm text-black dark:text-white focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div className="flex flex-col justify-start gap-3">
            <p className="font-rubik text-sm font-semibold dark:text-slate-50 text-black">Select subject?</p>
            <div className="flex flex-wrap items-center gap-3">
              {['General Inquiry', 'Partnership', 'Support', 'Other'].map((label, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name={`subject_${label.toLowerCase().replace(' ', '_')}`}
                    className="accent-primary"
                  />
                  <span className="text-sm font-medium dark:text-slate-50 text-black">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Enter your message"
            rows={6}
            className="w-full border-b-2 bg-transparent px-2 py-3 font-rubik text-sm text-black dark:text-white focus:outline-none focus:border-primary"
            required
          ></textarea>

          <button
            type="submit"
            className="rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-900 transition-all text-sm font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;