import React from 'react';
import StickyNav from '../components/Nav/StickyNav';

type Props = {
  pageTitle: string,
  children: React.ReactNode,
}

const Layout = ({ pageTitle, children }: Props) => {

  return (
    <div>
      <title>{pageTitle}</title>
        <StickyNav/>
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout;