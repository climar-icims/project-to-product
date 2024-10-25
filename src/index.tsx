import React from 'react';
import { createRoot } from 'react-dom/client';


import {
  Box,
  Deck,
  FlexBox,
  FullScreen,
  AnimatedProgress,
  MarkdownSlideSet
} from 'spectacle';


// SPECTACLE_CLI_MD_START
import mdContent from './presentation.md';
// SPECTACLE_CLI_MD_END

// SPECTACLE_CLI_THEME_START
const theme = {
  colors: {
    primary: '#000000', // iCIMS Teal
    secondary: '#1C355E', // iCIMS Navy
    tertiary: '#FFFFFF', // iCIMS Light Gray
    quaternary: '#48A8AF' // iCIMS Gray
  },
  fonts: {
    header: 'Poppins, Calibri, sans-serif',
    text: 'Poppins, Calibri, sans-serif'
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = ({children = mdContent}) => (
  <>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins&display=swap" />
  <Deck theme={theme} template={template}>
    <MarkdownSlideSet>{children}</MarkdownSlideSet>
  </Deck>
  </>
);

const root = createRoot(document.getElementById('app')!);
root.render(<Presentation />);