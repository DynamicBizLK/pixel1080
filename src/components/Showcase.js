import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const Showcase = ({ posts }) => {
  const imgBuilder = imageUrlBuilder({
    projectId: "euci82jz",
    dataset: "production",
  });

  return (
    <section className="container max-w-5xl py-4" id="showcase">
      <div>
        <h1 className="text-4xl font-bold">Showcase</h1>
        <p className="mt-2">Here are a few of the drawings created by our incredibly gifted graphic designers.</p>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 xmd:grid-cols-2 sm:grid-cols-1">
        {posts.map(({ title, publishedAt, mainImage }) => {
          console.log(title, publishedAt, mainImage);

          const imageSrc = imgBuilder.image(mainImage).url();

          return (
            <div>
              <Image src={imageSrc} width={400} height={200} className="w-full h-auto rounded-md" />
              <p className="mt-2">{title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Showcase;
