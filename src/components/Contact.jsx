import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_w5m4u2r",
        "template_8v89irf",
        form.current,
        "ZitwI_x-DsZFlTwPP"
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,rgba(128,128,128,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <span className="inline-block border border-[#800020]/20 rounded-full px-6 py-3 text-[#800020] font-bold uppercase tracking-widest">
            Contact Me
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#800020] to-[#4B5563] bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Have an internship opportunity, project idea, or collaboration in
            mind? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-[#111111] rounded-3xl p-8 border border-[#800020]/20">
            <h3 className="text-3xl font-black text-white mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">
                    muskanguptaportfolio@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">💼</span>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-white">
                    linkedin.com/in/muskan-gupta-29b7142a3
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">💻</span>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="text-white">
                    github.com/Muskan-creates
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">
                    Gwalior, Madhya Pradesh, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#111111] rounded-3xl p-8 border border-[#800020]/20">

            <h3 className="text-3xl font-black text-white mb-8">
              Send Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full bg-black border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-[#800020]"
              />

              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full bg-black border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-[#800020]"
              />

              <textarea
                name="message"
                rows="6"
                required
                placeholder="Your Message"
                className="w-full bg-black border border-gray-700 rounded-xl p-4 text-white resize-none focus:outline-none focus:border-[#800020]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#800020] text-white font-bold hover:bg-[#990026] transition-all duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {sent && (
                <p className="text-green-500 text-center">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;