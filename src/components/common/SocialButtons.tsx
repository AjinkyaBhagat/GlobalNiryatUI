import React, { useState, useEffect, useRef } from "react";
import { Fab } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./SocialButtons.module.css";
import { socialConfig } from "../../config/config";

const SocialButtons: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [debounce, setDebounce] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (debounce) return;
    setIsOpen((prev) => !prev);
    setDebounce(true);

    setTimeout(() => {
      setDebounce(false);
    }, 300);
  };

  // WhatsApp click handler (redirects to WhatsApp)
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${
      socialConfig.phoneNumber
    }?text=${encodeURIComponent(socialConfig.whatsappMessage)}`;
    window.open(url, "_blank");
  };

  // Phone click handler (initiates a phone call)
  const handlePhoneClick = () => {
    const url = `tel:${socialConfig.phoneNumber}`;
    window.location.href = url; // This will trigger the phone dialer
  };

  // Email click handler (opens Gmail compose window with 'To', 'Subject', and 'Body')
  const handleEmailClick = () => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      socialConfig.email
    )}&su=${encodeURIComponent(
      socialConfig.emailSubject
    )}&body=${encodeURIComponent(socialConfig.emailBody)}`;
    window.open(gmailLink, "_blank"); // Opens Gmail in a new tab
  };

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Toggle Button */}
      <Fab
        className={`${styles["toggle-button"]} ${isOpen ? styles.open : ""}`}
        onClick={handleToggle}
        aria-label="toggle"
      >
        {isOpen ? <CloseIcon /> : <MessageIcon />}
      </Fab>

      {/* Social Buttons */}
      {isOpen && (
        <div className={styles.showButtons}>
          <Fab
            color="primary"
            aria-label="email"
            className={`${styles["social-button"]}`}
            onClick={handleEmailClick} // Add the email handler here
          >
            <EmailIcon />
          </Fab>
          <Fab
            color="success"
            aria-label="whatsapp"
            className={`${styles["social-button"]}`}
            onClick={handleWhatsAppClick} // Add the WhatsApp handler here
          >
            <WhatsAppIcon />
          </Fab>
          <Fab
            color="secondary"
            aria-label="phone"
            className={`${styles["social-button"]}`}
            onClick={handlePhoneClick} // Add the phone handler here
          >
            <PhoneIcon />
          </Fab>
        </div>
      )}
    </div>
  );
};

export default SocialButtons;
