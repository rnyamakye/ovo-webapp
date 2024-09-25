import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-elements-stroke text-page-color sm:px-5 lg:px-24 py-[50px] flex flex-col gap-5">
      <div className="flex sm:flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5">
          <div>
            <img
              src="/public/66aab3f2b5f3796993191789_Main Logo White.svg"
              alt="Logo"
              className="sm:w-[150px]"
            />
          </div>
          <div>
            <Link>
              <h1 className="sm:text-2xl lg:text-4xl font-semibold">
                Transform Your world with HealthSquare
              </h1>
            </Link>
          </div>
          <div>
            <p>
              Aliquam et tellus urna. Phasellus egetadipiscing elit. Mauris id
              nunc odio. Aliquam et tellus urna.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold">MAIN PAGES</h2>
          <ul>
            <li className="flex flex-col gap-2">
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Services</Link>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-lg font-semibold">SOCIAL MEDIA</h2>
          <ul>
            <li className="flex flex-col gap-2">
              <Link>Instagram</Link>
              <Link>Facebook</Link>
              <Link>LinkedIn</Link>
              <Link>Twitter</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-lg font-semibold">WEBFLOW STUFF</h2>
          <ul>
            <li className="flex flex-col gap-2">
              <Link>Instagram</Link>
              <Link>Facebook</Link>
              <Link>LinkedIn</Link>
              <Link>Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-5 lg:flex justify-between">
        <p>
          CREATED BY <u>OVERSIGHT</u>
        </p>
        <p>
          POWERED BY <u>WEBFLOW</u>
        </p>
      </div>
    </footer>
  );
}
