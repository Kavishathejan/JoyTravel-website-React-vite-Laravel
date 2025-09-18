const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Stay Updated with <span className="text-yellow-400">JoyTravel</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Subscribe to our newsletter and get exclusive luxury travel deals,
          tips, and updates straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg focus:outline-none text-black"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
