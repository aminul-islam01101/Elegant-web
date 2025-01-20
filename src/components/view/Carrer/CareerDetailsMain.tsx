const CareerDetailsMain = () => {
    return (
        <section className="bg-black text-white py-16">
    <div className="max-w-[1400px] mx-auto text-white py-10 px-4">
                {/* Title Section */}
                <h1 className="text-4xl font-bold text-start text-white mb-4">
                    Start Your Career In <span className="text-red-600 ">Digital <br/> Agency</span> 
                </h1>
                <h1 className="text-4xl font-bold text-start text-white mb-4">
                Demand Generation <span className="text-red-600 ">Manager</span> 
                </h1>
                <p className="text-start text-gray-300 leading-7 mb-10">
                    Proin in erat porttitor, ornare turpis nec, tristique nisi. Donec eu nibh eu sapien gravida ullamcorper in eleifend libero. Aliquam erat volutpat. Curabitur facilisis pharetra orci non malesuada. Nulla sit amet faucibus dui, eleifend pellentesque augue.
                </p>

                {/* Job Description */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Job Description :
                    </h2>
                    <p className="text-gray-300 leading-7">
                        Donec imperdiet magna semper ex tincidunt feugiat. In dolor enim, faucibus vel aliquam quis, aliquam non urna. Quisque odio erat, volutpat sed lacinia ac, egestas et tellus. Morbi ac velit at sem aliquet posuere et at nisi.
                    </p>
                </div>

                {/* What You Will Do */}
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        What You Will Do :
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-4">
                        <li>
                            Vivamus nec venenatis est. In elit lectus, maximus eget enim id, pharetra egestas mauris.
                        </li>
                        <li>
                            Ultricies rutrum. Praesent quis ipsum ut lorem maximus luctus nec lacinia magna.
                        </li>
                        <li>
                            Quis finibus volutpat. Vestibulum vulputate condimentum dictum.
                        </li>
                        <li>
                            Urna euismod lorem, non commodo massa nibh id velit. Nam varius tellus vitae sapien.
                        </li>
                    </ul>
                </div>

                {/* Apply Button */}
                <div className="mt-10 text-start">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg">
                        Apply Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CareerDetailsMain;
