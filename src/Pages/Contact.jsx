import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c4007cb7] to-[#000000] shadow-lg shadow-[#862351] card-hover smooth text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-4">
          Contact <span className="text-pink-500">Us</span>
        </h1>
        <p className="text-center opacity-80 mb-12">
          Have questions, feedback, or partnership inquiries? We’d love to hear
          from you!
        </p>

        {/* Contact Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-[#1e2537] p-8 rounded-xl shadow-lg hover:shadow-pink-500/20 transition">
            <div className="text-pink-500 text-3xl mb-4">
              <FaPhoneAlt />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="opacity-80"> +880 1234-567890 </p>
          </div>

          {/* Email */}
          <div className="bg-[#1e2537] p-8 rounded-xl shadow-lg hover:shadow-pink-500/20 transition">
            <div className="text-pink-500 text-3xl mb-4">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="opacity-80"> support@gamehub.com </p>
          </div>

          {/* Address */}
          <div className="bg-[#1e2537] p-8 rounded-xl shadow-lg hover:shadow-pink-500/20 transition">
            <div className="text-pink-500 text-3xl mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="opacity-80"> Dhaka, Bangladesh </p>
          </div>
        </div>

        {/* Message Form */}
        <div className="mt-16 bg-[#1e2537] p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#131a2a] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#131a2a] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="bg-[#131a2a] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>

            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 transition text-white py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
