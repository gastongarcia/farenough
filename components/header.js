import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="my-20">
        <Link href="/">
          <a className="text-3xl my-10">Far Enough</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
