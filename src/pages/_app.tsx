/* eslint-disable @next/next/no-page-custom-font */
import App from "next/app";
import React from "react";
import Head from "next/head";
import { appWithTranslation } from 'next-i18next'

import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../styles";

import '../styles/globals.css';
import { NotificationsProvider } from "@/context";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover"></meta>

          <meta name="description" content="An easy calculator for converting a pet's age to human age. Find out how old your cat, dog, hamster, rabbit is by human standards." />

          <meta httpEquiv="content-language" content="en" />
          <meta name="title" content="PawAge | Pet Age Calculator" />
          <meta name="description" content="An easy calculator for converting a pet's age to human age. Find out how old your cat, dog, hamster, rabbit is by human standards." />

          <meta httpEquiv="content-language" content="ru" />
          <meta name="title" content="PawAge | Возраст питомца" />
          <meta name="description" content="Легкий калькулятор для перевода возраста питомца в человеческий возраст. Узнайте сколько лет вашей кошке, собаке, хомяку, кролику по человеческим меркам." />

          <title>PawAge</title>
        </Head>
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(MyApp)
