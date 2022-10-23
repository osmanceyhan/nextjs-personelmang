import Logo from "../ui/Logo";
import React, { useState, useEffect } from "react";

function Header()  {

  const [sticky, setSticky] = useState(false);

  // on render, set listener
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyStatus = scrollTop >= 10 ? true : false;
    setSticky(stickyStatus);
  };

  return (
    <header className={` ${sticky == true ? 'is-sticky' : ''} header h-[6.25rem] py-4 items-center absolute flex  w-full top-0 left-0 z-20 `}>
      <div className="container-fluid px-12 w-full mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo sticky={sticky} />
            <nav className="px-4 ml-[3rem]">
              <ul className="flex gap-12 uppercase ">
                <li className="nav-item">
                  <a href="#" title="Uygulamalar" className="font-medium text-sm">Uygulamalar</a>
                </li>
                <li className="nav-item">
                  <a href="#" title="Kullanıcı Hikayeleri" className="font-medium text-sm">Kullanıcı Hikayeleri</a>
                </li>
              </ul>
            </nav>
          </div> 
          <div className="flex">
            <nav className="px-4 ml-[3rem]">
              <ul className="flex  uppercase ">
                <li className="px-4 nav-item">
                  <a   title="Kaynaklar" className="font-medium text-sm ">Kaynaklar</a>
                </li>
                <li className="px-4">
                  <a href="#" title="Teklif Alın" className={` ${sticky == true ? 'btn-primary' : ' btn-white'} font-medium text-sm btn  `} >Teklif Alın</a>
                </li>
                <li>
                  <a href="#" title="Giriş Yap" className={` ${sticky == true ? 'btn-outline-primary' : ' btn-outline-white'} font-medium text-sm btn  `} >Giriş Yap</a>
                </li>
              </ul>
            </nav>
            <div className="languageSwitch">

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header