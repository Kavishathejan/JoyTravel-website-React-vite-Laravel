import { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const countries = ["Japan", "Italy", "Greece", "Brazil", "Iceland", "Maldives"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          country,
          subject,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setCountry("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Reset success message after 5s
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (submitted) {
      timer = setTimeout(() => setSubmitted(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center 
                 bg-gradient-to-b from-black via-gray-800 to-black"
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-16">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="flex flex-col  justify-center text-white space-y-8 ">
            <h2 className="text-left text-4xl md:text-5xl font-serif font-bold text-white mb-12">
              Get in Touch
            </h2>
            <p className="text-lg leading-relaxed font-sans">

              We're here to help you plan your next luxury adventure. Reach out
              with any questions or to start your booking process.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <a
                  href="tel:0115552555"
                  className="block text-lg text-yellow-300 hover:text-yellow-400"
                >
                  011 555 2 555
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <a
                  href="mailto:contact@joytravel.com"
                  className="block text-lg text-yellow-300 hover:text-yellow-400"
                >
                  contact@joytravel.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl">
            {!submitted ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {error && (
                  <p className="text-red-400 text-sm font-semibold">{error}</p>
                )}

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 rounded-lg border border-gray-600 bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 rounded-lg border border-gray-600 bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400"
                  required
                />


                <div>
                  <Listbox value={country} onChange={setCountry}>
                    {({ open }) => (
                      <div className="relative">
                        <Listbox.Button className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-600 bg-white/20 text-white focus:ring-2 focus:ring-yellow-400">
                          <span>{country || "Select your destination"}</span>
                          {open ? <FaChevronDown /> : <FaChevronRight />}
                        </Listbox.Button>

                        <Listbox.Options className="absolute mt-1 w-full bg-black border border-gray-600 rounded-md z-10 max-h-60 overflow-auto">
                          {countries.map((c) => (
                            <Listbox.Option
                              key={c}
                              value={c}
                              className={({ active }) =>
                                `cursor-pointer select-none p-4 ${active ? "bg-yellow-400 text-black" : "text-white"
                                }`
                              }
                            >
                              {c}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </div>
                    )}
                  </Listbox>
                </div>


                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-4 rounded-lg border border-gray-600 bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <textarea
                  rows={5}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-4 rounded-lg border border-gray-600 bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400"
                  required
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-yellow-400 text-black font-bold rounded-lg shadow-md hover:bg-yellow-500 transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-4">✅ Thank You!</h2>
                <p className="mb-6">
                  We've received your message. Our team will respond within{" "}
                  <strong>24 hours</strong>.
                </p>
                <a
                  href="#home"
                  className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
                >
                  Back to Homepage
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
