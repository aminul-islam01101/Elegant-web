

const Strategy = () => {
    return (
        <section className="bg-black text-white py-16">
             <div className="max-w-[1400px] mx-auto text-white py-10 px-4">
      {/* Quote Section */}
      <div className="text-center mb-12">
        <p className="text-lg md:text-2xl font-light leading-relaxed">
          “ Business Strategy Refers To The Set Of{" "}
          <span className="text-red-600 font-semibold">Decisions And Actions</span> That A <br />
          Company Formulates To{" "}
          <span className="inline-block bg-white text-black px-2 rounded">Achieve</span>{" "} or gather
          Its Long-Term Goals And Objectives. It <br /> Involves{" "}
          <span className="text-red-600 font-semibold">
            Analyzing The Company's
          </span>{" "}
          Internal Strengths And Weaknesses, <br /> Understanding{" "}
          <span className="inline-block mx-2">
            <span className="w-3 h-3 bg-red-600 inline-block rounded-full"></span>
            <span className="w-3 h-3 bg-red-600 inline-block rounded-full mx-1"></span>
            <span className="w-3 h-3 bg-red-600 inline-block rounded-full"></span>
          </span>{" "}
          External Market Conditions ”
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4  text-center">
        <div>
          <p className="text-3xl md:text-4xl font-bold">25K+</p>
          <p className="text-sm md:text-base font-light">Project Completed</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-bold">15K+</p>
          <p className="text-sm md:text-base font-light">Happy Customer</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-bold">9K+</p>
          <p className="text-sm md:text-base font-light">Year Experience</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-bold">56+</p>
          <p className="text-sm md:text-base font-light">Achievements</p>
        </div>
      </div>
    </div>
            
        </section>
    );
};

export default Strategy;