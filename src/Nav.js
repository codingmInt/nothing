import styles from "./Nav.module.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #ea1538;
    transition: 0.3s;
  }
`;
function Nav() {
  const history = useHistory();
  const [btnName, setName] = useState("??????");
  return (
    <div className={styles.Nav}>
      <nav>
        <h2 className={styles.Logo}>codingmInt</h2>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink to="service">Service</StyledLink>
          </li>
          <li>
            <StyledLink to="contact">Contact us</StyledLink>
          </li>
        </ul>
        <button
          type="button"
          onMouseEnter={() => {
            setName("!@#$%^&");
          }}
          onMouseOut={() => {
            setName("??????");
          }}
          onClick={() => {
            history.push("/something");
          }}
        >
          {btnName}
        </button>
      </nav>
    </div>
  );
}
export default Nav;
