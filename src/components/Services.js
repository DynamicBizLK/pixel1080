const Services = () => {
  return (
    <section className="container max-w-5xl flex justify-between py-4 gap-8 xmd:flex-col" id="services">
      <div className="w-1/3 xmd:w-full">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="mt-2">We do all kind of graphic designing works that suits your needs.</p>
      </div>

      <div className="w-2/3 grid grid-cols-3 gap-4 text-lg xmd:w-full sm:grid-cols-2">
        <div className="bg-neutral-800 p-4 rounded">
          <h3>Logos</h3>
        </div>
        <div className="bg-neutral-800 p-4 rounded">
          <h3>Cover Pages</h3>
        </div>
        <div className="bg-neutral-800 p-4 rounded">
          <h3>Web Backgrounds</h3>
        </div>
        <div className="bg-neutral-800 p-4 rounded">
          <h3>Character Designing</h3>
        </div>
        <div className="bg-neutral-800 p-4 rounded">
          <h3>Name Cards</h3>
        </div>
        <div className="bg-neutral-800 p-4 rounded">
          <h3>Visiting Cards</h3>
        </div>
        <div className="bg-neutral-800 p-4 rounded">
          <h3>Photography</h3>
        </div>
        <div className="bg-neutral-800 p-4 rounded">
          <h3>Vector Arts</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
