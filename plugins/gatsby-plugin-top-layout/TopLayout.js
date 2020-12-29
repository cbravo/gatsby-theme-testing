import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as ScThemeProvider } from 'styled-components'

const theme = createMuiTheme({
  status: {
    danger: '#ff0000',
  },
  defaults: {
    spacing: {
      small: { xs: 4, md: 6, lg: 8 },
      medium: { xs: 8, md: 8, lg: 14 },
      large: { xs: 8, md: 16, lg: 28 },
    },
  },
});

export default function TopLayout(props) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <ScThemeProvider theme={theme}>
        {props.children}
      </ScThemeProvider>
    </ThemeProvider>
  )
}

// TopLayout.propTypes = {
//   children: PropTypes.node,
// }
