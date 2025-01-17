"use client";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
import LocalSwitcher from "../localSwitcher/localSwitcher";
import { useTranslations } from "use-intl";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "/" },
  {
    href: "OurServices",
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
    href: "Products",
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
  { href: "OurReferences", label: "OurReferences" },
  { href: "AboutUs", label: "AboutUs" },
  { href: "Blog", label: "Blog" },
  { href: "Career", label: "Career" },
];

const Navbar = () => {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 490);
      if (!isMobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  return (
    <div
      className={`${styles.navbarContainer} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <Link href="/" className={styles.navbarLeft}>
        <Image src="/pointoLogo.png" width={94.39} height={34} alt="" />
      </Link>
      <div className={`${styles.navbarMiddle} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.navMiddleLinks}>
          {navLinks.map((link) => (
            <div
              key={link.href}
              className={pathname === link.href ? styles.navActive : ""}
              id={styles.navLinks}
            >
              <Link
                className={styles.navLinks}
                href={t(link.href)}
                onClick={(e) => {
                  if (isMobile) {
                    // e.preventDefault();
                    setMenuOpen(true);
                  }
                }}
              >
                {t(link.label)}
                {link.showIcon && (
                  <Image
                    className={styles.chevronDown}
                    src="/chevron-down.svg"
                    width={20}
                    height={20}
                    alt=""
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobile(true);
                      setMenuOpen(true);
                    }}
                  />
                )}
              </Link>

              {link.subMenu && (
                <div className={styles.dropdownContainer}>
                  {link.subMenu.map((subLink) => (
                    <div
                      key={subLink.href}
                      className={
                        pathname === subLink.href ? styles.subNavActive : ""
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
        <div className={styles.navbarRight}>
          <LocalSwitcher />
          <div className={styles.contactUs}>{t("ContactUs")}</div>
        </div>
      </div>
      {menuOpen ? (
        <RiCloseLine
          className={`${styles.toggleIcon} ${styles.toggleClose}`}
          onClick={handleMenuToggle}
        />
      ) : (
        <RxHamburgerMenu
          className={`${styles.toggleIcon} ${styles.toggleOpen}`}
          onClick={handleMenuToggle}
        />
      )}
    </div>
  );
};

export default Navbar;
