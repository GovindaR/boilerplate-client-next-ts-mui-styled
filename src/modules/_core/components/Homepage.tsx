import Link from 'next/link';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';

import { RootState } from '../../../state/store';
import { getLocalizeLabel } from '../../../utils/localize';

import { changeDir, changeLang, toggleTheme } from '../state/settingsSlice';

import { fetchPokemon } from '../../../utils/api/rest/raw/module1';
import { HomepageStyleWrapper } from '../styles/HomepageStyleWrapper';
import {
  useMutationPostRequest,
  useQueryGetRequest,
} from '../../../utils/api/rest/useRequests';
import { testRestApiUrl } from '../../../utils/api/endpoint';

export const Homepage = () => {
  const dispatch = useDispatch();
  const locale = useSelector(({ settings }: RootState) => settings.locale);
  const rtl = useSelector(({ settings }: RootState) => settings.rtl);
  const darkTheme = useSelector(
    ({ settings }: RootState) => settings.darkTheme
  );
  const localizeText = useCallback(
    (text) => getLocalizeLabel(locale, text),
    [locale]
  );

  const [callGetCapSules1Data, setCallGetCapSules1Data] = useState(false);

  // rest api ---->

  const {
    data: fetchPokemonData,
    error: fetchPokemonError,
    isLoading: fetchPokemonLoading,
  } = useQuery('pokemon', fetchPokemon);
  // will be populated on initial render as it is cached // already fetched from server
  // https://react-query.tanstack.com/guides/ssr

  const {
    data: fetchPokemon1Data,
    error: fetchPokemon1Error,
    isLoading: fetchPokemon1Loading,
  } = useQueryGetRequest({
    name: 'pokemon1',
    endpoint: `${testRestApiUrl}pokemon`,
    variables: {
      limit: 10,
      offset: 0,
    },
    options: {
      onSuccess: (data: any) => {
        console.log({ fetchPokemon1Dataeeeeeeeee: data });
      },
    },
  });

  const {
    data: insertArticleData,
    error: insertArticleError,
    mutate: callInsertArticle,
    isLoading: insertArticleLoading,
  } = useMutationPostRequest({
    endpoint: 'https://reqres.in/api/articles',
    variables: {
      title: 'Axios POST Request Example 1111',
    },
    options: {
      onSuccess: (data: any) => {
        console.log({ insertArticleData: data });
      },
      onError: (err: any) => {
        console.log({ insertArticleErr: err });
      },
    },
  });

  console.log({
    fetchPokemonData,
    fetchPokemonError,
    fetchPokemonLoading,
    fetchPokemon1Data,
    fetchPokemon1Error,
    fetchPokemon1Loading,
  });

  useEffect(() => {
    // setCallGetCapSules1Data(true);
  }, []);

  return (
    <HomepageStyleWrapper>
      <div className={'container'}>
        <main className={'main'}>
          <h1 className={'title'}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <p className={'description'}>
            Get started by editing{' '}
            <code
              className={`${'code'} ${darkTheme ? 'codeAlternativeBg' : ''}`}
            >
              pages/index.js
            </code>
          </p>
          <Box className="div-dispatch" dir={rtl ? 'rtl' : 'ltr'}>
            <Typography
              onClick={() =>
                dispatch(changeLang(locale === 'en' ? 'jp' : 'en'))
              }
            >
              {localizeText('toggle')(localizeText('language'))}
            </Typography>
            <Typography onClick={() => dispatch(changeDir())}>
              {localizeText('toggle')(localizeText('direction'))}
            </Typography>
            <Typography onClick={() => dispatch(toggleTheme())}>
              {localizeText('toggle')(localizeText('theme'))}
            </Typography>
          </Box>

          <Typography
            sx={{
              textAlign: 'center',
              width: '100%',
            }}
          >
            <button
              type="button"
              onClick={() => {
                throw new Error('Sentry Frontend Error');
              }}
            >
              {localizeText('sentryThrowErr')}
            </button>
          </Typography>
          <hr />

          <Box width="100%" overflow="auto">
            <Typography gutterBottom variant="h6" color="secondary">
              Server side fetched data i.e before page render restApi
            </Typography>
            {fetchPokemonLoading ? (
              <Typography> Fetching pokemon....</Typography>
            ) : fetchPokemonData?.results ? (
              fetchPokemonData?.results.length > 0 ? (
                fetchPokemonData?.results?.map((i: any, j: number) => (
                  <Typography component="span" key={i?.name || j}>
                    {i?.name},&nbsp;
                  </Typography>
                ))
              ) : (
                <Typography>No Pokemon found</Typography>
              )
            ) : fetchPokemonError ? (
              <Typography>Error Fetching Pokemon</Typography>
            ) : (
              ''
            )}
          </Box>
          <br />
          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            <Typography gutterBottom variant="h6" color="secondary">
              Mutation Insert User rest api &emsp;
              <Button
                size="small"
                color="primary"
                variant="outlined"
                onClick={() => {
                  let variables = {
                    title: 'Axios POST Request Example',
                  };
                  // callInsertArticle(variables); // replaces variables provided above
                  callInsertArticle(''); // if empty takes variables provided above
                }}
              >
                Click me
              </Button>
            </Typography>
            {insertArticleLoading ? (
              <Typography> Inserting Article ...</Typography>
            ) : insertArticleError ? (
              <Typography
                sx={{
                  height: '44px',
                  overflow: 'hidden',
                }}
              >
                InsertArticleError ={' '}
                {JSON.stringify(insertArticleError, null, 2)}
              </Typography>
            ) : insertArticleData ? (
              <Typography component="span">
                InsertArticleData = {JSON.stringify(insertArticleData, null, 2)}
              </Typography>
            ) : (
              <Typography>Before clicking text</Typography>
            )}
          </Box>
          <br />
          <hr />
          <Link href="/login">{localizeText('goToLogin')}</Link>
        </main>
        <footer className="footer"></footer>
      </div>
    </HomepageStyleWrapper>
  );
};
