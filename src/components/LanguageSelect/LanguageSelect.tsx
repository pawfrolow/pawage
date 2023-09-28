import React, { useEffect, useState } from 'react'
import Select, { SingleValue } from 'react-select';
import * as s from './LanguageSelect.styled';
import { animation } from '@/utils';
import { languages } from '@/data/languages';
import Image from 'next/image';
import { ILanguage } from '@/types/languages.types';
import { useRouter } from 'next/router';

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
    <Image
      src={`/assets/languages/${item.icon}`}
      alt="icon" width={24} height={24}
    />
  </s.Option>

  return (
    <s.LanguageSelect
      {...animation.slideFromRight()}
    ><Select
        value={selectedOption}
        onChange={handleChange}
        options={languages}
        formatOptionLabel={renderOption}
      /></s.LanguageSelect>
  )
}
