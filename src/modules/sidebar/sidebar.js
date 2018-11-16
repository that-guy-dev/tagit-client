import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';
import { color } from '../../styles/color';
import Menu from '../../assets/menu.svg';
import Crog from '../../assets/crog.svg';
import Logo from '../../assets/logo_w_text_small.svg';
import Arrow from '../../assets/arrow.svg';
import Close from '../../assets/close.svg';

const SidebarWrapper = styled.div`
  background: ${color.primary};
  position: fixed;
  top: 0;
  height: 100vh;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 46px 0;
  box-sizing: border-box;
  ${props => props.open && css`
    width: 250px;
  `}
`;

const SidebarItems = styled.div`
  display: none;
  ${props => props.open && css`
    display: flex;
    flex-direction: column;
    height: 80%;
  `}
`;

const SidebarTop = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const SidebarTopOpen = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 30px;
  align-items: center;
`;

const SidebarItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px 20px 30px;
`;


const SidebarItem = styled.div`
  font-size: 1em;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  &:first-letter {
    text-transform:capitalize;
  }
  ${props => props.bread && css`
    font-weight: 100;
  `}
  ${props => props.child && css`
    color: #40359C;
  `}
`;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.slide = this.slide.bind(this);
  }

  slide = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { dispatch } = this.props;
    const categorys = this.props.cats.map(cat => (
      <SidebarItemWrapper>
        <SidebarItem onClick={() => dispatch(push(`${cat.tags}`))}>{cat.tags}</SidebarItem>
        <SidebarItem child><img src={Arrow} alt="" /></SidebarItem>
      </SidebarItemWrapper>
    ));

    return (
      <SidebarWrapper open={this.state.open}>
        <SidebarTop onClick={this.slide}>
          {
          this.state.open ? (
            <SidebarTopOpen>
              <img src={Logo} alt="logo" />
              <div open={this.state.open}><img src={Close} /></div>
            </SidebarTopOpen>
          ) : (
            <img src={Menu} alt="menu" />
          )
         }
        </SidebarTop>
        <SidebarItems open={this.state.open}>
          {/* <SidebarItemWrapper>
            <SidebarItem bread>All</SidebarItem>
          </SidebarItemWrapper> */}
          {categorys}
          <SidebarItemWrapper>
            <SidebarItem>+</SidebarItem>
          </SidebarItemWrapper>
        </SidebarItems>
        <img src={Crog} alt="crog" />
      </SidebarWrapper>
    );
  }
}

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cats: PropTypes.array,
};

Sidebar.defaultProps = {
  cats: [],
};


function mapStateToProps(state) {
  return {
    cats: state.articles.articles,
  };
}

export default connect(mapStateToProps)(Sidebar);
