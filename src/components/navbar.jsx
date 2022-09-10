import { navbar } from "../data";

const Navbar = () => {
  const { menuItems, iconList } = navbar;

  return (
    <div className="absolute top-0 left-0 w-full py-8">
      <div className="container px-8 mx-auto">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-extrabold">
            <a href="/" className="relative">
              <span className="uppercase">p</span>
              <span className="uppercase mr-2">g</span>
              <span className="text-sm">tips</span>
              <div className="absolute w-5 -top-3 -right-5">
                <img src="images/leafs.png" alt="" />
              </div>
            </a>
          </div>

          <ul className="justify-center ml-10 flex gap-x-10">
            {menuItems.map((item, index) => {
              const { name, href } = item;

              return (
                <li key={index}>
                  <a className="uppercase" href={href}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="flex gap-x-6 text-white">
            {iconList.map((item, index) => {
              const { icon: Component, href, notification } = item;
              return (
                <li key={index}>
                  <a href={href} className="cursor-pointer relative">
                    {notification !== undefined && (
                      <div className="absolute -top-1 left-3 w-4 h-4 bg-[#ee7c18] text-[10px] font-semibold p-1 flex justify-center items-center rounded-full">
                        {notification}
                      </div>
                    )}
                    {<Component className="h-5 w-5" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
