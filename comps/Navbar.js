import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between mt-5 pt-5 navbar navbar-light ">
      <div>
        <Image
          src="/coderock-logo.png"
          className=""
          alt="site logo"
          width={128}
          height={128}
        />
      </div>
    
      <Link href="/">
        <a className="bg-danger rounded-3 text-white p-3">Home</a>
      </Link>
      <Link href="/about">
        <a className="bg-danger rounded-3  text-white p-3" >About</a>
      </Link>
      <Link href="/ninjas/">
        <a className="bg-danger rounded-3 text-white p-3">Ninja Listing</a>
      </Link>
      
    </nav>
  );
};

export default Navbar;
