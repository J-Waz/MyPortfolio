import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -25px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
    color: ${(props) => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    letter-spacing: 7px;

    .main {
      font-size: 50px;
      font-weight: 100
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
      font-weight: 25;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi There!
          <br />
          <span>
            <strong>I'm Jacob</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Musician", "Performer", "Motivator"],
              autoStart: true,
              loop: true,
              delay: 70,
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
