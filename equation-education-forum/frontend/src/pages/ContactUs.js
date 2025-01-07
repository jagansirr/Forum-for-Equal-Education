import React from "react";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #ffafcc, #a0e9f9, #fffbea)", // Pink, teal, and cream mix
      }}
    >
      {/* Header */}
      <header className="bg-teal-600 text-white text-center py-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">We’d love to hear from you. Get in touch with us!</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium">Phone (Optional)</label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-between">
            {/* Address and Contact Info */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">Contact Details</h2>
              <p className="text-gray-700">
                <strong>Address:</strong> <i>Nacharam, Secundrabad, Telengana State</i>
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:Equaleducation@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  Equaleducation@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong>{" "}
                <a href="tel:+91-9642446999" className="text-blue-600 hover:underline">
                  +91-9642446999
                </a>
              </p>
            </div>

            {/* Google Map */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Find Us Here</h2>
              <div className="w-full h-64">
                <iframe
                  title="Google Map"
                  src={
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.769061295321!2d78.54145357085208!3d17.422867065274485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9915d2ec30ab%3A0x91c70488b272f81!2sRBL%20Bank%20Ltd%20-%20Nacharam%20Branch%20%26%20ATM!5e0!3m2!1sen!2sin!4v1733721800083!5m2!1sen!2sin"
                  }
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full rounded-md shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
