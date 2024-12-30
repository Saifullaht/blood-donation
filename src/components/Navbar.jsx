import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

// AcmeLogo component
export const AcmeLogo = () => {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypZVWVC0SkY8QXsmMI0yA38Pxy_9wJXOSNQ&s"
        alt="Acme Logo"
        width="36"
        height="36"
      />
    </div>
  );
};

// Main App Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "home",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 w-[100%] z-50 shadow-lg"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-red-700 hover:text-red-500 transition-all duration-300">
            Blood Donate
          </p>
        </NavbarBrand>

        <NavbarItem>
          {/* Additional Navbar Items if needed */}
        </NavbarItem>

        <NavbarItem isActive>
          <Link
            aria-current="page"
            href="/"
            className="hover:text-blue-500 transition-all duration-300"
          >
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="About"
            className="hover:text-blue-500 transition-all duration-300"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="Contact"
            className="hover:text-blue-500 transition-all duration-300"
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="login"
            className="bg-red-500 hover:bg-red-700 text-white transition-all duration-300 px-4 py-2 rounded"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            href="signup"
            variant="flat"
            className="bg-red-500 hover:bg-red-700 text-white transition-all duration-300 rounded"
          >
            Sign Up
          </Button>
        </NavbarItem>

        {/* Profile Image with Red Border and Rounded Style */}
        <NavbarItem>
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg" // Add your profile image URL here
            alt="Profile"
            className="border-3 border-red-500 rounded-full w-10 h-10 hover:border-red-700 transition-all duration-400"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full hover:bg-gray-200 transition-all duration-300"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
