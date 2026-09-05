import React, { useEffect, useRef, useState } from 'react';

const languages = [
  { code: 'en', shortLabel: 'EN', label: 'English', dir: 'ltr' },
  { code: 'ru', shortLabel: 'RU', label: 'Русский', dir: 'ltr' },
  { code: 'ar', shortLabel: 'AR', label: 'العربية', dir: 'rtl' }
];

const getSavedLanguage = () => {
  const savedLanguage = window.localStorage.getItem('pns-language');
  return languages.some(({ code }) => code === savedLanguage) ? savedLanguage : 'en';
};

const setTranslationCookie = (language) => {
  const value = `/en/${language}`;
  const cookie = `googtrans=${value}; path=/; SameSite=Lax`;

  document.cookie = cookie;

  // Google Translate may look for the cookie on either the host or its parent domain.
  if (window.location.hostname.includes('.')) {
    document.cookie = `${cookie}; domain=.${window.location.hostname}`;
  }
};

const loadGoogleTranslate = () => {
  if (document.getElementById('google-translate-script')) return;

  window.pnsGoogleTranslateInit = () => {
    if (!window.google?.translate || document.querySelector('#google_translate_element select')) return;

    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,ru,ar',
        autoDisplay: false
      },
      'google_translate_element'
    );
  };

  const script = document.createElement('script');
  script.id = 'google-translate-script';
  script.src = 'https://translate.google.com/translate_a/element.js?cb=pnsGoogleTranslateInit';
  script.async = true;
  document.body.appendChild(script);
};

const LanguageSwitcher = ({ isMobile = false }) => {
  const [language, setLanguage] = useState(getSavedLanguage);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const currentLanguage = languages.find(({ code }) => code === language) || languages[0];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = currentLanguage.dir;

    if (language !== 'en') {
      setTranslationCookie(language);
      loadGoogleTranslate();
    }
  }, [language, currentLanguage.dir]);

  useEffect(() => {
    const closeMenu = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener('pointerdown', closeMenu);
    return () => document.removeEventListener('pointerdown', closeMenu);
  }, []);

  const selectLanguage = (nextLanguage) => {
    if (nextLanguage === language) {
      setIsOpen(false);
      return;
    }

    window.localStorage.setItem('pns-language', nextLanguage);
    setTranslationCookie(nextLanguage);
    setLanguage(nextLanguage);
    window.location.reload();
  };

  return (
    <div
      ref={wrapperRef}
      className={`language-switcher notranslate${isMobile ? ' language-switcher--mobile' : ''}`}
      translate="no"
    >
      <button
        type="button"
        className="language-switcher__trigger"
        aria-label="Choose language"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.4 2.5 3.7 5.6 3.7 9S14.4 18.5 12 21c-2.4-2.5-3.7-5.6-3.7-9S9.6 5.5 12 3Z" />
        </svg>
        <span>{currentLanguage.shortLabel}</span>
        <svg className="language-switcher__chevron" aria-hidden="true" viewBox="0 0 12 8">
          <path d="m1 1.5 5 5 5-5" />
        </svg>
      </button>

      {isOpen && (
        <div className="language-switcher__menu" role="listbox" aria-label="Language">
          {languages.map((option) => (
            <button
              type="button"
              role="option"
              aria-selected={option.code === language}
              className={`language-switcher__option${option.code === language ? ' is-active' : ''}`}
              key={option.code}
              onClick={() => selectLanguage(option.code)}
              lang={option.code}
              dir={option.dir}
            >
              <span>{option.label}</span>
              {option.code === language && <span className="language-switcher__check">✓</span>}
            </button>
          ))}
        </div>
      )}

      <div id="google_translate_element" aria-hidden="true" />
    </div>
  );
};

export default LanguageSwitcher;
