"use client";

import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const languages = [
  { code: 'en', name: 'English' },
  { code: 'nl', name: 'Nederlands' }
];

export function LanguagePicker() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-20 h-8 text-sm">
        <SelectValue>
          <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <span>{language.name}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
