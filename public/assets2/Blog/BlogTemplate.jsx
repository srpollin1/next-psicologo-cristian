import Footer from './assets/Footer'
import Navbar from './assets/Navbar'
import BannerOne from './assets/Banners/BannerOne'
import SectionOne from './assets/Sections/SectionOne'
import SectionTwo from './assets/Sections/SectionTwo'
import SectionThree from './assets/Sections/SectionThree'
import SectionFour from './assets/Sections/SectionFour'

function BlogTemplate() {

  return (
    <>
      <div>
        <div className="all-content">
          <div className="back-to-top"/>
          <Navbar />
          <BannerOne />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default BlogTemplate
