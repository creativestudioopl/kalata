import Image from 'next/image';

interface Project {
  image: string;
  category: string;
  title: string;
  alt: string;
}

const projects: Project[] = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_10_cut-2.jpg",
    category: "Wykończenie wnętrz",
    title: "Apartament we Wrocławiu",
    alt: "Wykończenie wnętrz - Apartament we Wrocławiu",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_8_cut-3.jpg",
    category: "Łazienka",
    title: "Salon kąpielowy w beżowej aranżacji",
    alt: "Łazienka - Salon kąpielowy w beżowej aranżacji",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_22_cut-4.jpg",
    category: "Generalny wykonawca",
    title: "Budynek jednorodzinny z lat 80'",
    alt: "Generalny wykonawca - Budynek jednorodzinny z lat 80'",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_19_cut-5.jpg",
    category: "Lokal usługowy",
    title: "Salon bielizny damskiej",
    alt: "Lokal usługowy - Salon bielizny damskiej",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_61_cut-6.jpg",
    category: "Remont mieszkania",
    title: "Remont mieszkania z lat 70-tych",
    alt: "Remont mieszkania - Remont mieszkania z lat 70-tych",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fc01e807-08a1-449d-b059-403915dde895-mak-bud-com-pl/assets/images/Mak-Bud_Realizacje_56_cut-7.jpg",
    category: "Wykończenie wnętrz",
    title: "Apartament we Wrocławiu",
    alt: "Wykończenie wnętrz - Apartament we Wrocławiu",
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[42px] font-bold leading-[1.3] text-header-foreground">
            Poznaj nasze realizacje
          </h2>
          <p className="mt-5 text-[15px] leading-[1.8] text-medium-gray">
            Przez ponad 30 lat zrealizowaliśmy około 400 projektów dla ponad 250 inwestorów. Dużą część z nich wykonaliśmy dla stałych klientów.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
             <a key={index} href="#" className="group relative block overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={800}
                  height={533}
                  className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-70 p-6 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                  <div className="translate-y-4 transform transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                    <p className="text-lg font-medium text-white">{project.category}</p>
                    <h3 className="mt-1 text-[22px] font-bold text-white">{project.title}</h3>
                  </div>
                </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;