import Footer from '../components/footer'
import Meta from '../components/meta'
import Nav from '../components/nav'
import UpperHeroBar from '../components/upper-hero-bar'

export default function Layout ({ preview, children }) {
  const title = 'Hello, from sunny Layout component!'
  return (
    <>
      <Meta />
      <Nav siteTitle={title || 'Title'} />
      <UpperHeroBar />
      <div className='min-h-screen bg-gray'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
