import React, { FC } from 'react';
import { Typography, AppBar, CssBaseline, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const App: FC = () => {
  return (
    <main>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Photo Album update
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Hello everyone this is a photo album and I&apos;m trying ot make this sentencde as long as possible so we
            cans ee now does it look like on the screent
          </Typography>
        </Container>
      </div>
    </main>
  );
};

export default App;
