const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-white font-semibold text-sm lg:text-base">© {new Date().getFullYear()} All Rights Reserved</div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;