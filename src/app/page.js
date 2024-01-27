import Header from "./components/layout/header";
import Hero from "./components/layout/hero";
import HomeMenu from "./components/layout/homeMenu";
import SectionHeader from "./components/layout/sectionHeader";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      
      <section className="text-center my-16">
        <SectionHeader subHeader="Our Story" mainHeader="About Us" />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p>Lorem Ipsum on lihtsalt proovitekst, mida kasutatakse printimis- ja ladumistööstuses. See on olnud tööstuse põhiline proovitekst juba alates 1500.</p>
        <p>Lorem Ipsum on lihtsalt proovitekst, mida kasutatakse printimis- ja ladumistööstuses. See on olnud tööstuse põhiline proovitekst juba alates 1500.</p>
        <p>Lorem Ipsum on lihtsalt proovitekst, mida kasutatakse printimis- ja ladumistööstuses. See on olnud tööstuse põhiline proovitekst juba alates 1500.</p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader subHeader={'Don\'t hesitate'} mainHeader={'Contact us'} />
        <div className="mt-8">
        <a href="tel:+9055555545334" className="text-4xl underline text-gray">+90 05555 554 53 34</a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All rights reserved.
      </footer>
    </>
  );
}
