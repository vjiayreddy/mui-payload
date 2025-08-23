'use client'

import MenuItem from '@mui/material/MenuItem'
import TouchRipple from '@mui/material/ButtonBase'
import ExpandMore from '@mui/icons-material/ExpandMore'
//import { useTranslation } from 'react-i18next'
import CartwaleMenu from '../CartwaleMenu'
import { useState } from 'react'
type Language = {
  title: string
}

type LanguageSelectorProps = {
  languages: Record<string, Language>
}

const LanguageSelector = ({ languages }: LanguageSelectorProps) => {
  //   const { i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState<string>('EN')
  const handleChangeLanguage = (_lang: string) => {
    setSelectedLanguage(_lang.toLocaleUpperCase())
  }
  return (
    <CartwaleMenu
      handler={(e) => (
        <TouchRipple className="handler marginRight" onClick={e}>
          <span className="menuTitle">{selectedLanguage}</span>
          <ExpandMore fontSize="inherit" />
        </TouchRipple>
      )}
      options={(onClose) => {
        return Object.keys(languages).map((lang) => (
          <MenuItem
            className="menuItem"
            key={languages[lang].title}
            onClick={() => {
              handleChangeLanguage(lang)
              onClose()
            }}
          >
            <span className="menuTitle">{languages[lang].title}</span>
          </MenuItem>
        ))
      }}
    />
  )
}
export default LanguageSelector
