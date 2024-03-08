import { useEffect, useState } from 'react'
import Select, { SingleValue } from 'react-select';
import * as s from './LanguageSelect.styled';
import { animation } from 'utils';
import { languages } from 'data/languages';
import { ILanguage } from 'types/languages.types';
import { theme } from 'styles';
import { useTranslation } from 'react-i18next';

export const LanguageSelect = () => {
  const { i18n } = useTranslation()
  const [selectedOption, setSelectedOption] = useState<SingleValue<ILanguage>>();

  useEffect(() => {
    const locale = i18n.language?.replace(/-.{1,}/g, '') ?? 'ru'
    setSelectedOption(languages.find(lang => lang.value === locale))
  }, [i18n.language])

  const handleChange = (value: SingleValue<ILanguage>) => {
    setSelectedOption(value)
    i18n.changeLanguage(value?.value)
  }

  const renderOption = (item: ILanguage) => <s.Option>
    {item.value}
  </s.Option>

  return (
    <s.LanguageSelect
      {...animation.slideFromRight()}
    >
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={languages}
        formatOptionLabel={renderOption}
        isSearchable={false}
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
      />
    </s.LanguageSelect>
  )
}
