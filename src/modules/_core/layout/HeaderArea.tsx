import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { getLocalizeLabel } from '../../../utils/localize';
import { changeLang } from '../state/settingsSlice';
import { HeaderWrapper } from '../styles/HeaderWrapper';

export const HeaderArea = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const locale = useSelector(({ settings }: RootState) => settings.locale);
  const { pathname, query, asPath } = router;
  const handleLang = (lang: any) => {
    dispatch(changeLang(lang));
    router.replace({ pathname, query }, asPath, {
      locale: lang,
    });
  };
  const localizeText = useCallback(
    (text) => getLocalizeLabel(locale, text),
    [locale]
  );

  return (
    <HeaderWrapper>
      <div className="head_wrap">
        <h2>Header Area</h2>
      </div>
    </HeaderWrapper>
  );
};
