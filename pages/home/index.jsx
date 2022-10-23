import homeStyle from '../../styles/Home.module.css'
import React, { useState } from 'react';

const Index = () => {
  return (
    <div className='bg-primary  w-full flex justify-center py-32'>
        <div className='container text-center pb-[400px] relative'> 
            <h1 className='font-semibold text-white text-[2.5rem]'>Dünyanın işini kolaylaştırıyoruz</h1>
            <h2 className='text-white text-[1rem] font-light'>Personel yönetimi, performans değerlendirme, ücret değerlendirme ve vardiya tek yazılımda</h2>
            <a href="https://www.youtube.com/watch?v=zP16P1OmpX4" className={homeStyle.play_btn+' mt-8'}  >
                <img src="https://kolayik.com/wp-content/themes/kolay-ik-theme/assets/img/icon/triangle.svg" alt="" />
            </a>
            <div className="absolute left-50 bottom-[0px] translate-y-2/4 flex ">
                <img className="promotion__img-web" src="https://kolayik.com/wp-content/uploads/2020/09/kolay-ik-uygulama-ekrani.png" alt="" />
                <img className="promotion__img-mobile" src="https://kolayik.com/wp-content/uploads/2021/06/kolay-ik-mobil-uygulama@1x-1.png"  alt=""  />
                <div className="oval"></div>
                <div className="oval oval--bordered"></div>
                <div className="triangle"></div>
		        </div>
        </div>
    </div>
  )
}

export default Index