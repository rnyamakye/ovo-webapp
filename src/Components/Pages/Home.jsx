export default function Home() {
  return (
    <main>
      <header>
        <div>
          <div>
            <div className="p-5 mx-5 my-2 flex flex-col gap-5 bg-acent-color text-page-color">
              <h1 className="text-3xl">
                Compassionate Care for Every Patient like you
              </h1>
              <p className="text-sm">
                Providing Exceptional and Compassionate Care with Advanced
                Medical Solutions for Every Patient's
              </p>
              <button className="bg-elements-bg text-button-color sm:w-full sm:py-3 my-5">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img
              src="/public/66ab7fa16ad5d5e3f1c520cc_Hero Image.jpg"
              alt="hero-image"
              className="lg"
            />
          </div>
        </div>
      </header>
    </main>
  );
}
