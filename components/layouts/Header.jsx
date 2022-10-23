import React, { useEffect, useState } from "react";
import Logo from "../ui/Logo"

  
let timeout
let scroll = 0
function Header()  {

  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(() => {
        if (scroll >= window.scrollY && window.scrollY > 10) {
          document.getElementById('header').classList.add('fixed')
        } else {
          document.getElementById('header').classList.remove('fixed')
        }

        scroll = window.scrollY
      }, 10)
    }
  }, []);

   
  return (
    <header id="header"   className='header h-[6.25rem] py-4 items-center absolute flex  w-full top-0 left-0 z-20'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <nav className="px-4 ml-[3rem]">
              <ul className="flex gap-12 uppercase ">
                <li class="">
                  <a href="#" title="Uygulamalar" className="font-medium text-sm">Uygulamalar</a>
                </li>
                <li>
                  <a href="#" title="Kullanıcı Hikayeleri" className="font-medium text-sm">Kullanıcı Hikayeleri</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex">
            <nav className="px-4 ml-[3rem]">
              <ul className="flex  uppercase ">
                <li className="px-4">
                  <a href="#" title="Kaynaklar" className="font-medium text-sm" onClick={() => setCount(count + 1)}>Kaynaklar</a>
                </li>
                <li className="px-4">
                  <a href="#" title="Teklif Alın" className="font-medium text-sm btn btn-primary">Teklif Alın</a>
                </li>
                <li>
                  <a href="#" title="Giriş Yap" className="font-medium text-sm btn btn-outline-primary">Giriş Yap</a>
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