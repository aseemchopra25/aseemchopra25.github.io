import React, { useEffect, useRef } from "react";
import { YinYang } from "./AllSvgs";
import styled, { ThemeProvider } from "styled-components";

function Header() {
    return (
      <header>
          <YinYang width = {80} height = {80} />
      </header>
    );
  }
  
  export default Header;


