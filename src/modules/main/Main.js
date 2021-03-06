import { GridLayout, MasonaryLayout, Sort } from "../../assets/icon";
import styled, { css } from "styled-components";

import Articles from "../articles/Articles";
import PropTypes from "prop-types";
import React from "react";
import Search from "../../assets/search.svg";
import { color } from "../../styles/color";
import { connect } from "react-redux";

const Header = styled.div`
  padding: 20px 70px 0 80px;
  transition: all 0.3s;

  ${(props) =>
    props.sidebarStatus === true &&
    css`
      padding: 20px 70px 0 280px;
    `}
`;

const Welcome = styled.h1`
  font-size: 1.9em;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 20px 0 30px 0;
`;

const Cats = styled.p`
  font-size: 1em;
  letter-spacing: 0.5px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  margin-right: 20px;
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 5px solid ${color.primary};
      width: fit-content;
    `}
`;

const Main = ({ authenticated, sidebarStatus }) => {
  if (!authenticated) {
    return <div />;
  }
  return (
    <>
      {/* <Header sidebarStatus={sidebarStatus.isOpen}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Welcome>
            Welcome back {localStorage.getItem("firstName")}{" "}
            {localStorage.getItem("lastName")}
          </Welcome>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <Cats active>Latest</Cats>
            <Cats>Following</Cats>
            <Cats>Recommended</Cats>
            <Cats>Trending</Cats>
          </div>
        </div>
      </Header> */}
      <Articles />
    </>
  );
};

Main.defaultProps = {
  authenticated: false,
  sidebarStatus: false,
};

Main.propTypes = {
  authenticated: PropTypes.bool,
  sidebarStatus: PropTypes.shape({
    open: PropTypes.bool,
  }),
};

function mapStateToProps(state) {
  const authenticated = state.login.token;
  return {
    authenticated,
    sidebarStatus: state.sidebar,
  };
}

export default connect(mapStateToProps)(Main);
