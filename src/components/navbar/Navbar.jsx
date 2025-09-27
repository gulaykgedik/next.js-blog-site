"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
import { Menu, X } from 'lucide-react'; // lucide-react ikonları (hamburger ve kapatma)

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* Logo */}
      <Link className={styles.logo} href="/">Lamamia</Link>

      {/* Menü Butonu (Mobil) */}
      <button 
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={28}/> : <Menu size={28}/> }
      </button>

      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}

      {/* Linkler */}
      <div className={`${styles.links} ${menuOpen ? styles.showMenu : ''}`}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link className={styles.link} key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>

      {/* Logout her zaman görünür */}
      {status === "authenticated" && (
        <button 
          className={styles.logout} 
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </button>
      )}
    </div>
  )
}

export default Navbar
