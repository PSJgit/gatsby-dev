import * as React from 'react';
import { Link } from 'gatsby';
import Nav from '../components/Nav/Nav';

type Props = {
  pageTitle: string,
  children: React.ReactNode,
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Nav/>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout;