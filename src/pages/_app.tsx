/* eslint-disable @next/next/no-page-custom-font */
import App from "next/app";
import React from "react";
import Head from "next/head";
import { appWithTranslation } from 'next-i18next'

import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../styles";

import '../styles/globals.css';

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

          <meta name="description" content="An easy calculator for converting a pet's age to human age. Quickly and accurately calculate your furry friend's age based on his age data. Find out how old your dog or cat is in human age. Just enter the data and get the result!" />

          <meta http-equiv="content-language" content="en" />
          <meta name="title" content="PawAge | Pet Age Calculator" />
          <meta name="description" content="An easy calculator for converting a pet's age to human age. Quickly and accurately calculate your furry friend's age based on his age data. Find out how old your dog or cat is in human age. Just enter the data and get the result!" />

          <meta http-equiv="content-language" content="ru" />
          <meta name="title" content="PawAge | Человеческий возраст питомца" />
          <meta name="description" content="Легкий калькулятор для перевода возраста питомца в человеческий. Быстрый и точный расчет возраста вашего пушистого друга на основе данных о его возрасте. Узнайте, сколько лет в человеческом возрасте вашей собаке или кошке. Просто введите данные и получите результат!" />

          <title>PawAge</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(MyApp)
