import React from 'react';
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import Title from './components/Title';
import MailGenerator from "./containers/MailGenerator";
import AttributionMessage from "./components/AttributionMessage";
import { TITLE_TEXT } from './config/generalConfig'
import Routerwweb from "./containers/generatorListUserName";

const Main = () => {
    return (
        <BrowserRouter>
        {/* <StyledApp> */}
            <Title titleText={TITLE_TEXT} />
            <MailGenerator />
            <AttributionMessage />
            <ToastContainer autoClose={4000} />
            <Routerwweb />
          {/* </StyledApp> */}
      </BrowserRouter>
    );
}

export default Main;
