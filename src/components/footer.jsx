import React from "react";
// import { Link } from "react-router-dom"
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10">
        {/* <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5"> */}
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            {/* aici vine link */}
            <div
              // to="/"
              className="text-sm mt-8 p-4 mx-auto max-w-screen-lg ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 w-24">
              <Image src="" alt="Jogga" width={1200} height={500} />
              <div className="hidden xl:flex items-center space-x-0.5">
                <div className="inline-block dark:hidden"></div>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex-items-center md:col-span-3">
            <div
              className="nc-SocialsList1 flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start"
              data-nc-id="SocialList1">
              {/* aici vine link */}
              <a
                href="https://www.facebook.com/JoggaApp"
                target="_blank"
                className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
                rel="noreferrer">
                {/* <Image
                      src={facebook}
                      alt="Facebook"
                      width={20}
                      height={10}
                    /> */}
                <span className="hidden lg:block text-sm">Facebook</span>
              </a>

              {/* aici vine link */}

              <a
                href="https://www.instagram.com/joggaapp"
                target="_blank"
                className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
                rel="noreferrer">
                {/* <Image
                      src={instagram}
                      alt="Instagram"
                      width={20}
                      height={10}
                    /> */}

                <span className="hidden lg:block text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-sm mt-8 p-4 mx-auto max-w-screen-md">
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">
            T&C
          </h2>
          <ul className="mt-5 space-y-4 ">
            <li>
              {/* aici vine link */}
              <Link href="/terms">
                <span>Termeni și condiții</span>
              </Link>
            </li>
            {/* aici vine link */}
            <li>
              <Link href="/privacy-policy">
                <span className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white">
                  Politică de confidențialitate
                </span>
              </Link>
              {/* <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="/privacy-policy"
              >
                Politică de confidențialitate
              </a> */}
            </li>
            {/* aici vine link */}
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="https://anpc.ro">
                ANPC
              </a>
            </li>
            {/* aici vine link */}
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="https://anpc.ro/ce-este-sal/">
                ANPC-SAL
              </a>
            </li>
            {/* aici vine link */}
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO ">
                Soluționarea online a litigiilor
              </a>
            </li>
            {/* aici vine link */}
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="https://netopia-payments.com/">
                <Image src="" alt="netopia" />
              </a>
            </li>
            {/* aici vine link */}
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO">
                <Image src="" alt="sol" />
              </a>
            </li>
            {/* aici vine link */}
            <li>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="https://anpc.ro/ce-este-sal/">
                <Image src="" alt="sal" />
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm mt-8 p-4 mx-auto max-w-screen-md">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
            Contact
          </h2>
          <ul className="mt-5 space-y-4">
            <li>Email: office.jogga@gmail.com</li>
            <li>Companie: WEVIEW TECH SRL</li>
            <li>Cod fiscal: 42225653</li>
            <li>Număr de înregistrare: J29/246/2020</li>
            <li>Adresă: St. Stefan Octavian Iosif, Busteni, Romannia</li>
          </ul>
        </div>
      </div>
    </div>
    //   </footer>
    // </div>
  );
};

export default Footer;
