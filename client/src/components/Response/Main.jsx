import TopicDirection from './TopicDirection'
import Prerequisites from './PreRequisites'
import AdditionalResources from './AdditionalResources'
import ImagesSection from './ImagesSection'
import ChatSection from './ChatSection'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

export default function Main() {
  return (
    <>
      <Header />
        <div className='not-main'>
          <TopicDirection />
          <Prerequisites />
        </div>
        <div className='main'>
          <ImagesSection />
          <ChatSection />
        </div>
        <div className='not-main'>
          <AdditionalResources />
        </div>
        <Footer />
    </>
  )
}

