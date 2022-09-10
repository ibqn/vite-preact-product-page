import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const navbar = {
  menuItems: [
    { name: "flavors", href: "#" },
    { name: "store", href: "#" },
    { name: "blog", href: "#" },
    { name: "about us", href: "#" },
  ],
  iconList: [
    {
      icon: MagnifyingGlassIcon,
      href: "#",
    },
    {
      icon: ShoppingBagIcon,
      href: "#",
      notification: 3,
    },
    {
      icon: UserIcon,
      href: "#",
    },
  ],
};
