import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about my-20 font-serif">
        <div className="p-40 text-center">
          <div>
            <h2 className="text-4xl font-extrabold">Eco Prod</h2>
            <div class="max-w-7xl mx-auto px-6 py-10">
              <div class="bg-white rounded-lg shadow-md p-8 opacity-80">
                <h1 class="text-4xl font-bold text-green-600 mb-4 text-center">
                  About Us
                </h1>

                <p class="text-lg mb-6 text-gray-700 text-center">
                  Welcome to{" "}
                  <span class="font-semibold text-green-500">Eco Prod</span>,
                  your trusted destination for eco-friendly products.
                </p>

                <section class="mb-6">
                  <h2 class="text-2xl font-semibold mb-2 text-green-700">
                    Who We Are
                  </h2>
                  <p class="text-gray-700 leading-relaxed">
                    Eco Prod is more than just an e-commerce platform; we are a
                    community passionate about sustainability, nature, and
                    innovation. Our mission is to promote green living by
                    offering products that are **eco-conscious, reliable, and
                    stylish**.
                  </p>
                </section>

                <section class="mb-6">
                  <h2 class="text-2xl font-semibold mb-2 text-green-700">
                    What We Offer
                  </h2>
                  <ul class="list-disc pl-6 space-y-2 text-gray-700">
                    🌿 <strong>Fresh Farm Products</strong>: Vegetables, fish,
                    and farm-grown meat delivered fresh. <br />👜{" "}
                    <strong>Jute Products</strong>: Natural, durable, and
                    stylish alternatives like bags and home decor. <br />👕{" "}
                    <strong>Sustainable Clothing</strong>: High-quality,
                    eco-friendly fabrics. 🪵 <strong>Wooden Products</strong>:
                    Handcrafted, sustainably sourced wooden items.
                  </ul>
                </section>

                <section class="mb-6">
                  <h2 class="text-2xl font-semibold mb-2 text-green-700">
                    Our Mission
                  </h2>
                  <p class="text-gray-700 leading-relaxed">
                    At Eco Prod, we aim to reduce pollution, support local
                    farmers and artisans, and inspire people to embrace an
                    eco-friendly lifestyle. When you shop with us, you're
                    contributing to a cleaner, greener planet.
                  </p>
                </section>

                <section class="mb-6">
                  <h2 class="text-2xl font-semibold mb-2 text-green-700">
                    Why Choose Us?
                  </h2>
                  <div class="space-y-2">
                    <p>
                      🌱 <strong>Sustainable Products</strong>: Thoughtfully
                      selected for eco-friendliness.
                    </p>
                    <p>
                      🤝 <strong>Supporting Local Communities</strong>:
                      Partnering with local farmers and artisans.
                    </p>
                    <p>
                      🚚 <strong>Fresh & Direct</strong>: Farm-fresh products
                      delivered to your home.
                    </p>
                    <p>
                      🌎 <strong>A Greener Future</strong>: Reduce waste and
                      carbon footprint.
                    </p>
                  </div>
                </section>

                <section class="text-center mb-6">
                  <h2 class="text-2xl font-semibold text-green-700 mb-2">
                    Join Us on Our Green Journey
                  </h2>
                  <p class="text-gray-700 leading-relaxed">
                    Explore our range of eco-friendly products and be part of
                    the sustainable revolution. Together, we can make small
                    changes that have a big impact.
                  </p>
                </section>

                <section class="text-center">
                  <h2 class="text-2xl font-semibold text-green-700 mb-4">
                    Contact Us
                  </h2>
                  <p class="text-gray-700">
                    📧 Email:{" "}
                    <a
                      href="mailto:support@ecoprod.com"
                      class="text-blue-500 underline"
                    >
                      support@ecoprod.com
                    </a>
                  </p>
                  <p class="text-gray-700">
                    🌐 Website:{" "}
                    <a href="#" class="text-blue-500 underline">
                      www.ecoprod.com
                    </a>
                  </p>
                  <p class="text-gray-700">📞 Phone: +880 1637209558</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
