import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute left-0 right-0 top-0 bg-gradient-to-b from-neutral-900 h-96">
      <div className="container max-w-5xl py-6 flex items-center justify-between xsm:flex-col xsm:justify-center xsm:py-4 space-y-2">
        <Link href="/">
          <div className="flex items-center gap-2">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 79" className="h-10">
              <g clip-path="url(#a)">
                <path d="M17.94 12.9 35.89 0l.05 26.08.05 26.09-18-13.18L0 25.81 17.94 12.9Z" fill="#231F20" />
                <path d="m53.86 38.99 17.99-12.97.08 26.2.08 26.19-18.07-13.23-18.07-13.23 17.99-12.96Z" fill="#72CCD8" />
                <path d="m53.88 13.19 17.98 12.99-17.94 12.88-17.93 12.87-.05-25.86L35.9.2l17.98 12.99Z" fill="#F79050" />
                <path d="m89.9 39.02 17.98 12.99-18.08 13.2-18.09 13.2.1-26.19.11-26.2 17.98 13Z" fill="#737475" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h107.88v78.41H0z" />
                </clipPath>
              </defs>
            </svg>

            <div>
              <h1 className="text-3xl font-bold leading-none">PIXEL1080</h1>
              <p className="text-orange-400 leading-none text-xxs">By DynamicBiz</p>
            </div>
          </div>
        </Link>

        <ul className="flex gap-4 items-center">
          <Link href="#services">
            <li>Services</li>
          </Link>
          <Link href="#showcase">
            <li>Showcase</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
