import Head from 'next/head'
import Home from './home';
import React, { useState } from 'react';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Osman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home  />
    </div>
  )
}
