const ProgressBar = ({ label, percentage }) => (
  <div className="mb-8 ">
    <div className="flex justify-between items-center mb-3">
      <span className="text-xs font-black text-gray-900 uppercase tracking-widest">
        {label}
      </span>
      <span className="text-xs font-black text-orange-500">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
      <div
        className="bg-orange-500 h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const ServiceCard = ({ title, icon }) => (
  <div className=" bg-white rounded-[40px] p-10 flex flex-col items-center text-center group hover:bg-orange-50 transition-all duration-300 border border-gray-50 hover:border-orange-100 shadow-sm hover:shadow-xl">
    <div className="text-orange-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h4 className="text-sm font-black text-gray-900 leading-tight uppercase tracking-tighter">
      {title.split(" ").map((word, i) => (
        <span key={i} className="block">
          {word}
        </span>
      ))}
    </h4>
  </div>
);

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-20 items-center">
      <div className="w-full lg:w-1/2">
        <span className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">
          Our Expertise
        </span>
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
          Pet Care With Love
        </h2>
        <p className="font-['Comic_Sans_MS'] text-gray-500 leading-relaxed mb-12 text-lg">
          We offer high-class care services and activities for your pets. Your
          pet will receive premium meals, daily exercise, and play time from our
          professional team.
        </p>

        <div className="space-y-2 font-['Comic_Sans_MS']">
          <ProgressBar label="Dog Boarding & Care" percentage={88} />
          <ProgressBar label="Cat Training & Fun" percentage={76} />
          <ProgressBar label="Exotic Pet Wellness" percentage={64} />
        </div>
      </div>

      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
        <ServiceCard
          title="Best Grooming"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="6" cy="6" r="3" />
              <path d="M8.12 8.12 12 12" />
              <path d="M20 4 8.12 15.88" />
              <circle cx="6" cy="18" r="3" />
              <path d="M8.12 15.88 12 12" />
            </svg>
          }
        />
        <ServiceCard
          title="Dog Training"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            </svg>
          }
        />
        <ServiceCard
          title="Special Diet"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
              <path d="M8.5 8.5 12 12" />
            </svg>
          }
        />
        <ServiceCard
          title="Vet Services"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m10.5 20.5 8.5-8.5" />
              <path d="m3.5 13.5 8.5-8.5" />
              <path d="M2 21h20" />
            </svg>
          }
        />
      </div>
    </section>
  );
};

export default Services;
