import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

import Logo from '../Logo';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // <A href="https://twitter.com/mxstbr">
  //   <Img src={Banner} alt="react-boilerplate - Logo" />
  // </A>
  render() {
    return (
      <div>
        <Logo className="active" />
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
