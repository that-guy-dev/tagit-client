import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../../modal/Modal';
import Overlay from '../../navigation/component/Overlay';
import { fadeTop } from '../utility/animation';
import { color } from '../../../styles/color';
import { LogoW } from '../assets/icon';


const NavWrapper = styled.div`
  height: 150px;
  margin: 0 auto 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  padding: 0 10%;
  opacity: 0;
  animation: ${fadeTop} 1.3s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  @media (max-width: 761px) {
    margin: 0;
    height: 90px;
    position: relative;
    top: 5px;
  }
  @media (min-width: 2150px) {
    padding: 0 25%;
  }
  
`;

const Navitem = styled.div`
  cursor: pointer;
  align-self: center;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.5px;
  color: #fff;
  ${props => props.logo && css`
    padding-left: 0;
  `}
  ${props => props.signup && css`
    background: ${color.secondary};
    padding: 10px 15px;
    border-radius: 2px;
    color: #000;
    font-weight: bold;
    box-sizing: border-box;
  `}
  @media (max-width: 850px) {
    font-size: 0px;
    color: white;
    padding-left: 20px;
  }
`;

const NavItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { type: '' };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({ type: event.target.id });
  }

  render() {
    return (
      <>
        <NavWrapper>
          <LogoW />
          <NavItemWrapper>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '500px' }}>
              <Navitem id="why">Why tagit</Navitem>
              <Navitem id="features">Features</Navitem>
              <Navitem id="features">Pricing</Navitem>
              <Navitem id="login" onClick={this.handleClick}>Sign in</Navitem>
              <Navitem signup id="signup" onClick={this.handleClick}>Sign up</Navitem>
            </div>
          </NavItemWrapper>
        </NavWrapper>
        <Modal>
          <Overlay type={this.state.type} handle={this.handleClick} />
        </Modal>
      </>
    );
  }
}

export default Nav;