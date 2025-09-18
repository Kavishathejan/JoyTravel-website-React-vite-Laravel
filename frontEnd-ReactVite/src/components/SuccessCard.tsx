// src/components/SuccessCard.tsx
const SuccessCard = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-center">
      <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4">
        🎉 Submission Successful!
      </h2>
      <p className="text-lg text-[var(--text-secondary)] mb-8">
        We've received your message and a member of our specialist team will be
        in touch within <strong>24 hours</strong>. In the meantime, why not
        explore some of our curated journeys?
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#destinations"
          className="inline-block rounded-lg bg-[var(--primary-color)] px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)] transition-transform transform hover:scale-105"
        >
          Explore Destinations
        </a>
        <a
          href="#home"
          className="inline-block rounded-lg bg-[var(--secondary-color)] px-8 py-3 text-base font-semibold text-[var(--text-secondary)] shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 transition-transform transform hover:scale-105"
        >
          Back to Homepage
        </a>
      </div>
    </div>
  );
};

export default SuccessCard;
