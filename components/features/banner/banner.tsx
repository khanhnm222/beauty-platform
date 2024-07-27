const Banner = () => {
  return (
    <section className="w-full relative bg-[url(/banner-1.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-primary/40 sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-primary">
              {" "}
              Better version.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Make your life more beautiful and happier!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <button
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/80 focus:outline-none focus:ring active:bg-primary/70 sm:w-auto"
            >
              Get Started
            </button>

            <button
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-primary/80 focus:outline-none focus:ring active:text-primary/70 sm:w-auto"
            >
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
