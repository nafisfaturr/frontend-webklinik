/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import dynamic from 'next/dynamic';
const GoogleMapComponent = dynamic(() => import('../components/GoogleMapComponent'), {
  ssr: false,
});

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Notus NextJS - A beautiful extension for Tailwind CSS.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Notus NextJS is Free and Open Source. It does not change any of
                the CSS from{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>
                . It features multiple HTML elements and it comes with dynamic
                components for ReactJS, Vue and Angular.
              </p>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Book Now !
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 right-0 left-auto bottom-0 pt-16 sm:w-auto w-auto sm:h-full h-full max-h-full overflow-hidden z-0"
          src="/img/Vector 64.png"
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="/img/3.png"
                  className="w-full align-middle rounded-t-lg"
                />

              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <h2 className="font-semibold text-right text-4xl text-blueGray-600">
                Tentang Kami.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Notus NextJS is Free and Open Source. It does not change any of
                the CSS from{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>
                . It features multiple HTML elements and it comes with dynamic
                components for ReactJS, Vue and Angular.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <img
                src="/img/ic-about.svg"></img>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Layanan
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Kami hadir dengan berbagai layanan perawatan gigi yang
                didukung oleh tenaga profesional terpercaya untuk 
                mendapatkan senyum yang sehat dan percaya diri.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Lihat Selengkapnya{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="/img/Frame 171.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                />
                <img
                  alt="..."
                  src="/img/consult.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="/img/11.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="/img/12.png"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/line-layanan (1).svg"
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src="/img/Frame 172.png"
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div className="flex justify-center">
              <div className="max-w-xs rounded-lg overflow-hidden shadow-lg mr-1">
                <img className="w-full h-64 object-cover p-3" src="/img/Rectangle 280.png" alt="Dr. Susilawati"/>
                <div className="p-4">
                  <p className="text-center font-bold text-lg">dr. Susilawati</p>
                  <p className="text-center text-gray-600">Dokter</p>
                </div>
              </div>
              <div className="max-w-xs rounded-lg overflow-hidden shadow-lg ml-1">
                <img className="w-full h-64 object-cover" src="/img/Rectangle 281.png" alt="Nurul"/>
                <div className="p-4">
                  <p className="text-center font-bold text-lg">Nurul ........</p>
                  <p className="text-center text-gray-600">Asisten Dokter</p>
                </div>
              </div>
            </div>
          </div>



            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48 text-right">
              <div className="text-blueGray-500 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white">
                <img src="/img/ic.svg"/>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Tim Medis
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Dipimpin oleh tenaga ahli yang berpengalaman dan
                berdedikasi, tim medis kami siap memberikan perawatan
                terbaik untuk kesehatan dan kenyamanan gigi Anda.
              </p>
            </div>
          </div>
        </div>
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Galeri</h2>
          </div>
        </div>
      </section>
      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Login"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/8.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Profile"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/4.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Landing"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/6.png"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <h2 className="font-semibold text-4xl text-white text-center">Alamat</h2>
        <div className="flex justify-center mt-10 p-8 rounded-lg">
          <GoogleMapComponent />
        </div>
      </section>

      <Footer />
    </>
  );
}
