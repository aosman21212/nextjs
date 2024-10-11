"use client"; // Ensure this is a client component
import { useRouter } from "next/navigation"; // Import from next/navigation
import { useTranslation } from "next-i18next";
import React from "react";

const LanguageSwitcher = () => {
  const router = useRouter(); // Initialize router
  const { i18n } = useTranslation(); // Get i18n instance

  const changeLanguage = (lang) => {
    // Verify router is defined before usage
    if (router && router.asPath) {
      router.push(router.asPath, router.asPath, { locale: lang }); // Change language
    } else {
      console.error("Router or asPath is undefined");
    }
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ar")}>العربية</button>
    </div>
  );
};

export default LanguageSwitcher;
