import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Andrew Thompson</h2>
        <p><a href="mailto:andrew@mgt.co.nz">andrew@mgt.co.nz</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, my name is Andrew and my goal every day is to leave things better than I found them.
        I am a <a href="https://www.wgtn.ac.nz/ecs">VUW Software Engineering</a> graduate working as
        an Operations Scheduling Engineer at <a href="https://www.dxc.technology/">DXC Technology</a>. 
        Besides building software that is as polished behind-the-scenes as it is out front, I have a keen interest in driving agile and DevOps ways of working.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Andrew Thompson <Link to="/">mgt.co.nz</Link>.</p>
    </section>
  </section>
);

export default Nav;
