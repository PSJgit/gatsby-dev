import * as React from "react";
import Layout from '../components/Layout';
import styled from 'styled-components';

export const StyledButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 100%;
  height: 100px;
  width: 100px;
  background: ${({ theme }) => theme.colors.primary};
`;

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      init with layout\
      <StyledButtonWrap/>
    </Layout>
  )
}

export default IndexPage;
