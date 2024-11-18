import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import logo from "../../public/text_logo.png";
import { Share2 } from "lucide-react";
import user  from "../../public/user.png"
import { cn } from "@/lib/utils"

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}
const Navbar : React.FC<NavbarProps> = ({ className, ...props }) => {
  return (
    <div className={cn('w-full bg-navbardark flex items-center justify-between px-6 h-16',className)} {...props}>
      {/* Logo and Text */}
      <div className="flex items-center space-x-2">
        <span className="text-white text-lg font-semibold">
          <Image
            src={logo}
            alt="logo"
            className="inline-block"
          />
        </span>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-4">
          {/* Share Link */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="#" className="text-white flex items-center gap-2">
                <Share2 className="h-5 w-5" />
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Log in Button with User Icon */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/signup" className="flex items-center gap-2 text-white">
                Sign up
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Sign up Button */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Button className="bg-purplev1 text-black px-4 py-2 rounded-lg">
                <Image
                 src={user}
                 alt="usericon"
                 className="h-5 w-5" 
                 />
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
