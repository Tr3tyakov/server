import React from 'react';
import style from './layouts.module.css';
import Header from '../header/Header';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';

const MainLayouts: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box m={'20px 0'}>
        <Container maxWidth="md">
          <>{children}</>
        </Container>
      </Box>
    </>
  );
};

export default MainLayouts;
