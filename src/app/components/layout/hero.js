import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Where Flavor Meets Freshness: Pizza Passion!
        </h1>
        <p className="my-4 text-gray-500">
          We invite all pizza enthusiasts to this delightful feast filled with
          exquisite aromas because when it comes to pizza, we are the ultimate
          destination!
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 text-semibold">
            Learn More <Right />{" "}
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
