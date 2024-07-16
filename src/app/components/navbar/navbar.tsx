"use client";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import "./navbar.scss";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
import LocalSwitcher from "../localSwitcher/localSwitcher";
import { useTranslations } from "use-intl";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/hizmetlerimiz",
    label: "OurServices",
    showIcon: true,
    subMenu: [
      { href: "/yazilim-danismanlik", label: "Yazılım Danışmanlık" },
      { href: "/mobil-danismanlik", label: "Mobil Danışmanlık" },
      { href: "/is-surecleri", label: "İş Süreçleri" },
      { href: "/veri-tabani", label: "Veri Tabanı" },
      { href: "/devops-danismanlik", label: "DevOps Danışmanlık" },
      { href: "/sap-danismanlik", label: "SAP Danışmanlık" },
      { href: "/dis-kaynak-saglama", label: "Dış Kaynak Sağlama" },
      {
        href: "/yapay-zeka-gelistirmeleri",
        label: "Yapay Zeka Geliştirmeleri",
      },
      { href: "/rpa", label: "RPA" },
      { href: "/ozel-cozumler", label: "Özel Çözümler" },
    ],
  },
  {
    href: "/urunler",
    label: "Products",
    showIcon: true,
    subMenu: [
      { href: "/e-markable", label: "E - Markable" },
      { href: "/b2b-web-portal-urunleri", label: "B2B Web Portal Ürünleri" },
      {
        href: "/kurum-icin-mobil-portal-urunleri",
        label: "Kurum İçin Mobil Portal Ürünleri",
      },
    ],
  },
  { href: "/referanslarimiz", label: "OurReferences" },
  { href: "/hakkimizda", label: "AboutUs" },
  { href: "/blog", label: "Blog" },
  { href: "/kariyer", label: "Career" },
];

const Navbar = () => {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0; // Scroll pozisyonu 0'dan büyükse true döner
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1050) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <Link href="/" className="navbar-left">
        <Image
          src="/pointoLogo.png"
          width={94.39}
          height={34}
          alt="Picture of the author"
        />
        {/* <img src="/pointoLogo.png" alt="" /> */}
      </Link>
      <div className={`navbar-middle ${menuOpen ? "open" : ""}`}>
        <div className="nav-middle-links">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className={pathname === link.href ? "nav-active" : ""}
              id="nav-links"
            >
              <Link
                className="nav-links"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {t(link.label)}
                {/* {link.label} */}
                {link.showIcon && (
                  <img
                    className="chevron-down"
                    src="/chevron-down.svg"
                    alt=""
                  />
                )}
              </Link>

              {link.subMenu && (
                <div className="dropdown-container">
                  {link.subMenu.map((subLink) => (
                    <div
                      key={subLink.href}
                      className={
                        pathname === subLink.href ? "sub-nav-active" : ""
                      }
                    >
                      <Link
                        href={subLink.href}
                        onClick={() => setMenuOpen(false)}
                      >
                        {subLink.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="navbar-right">
          {/* <div className="language-container">
            <div className="language">Tr</div>
            <img className="chevron-down" src="/chevron-down.svg" alt="" />
          </div> */}
          <LocalSwitcher />
          <div className="contact-us">{t("ContactUs")}</div>
        </div>
      </div>
      {menuOpen ? (
        <RiCloseLine
          className="toggle-icon toggle-close"
          onClick={handleMenuToggle}
        />
      ) : (
        <RxHamburgerMenu
          className="toggle-icon toggle-open"
          onClick={handleMenuToggle}
        />
      )}
    </div>
  );
};

export default Navbar;
