/**
 *
 * Logo.react.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import styled from 'styled-components';
import LogoSrc from './flymore-logo-960.png';

const LogoImg = styled.img`
  display: block;
  width: 460px;
  margin: 150px auto;
  opacity: 0;
  transition: transform 0.7s ease-out 1s, opacity 0.7s ease-out 1s;
  &.active {
    opacity: 0.5
    transform: translateY(-20px)
    transition: transform 0.7s ease-out 0s, opacity 0.7s ease-out 0s;
  }
  &:hover {
    opacity: 1
    transform: translateY(-30px)
  }
`;

function Logo() {
  return (
    <LogoImg src={LogoSrc} className="active" />
  );
}

export default Logo;