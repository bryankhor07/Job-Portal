import React from "react";
import { Link } from "react-router-dom";
import HiredLogo from "../../public/HiredLogo.png";
import { Button } from "./ui/Button";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src={HiredLogo} className="h-20 rounded-full" />
        </Link>
        <Button>Login</Button>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </nav>
    </>
  );
};

export default Header;
