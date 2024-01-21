import React, { useEffect, useState } from 'react'
import Select, { SingleValue } from 'react-select';
import * as s from './LanguageSelect.styled';
import { animation } from '@/utils';
import { languages } from '@/data/languages';
import Image from 'next/image';
import { ILanguage } from '@/types/languages.types';
import { useRouter } from 'next/router';
import { theme } from '@/styles';

export const LanguageSelect = () => {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<SingleValue<ILanguage>>();

  useEffect(() => {
    const { locale } = router;
    setSelectedOption(languages.find(lang => lang.value === (locale || 'ru')))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (value: SingleValue<ILanguage>) => {
    setSelectedOption(value)
    router.replace(router.pathname, router.pathname, { locale: value?.value ?? 'ru' })
  }

  const renderOption = (item: ILanguage) => <s.Option>
    {item.value}
  </s.Option>

  return (
    <s.LanguageSelect
      {...animation.slideFromRight()}
    ><Select
        value={selectedOption}
        onChange={handleChange}
        options={languages}
        formatOptionLabel={renderOption}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
          IndicatorsContainer: () => null
        }}
        styles={{
          option: (baseStyles, state) => ({
            ...baseStyles,
            background: state.isSelected ? theme.colors.primary : theme.colors.white
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            margin: 0
          }),
          menuList: (baseStyles) => ({
            ...baseStyles,
            paddingTop: 0,
            paddingBottom: 0
          })
        }}
      /></s.LanguageSelect>
  )
}
