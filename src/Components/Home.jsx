import React from 'react'

export default function Home() {
  return (
    <div class="w-sm lg:w-6xl mx-auto pt-2 pb-2 grid gird-cols-1 lg:grid-cols-[25%_75%]">
      <aside class="p-3">
        <section>
          <h2 class="uppercase text-center text-2xl pt-3 pb-3">Categories</h2>
          <ul class="border-2 border-orange-400 p-2 rounded-lg">
            <li>
              <a href="">Running</a>
            </li>
            <li>
              <a href="">Casual</a>
            </li>
            <li>
              <a href="">Sneaker</a>
            </li>
            <li>
              <a href="">Formal</a>
            </li>
          </ul>
        </section>
        <section>
          <h2 class="uppercase text-center text-2xl pt-3 pb-3">Brand</h2>
          <ul class="border-2 border-orange-400 p-2 rounded-lg">
            <li>
              <input type="checkbox" class="border" />
              <a href="">New Balance</a> <span class="float-end">(15)</span>
            </li>
            <li>
              <a href="">Addidas</a>
            </li>
            <li>
              <a href="">Puma</a>
            </li>
            <li>
              <a href="">Nike</a>
            </li>
          </ul>
        </section>
        <figure class="mt-2 mb-2">
          <img class="w-full" src="images/shipping.jpg" alt="Shipping" />
        </figure>
      </aside>
      <div class="p-3">
        <section>
          <h2 class="uppercase text-center text-2xl pt-3 pb-3">
            Upcoming Products
          </h2>
          <div class="grid grid-cols-2 lg:grid-cols-3">
            <figure class="text-center mt-2">
              <img class="" src="images/product1.jpg" alt="" />
              <figcaption>
                <h4 class="pt-2">
                  <s>2000</s> 1499
                </h4>
                <p class="pt-2 pb-2">Product 1</p>
                <button class="bg-orange-500 p-2 rounded-lg text-white">
                  Add To Cart
                </button>
              </figcaption>
            </figure>
            <figure class="text-center mt-2">
              <img class="" src="images/product2.jpg" alt="" />
              <figcaption>
                <h4 class="pt-2">
                  <s>2000</s> 1499
                </h4>
                <p class="pt-2 pb-2">Product 2</p>
                <button class="bg-orange-500 p-2 rounded-lg text-white">
                  Add To Cart
                </button>
              </figcaption>
            </figure>
            <figure class="text-center mt-2">
              <img class="" src="images/product3.jpg" alt="" />
              <figcaption>
                <h4 class="pt-2">
                  <s>2000</s> 1499
                </h4>
                <p class="pt-2 pb-2">Product 3</p>
                <button class="bg-orange-500 p-2 rounded-lg text-white">
                  Add To Cart
                </button>
              </figcaption>
            </figure>
            <figure class="text-center mt-2">
              <img class="" src="images/product4.jpg" alt="" />
              <figcaption>
                <h4 class="pt-2">
                  <s>2000</s> 1499
                </h4>
                <p class="pt-2 pb-2">Product 4</p>
                <button class="bg-orange-500 p-2 rounded-lg text-white">
                  Add To Cart
                </button>
              </figcaption>
            </figure>
            <figure class="text-center mt-2">
              <img class="" src="images/product5.jpg" alt="" />
              <figcaption>
                <h4 class="pt-2">
                  <s>2000</s> 1499
                </h4>
                <p class="pt-2 pb-2">Product 5</p>
                <button class="bg-orange-500 p-2 rounded-lg text-white">
                  Add To Cart
                </button>
              </figcaption>
            </figure>
            <figure class="text-center mt-2">
              <img class="" src="images/product6.jpg" alt="" />
              <figcaption>
                <h4 class="pt-2">
                  <s>2000</s> 1499
                </h4>
                <p class="pt-2 pb-2">Product 5</p>
                <button class="bg-orange-500 p-2 rounded-lg text-white">
                  Add To Cart
                </button>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
}
