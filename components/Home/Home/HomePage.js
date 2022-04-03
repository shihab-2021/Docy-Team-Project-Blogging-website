import Testimonial from '../Testimonial/Testimonial'
import Navbar from '../../Shared/Navbar/Navbar'
import Questions from '../Questions/Questions'
// import CommunitiesCard from '../CommunitiesCard/CommunitiesCard'
import VideoList from '../VideoList/VideoList'
import OnlineDoc from '../OnlineDoc/OnlineDoc'
import Footer from '../../Shared/Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'
import FooterBanner from '../../Shared/Footer/FooterBanner/FooterBanner'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchBlogs } from '../../../Redux/Slices/blogSlice'
import { fetchUserData } from '../../../Redux/Slices/userSlice'
import HomeBlogList from '../HomeBlogList/HomeBlogList'
import AskQuestion from '../AskQuestion/AskQuestion'

const HomePage = () => {
  const userInfo = useSelector((state) => state?.reducers?.user?.currentUser)

  // react redux hook here
  const dispatch = useDispatch()

  // calling the redux thunk blogs api for data here
  useEffect(() => {
    dispatch(fetchUserData(userInfo?.email))
    dispatch(fetchBlogs())
  }, [dispatch, userInfo])

  return (
    <div className="bg-slate-50 dark:bg-Docy-AlmostBlack">
      <Navbar />
      <HeroSection />
      {/* <CommunitiesCard /> */}
      <HomeBlogList />
      <OnlineDoc />
      <AskQuestion />
      <VideoList />
      <Questions />
      <Testimonial />
      <FooterBanner />
      <Footer />
    </div>
  )
}

export default HomePage
