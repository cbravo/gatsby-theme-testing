import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {useTheme} from '@material-ui/core/styles'
// import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as ScThemeProvider } from 'styled-components'
import {Heading} from '@klickmarketing/react-components'

const theme = createMuiTheme({
  status: {
    danger: '#0000ff',
  },
});

const IndexPage = () =>{ 
  // const test= useTheme();
  return (
    <Layout>
      <SEO title="Home" />
      <Container><Heading variant="h1">Hi people</Heading></Container>
      <ThemeProvider theme={theme}>
        <ScThemeProvider theme={theme}>
          <Container><StyledP>Welcome to your new Gatsby site.</StyledP></Container>
        </ScThemeProvider>
      </ThemeProvider>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

const StyledP = styled(Heading)`
  background: red;
`;

export default IndexPage
