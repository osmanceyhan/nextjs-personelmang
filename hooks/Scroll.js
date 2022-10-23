
import React, { useEffect } from "react";

export default function Scroll() {
  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(() => {
        if (scroll >= window.scrollY && window.scrollY > 10) {
          document.getElementById('header').classList.add('sticky')
        } else {
          document.getElementById('header').classList.remove('sticky')
        }

        scroll = window.scrollY
      }, 10)
    }
  }, []);
  
  return null;
}