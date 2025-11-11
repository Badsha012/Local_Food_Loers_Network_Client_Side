import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // এখানে তুমি পরে backend যুক্ত করতে পারবে
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16" id="contact">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-800">Get in Touch</h3>
            <p className="text-gray-600 leading-relaxed">
              Have any questions, feedback, or partnership ideas?  
              We’d love to hear from you! Just drop us a message below.
            </p>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Mail className="text-green-600" />
                <p>support@localfoodlovers.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-600" />
                <p>+880 1700-123456</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-green-600" />
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-5 border border-green-100"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-2.5 rounded-lg hover:bg-green-700 transition"
            >
              <Send size={18} />
              Send Message
            </button>

            {submitted && (
              <p className="text-green-600 font-medium text-center pt-2">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
