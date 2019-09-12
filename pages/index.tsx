import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Messages from '../components/Messages';
import Colors from '../styles/colors';
const Home = () => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
      <title>Elijah Bosley</title>
    </Head>

    <div className='row'>

      <Messages />
    </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
      
      :global(button) {
        color: ${Colors.white};
      }
      :global(p) {
        line-height: 1.5em;
      }
      :global(body) {
        background: ${Colors.background};
        color: ${Colors.white};
        margin: 0;
        font-family: 'Lato', sans-serif;
        font-size: 18px;
      }
      .row {
        margin: auto;
        max-width: 880px;
        padding: 0 1rem;
      }
      /* apply a natural box layout model to all elements, but allowing components to change */
      html {
        box-sizing: border-box;
      }
      :global(*), :global(*:before), :global(*:after) {
        box-sizing: inherit;
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
