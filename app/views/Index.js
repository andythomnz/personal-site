import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Wilkommen!</Link></h2>
          {/* <p>Me, Myself, and I.</p> */}
        </div>
      </header>
      <p> Welcome to my website. Hard-copy CV&apos;s aren&apos;t everyone&apos;s cup of tea {' '}
        so I set this up as an alternative. Please feel free to read more {' '}
        <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/cv">CV</Link>, {' '}
        <Link to="/projects">projects</Link> {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>
        Stay tuned, in future I&apos;m hoping to setup a Blog {' '}
        <span role="img" aria-label="Emoji wearing sunglasses">&#128526;</span>
      </p>
    </article>
  </Main>
);

export default Index;
