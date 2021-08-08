import * as React from 'react';
import StickyNav from '../components/Nav/StickyNav';
import Hero from '../components/Hero/Hero';

type Props = {
  pageTitle: string,
  children: React.ReactNode,
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <StickyNav/>
      <Hero/>
      <main>
        <h1>{pageTitle}</h1>
        {children}
        <p>skhgljsdgsdlgjskdfgmsd</p>
        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>
        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>
        
        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>
        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>
      

        <p>skhgljsdgsdlgjskdfgmsd</p>
        <p>skhgljsdgsdlgjskdfgmsd</p>
        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>
        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>
        
        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>
        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>

        <p>skhgljsdgsdlgjskdfgmsd</p>
      

        <p>skhgljsdgsdlgjskdfgmsd</p>
      </main>
    </div>
  )
}
export default Layout;