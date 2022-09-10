const Header = () => {
  return (
    <header className="grid grid-cols-2 min-h-screen bg-amber-200">
      <div className="row-start-1 col-start-1 col-end-2 bg-[#f9d1cf]"></div>
      <div className="row-start-1 col-start-2 col-end-3 bg-[#7ad592]"></div>
      <div className="row-start-1 col-start-1 col-end-3">
        <div className="container mx-auto grid grid-cols-3 gap-x-6 py-24">
          <div className="flex flex-col justify-center">
            <h2 className="font-semibold text-xl uppercase mb-4">
              Now Taking online orders
            </h2>
            <p className="mb-14">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              laboriosam adipisci eius cumque magnam quis cum amet, deserunt
              saepe quo totam. Aspernatur et voluptatem ipsam ipsum corporis?
              Molestias totam fugiat ex deleniti omnis nostrum veritatis aperiam
              beatae tempora odio eum perspiciatis eveniet architecto nisi quod
              minus, neque accusantium. Odit, nisi?
            </p>
            <div className="flex items-center text-white">
              <div>
                <a
                  href="#"
                  className="relative transition shadow-one whitespace-nowrap bg-[#2b2b2b] font-bold text-lg mr-12 py-3 px-10 rounded-lg capitalize hover:bg-[#7ad592] hover:text-gray-800 group"
                >
                  <div className="absolute transition -top-0 -right-3 w-10 h-full bg-[#2b2b2b] transform -skew-x-[25deg] rounded-tr-xl rounded-br-md group-hover:bg-[#7ad592]"></div>
                  add to cart
                </a>
              </div>
              <div className="text-right">
                <p className="text-3xl font-extrabold text-gray-800">
                  $4.97<span className="text-sm">/kg</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-[86px] mb-4 font-extrabold">
              <span className="uppercase">p</span>
              <span className="uppercase mr-2">g</span>
              <span className="text-lg">tips</span>
            </h1>
            <p className="uppercase text-3xl font-semibold">green tea</p>
            <img className="w-full" src="images/tea-bag-3.png" alt="Tea Bag" />
          </div>

          <div class="flex mt-20 flex-col items-end gap-40 justify-center">
            <div class="relative w-[148px] pt-4 pb-6 px-4 leading-normal text-[#0d5958] bg-[#ffed8e] rounded-xl shadow-one z-50 hover:scale-110 transition-all">
              <div class="absolute -top-[30px] left-0 h-20 w-[148px] transform skew-y-[155deg] rounded-tl-xl rounded-tr-3xl -z-10 bg-[#ffed8e] shadow-two"></div>
              <div class="absolute -top-10 right-4 font-bold text-sm">01</div>
              <p class="uppercase text-sm font-bold mb-3">ingredients</p>
              <h2 class="text-[24px] font-bold leading-[.8]">100%</h2>
              <h4 class="text-[18px] lowercase font-semibold">organic</h4>
            </div>
            <div class="relative w-[148px] pt-4 pb-6 px-4 leading-normal text-[#0d5958] bg-[#ffed8e] rounded-xl shadow-one z-50 hover:scale-110 transition-all">
              <div class="absolute -top-[30px] left-0 h-20 w-[148px] transform skew-y-[155deg] rounded-tl-xl rounded-tr-3xl -z-10 bg-[#ffed8e] shadow-two"></div>
              <div class="absolute -top-10 right-4 font-bold text-sm">02</div>
              <p class="uppercase text-sm font-bold mb-3">flavors</p>
              <h2 class="text-[24px] font-bold leading-[.8]">9</h2>
              <h4 class="text-[18px] lowercase font-semibold">variants</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
