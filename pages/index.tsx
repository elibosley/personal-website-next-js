import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Messages from '../components/Messages';
import Colors from '../styles/colors';
import globalStyles from '../styles/global';
const Home = () => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
      <title>Elijah Bosley</title>
    </Head>

    <div className='row'>

      <Messages />
    </div>
    <style jsx global>
      {globalStyles}
    </style>
    <style jsx>{`
      .row {
        margin: auto;
        max-width: 880px;
        margin-top: 1rem;
        padding: 1rem;
      }
     
      @media screen and (min-width: 600px) {
        .row {
          padding: 0 2rem;
        }
      }
    `}</style>
  </div>
)

export default Home
