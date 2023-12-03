import { Link, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import { featuredArticles, pdfs, profileActivityLinks, users, videos } from "../constants"
import { useState } from "react"
import { GiSelfLove } from "react-icons/gi";
import { TbEye } from "react-icons/tb";



const Profile = () => {
  const {id} = useParams()
  const [user] = users.filter(user => user.id === id)
  const userId = user.id
  const [active, setActive] = useState('video')
  // console.log(user)
  return (
    <div className=" bg-slate-100">
      <Navbar/>

      {/* heading */}
      <div className="bg- bg-white py-3">

        {/* profile image */}
        <div>
          <p className="w-full h-[10rem] bg-gray-500"></p>

          <img 
          className="w-32 h-32 rounded-full absolute m-3 top-20 object-cover"
          src={user.imgUrl}/>
        </div>

        {/* profile bio */}
        <div className="mt-10 m-5 pt-2">
          <h1 className="font-bold mb-2 mt-6 text-lg">{user.name}</h1>
          <p>{user.bio}</p>
        </div>

        {/* profile buttons */}
        <div className="flex m-5 gap-5">
          <Link to={`/message/${userId}`} className="bg-gray-300 py-2 px-4 rounded-xl">Message</Link>
          <button className="box2 border-2 py-2 px-4 rounded-xl">subscribe</button>
        </div>

      </div>

      {/* mobile view */}
      <div className="lg:hidden">

        {/* about */}
        <div className="bg-white py-3 mt-2">
          <div className="m-5">
            <h1 className="font-bold text-lg mb-4">about</h1>
          <p className="">{user.about}</p>

          </div>
        </div>

        {/* activity */}
        <div className="bg-white ">
          <div className="mx-5 my-2">
            <h1 className="font-bold text-lg py-5">Activity</h1>
            <p className="mb-5">20 subscribers</p>

            {/* activity nav */}
            <ul className="flex gap-5">
              {profileActivityLinks.map(nav => (
                // eslint-disable-next-line react/jsx-key
                <li 
                className={ active=== nav.label ? 'bg-emerald-200 box2 border-2 px-4 py-2 rounded-2xl ':'box2 border-2 px-4 py-2 rounded-2xl'}
                onClick={() => setActive(nav.label)}
                >
                  {nav.label}
                </li>
              ))}
            </ul>


              {/* videos */}
            {active === 'video' && (
              <div className="py-3">
                {videos.slice(1,4).map(video => (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <div className="flex items-center gap-5 py-4 border-1">
                      {/* video thumbnail */}
                      <video 
                      
                      className="w-[6rem] object-contain h-[4rem] rounded-2xl"
                      src={video.imgUrl}/>

                      {/* video desc */}
                      <div>
                        <h1>{video.caption}</h1>
                      </div>

                    </div>

                    {/* likes and views */}
                    <div className="flex gap-3 border-b-2 py-2 mb-4">
                      <GiSelfLove/>
                      <TbEye/>
                    </div>

                  </div>
                ))}
              </div>
            )}

              {/* pdfs */}
                        {active === 'pdfs' && (
              <div className="py-3">
                {pdfs.map(pdf => (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <div className="flex items-center gap-5 py-4 border-1">
                      {/* video thumbnail */}
                      <img 
                      className="w-[5rem] object-cover h-[5rem] rounded-lg"
                      src={pdf.imgUrl}/>

                      {/* pdf desc */}
                      <div>
                        <h1>{pdf.caption}</h1>
                      </div>

                    </div>

                    {/* likes and views */}
                    <div className="flex gap-3 border-b-2 py-2 mb-4">
                      <GiSelfLove/>
                      <TbEye/>
                    </div>

                  </div>
                ))}
              </div>
            )}

              {/* articles */}
                        {active === 'articles' && (
              <div className="py-3">
                {featuredArticles.map(video => (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <div className="flex items-center gap-5 py-4 border-1">
                      {/* video thumbnail */}
                      <img 
                      
                      className="w-[5rem] object-cover h-[5rem] rounded-lg"
                      src={video.imgUrl}/>

                      {/* video desc */}
                      <div className="h-[100px] overflow-y-hidden">
                        <h1>{video.caption}</h1>
                      </div>

                    </div>

                    {/* likes and views */}
                    <div className="flex gap-3 border-b-2 py-2 mb-4">
                      <GiSelfLove/>
                      <TbEye/>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* may also like */}
          <div className="bg-white ">
            <div className="mx-5 my-2">
                  
              <h1 className="font-bold text-lg py-5">you may also like</h1>

              {/* other users */}
              <div className="py-3">
                {users.map(user => (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <div className="flex items-center box2 mb-4 border-b-2 gap-5 py-4 border-1">
                      {/* user thumbnail */}
                      <img 
                      className="w-[3rem] object-cover h-[3rem] rounded-full"
                      src={user.imgUrl}/>

                      {/* video desc */}
                      <div>
                        <Link to={`/profile/${user.id}`} className=" font-semibold my-2">{user.name}</Link>
                        <h1 >{user.bio}</h1>
                      </div>

                    </div>

                    {/* likes and views */}
                    {/* <div className="flex gap-3 border-b-2 py-2 mb-4">
                      <p className="flex items-center gap-1">3<GiSelfLove/></p>
                      <p className="flex items-center gap-1">45<TbEye/></p>
                      
                    </div> */}

                  </div>
                ))}
              </div>

            </div>
          </div>

      </div>


      {/* laptop view */}
      <div className="hidden lg:flex gap-5 p-3">

        {/* activity */}
        <div className="bg-white m-5 rounded-lg boxshadow w-[80%]">
          <div className="mx-5 my-2">
            <h1 className="font-bold text-lg py-5">Activity</h1>
            <p className="mb-5">20 subscribers</p>

            {/* activity nav */}
            <ul className="flex gap-5 ">
              {profileActivityLinks.map(nav => (
                // eslint-disable-next-line react/jsx-key
                <li 
                className={ active=== nav.label ? 'bg-emerald-200 box2 border-2 px-4 py-2 rounded-2xl ':'box2 border-2 px-4 py-2 rounded-2xl'}
                onClick={() => setActive(nav.label)}
                >
                  {nav.label}
                </li>
              ))}
            </ul>


              {/* videos */}
            {active === 'video' && (
              <div className="py-3">
                {videos.slice(0,4).map(video => (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <div className="flex items-center gap-5 py-4 border-1">
                      {/* video thumbnail */}
                      <video 
                      controls
                      className="w-[6rem] object-contain h-[4rem] rounded-lg"
                      src={video.imgUrl}/>

                      {/* video desc */}
                      <div>
                        <h1>{video.caption}</h1>
                      </div>

                    </div>

                    {/* likes and views */}
                    <div className="flex gap-3 border-b-2 py-2 mb-4">
                      <GiSelfLove/>
                      <TbEye/>
                    </div>

                  </div>
                ))}
              </div>
            )}

              {/* pdfs */}
                {active === 'pdfs' && (
              <div className="py-3">
                {pdfs.map(pdf => (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <div className="flex items-center gap-5 py-4 border-1">
                      {/* video thumbnail */}
                      <img 
                      className="w-[5rem] object-cover h-[5rem] rounded-lg"
                      src={pdf.imgUrl}/>

                      {/* pdf desc */}
                      <div>
                        <h1>{pdf.caption}</h1>
                      </div>

                    </div>

                    {/* likes and views */}
                    <div className="flex gap-3 border-b-2 py-2 mb-4">
                      <GiSelfLove/>
                      <TbEye/>
                    </div>

                  </div>
                ))}
              </div>
            )}

              {/* articles */}
                {active === 'articles' && (
              <div className="py-3 ">
                {featuredArticles.map(video => (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <div className="flex items-center gap-5 py-4 border-1">
                      {/* video thumbnail */}
                      <img 
                      
                      className="w-[5rem] object-cover h-[5rem] rounded-lg"
                      src={video.imgUrl}/>

                      {/* video desc */}
                      <div>
                        <h1 className="overflow-y-hidden h-[100px]">{video.caption}</h1>
                      </div>

                    </div>

                    {/* likes and views */}
                    <div className="flex gap-3 border-b-2 py-2 mb-4">
                      <GiSelfLove/>
                      <TbEye/>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        <div className="flex flex-col">

          {/* about */}
            <div className="bg-white m-5 py-3 rounded-lg boxshadow">
            <div className="m-5">
              <h1 className="font-bold text-lg mb-4">about</h1>
            <p className="">{user.about}</p>

            </div>
            </div>

          {/* may also like */}
            <div className="bg-white m-5 rounded-lg boxshadow">
              <div className="mx-5 my-2">
                    
                <h1 className="font-bold text-lg py-5">you may also like</h1>

                {/* other users */}
                {active === 'video' && (
                <div className="py-3">
                  {users.map(user => (
                    // eslint-disable-next-line react/jsx-key
                    <div>
                      <div className="flex items-center gap-5 py-4 border-1">
                        {/* user thumbnail */}
                        <img 
                        className="w-[5rem] object-cover h-[5rem] rounded-full"
                        src={user.imgUrl}/>

                        {/* video desc */}
                        <div>
                          <Link to={`/profile/${user.id}`} className=" font-semibold my-2">{user.name}</Link>
                          <h1 >{user.bio}</h1>
                        </div>

                      </div>

                      {/* likes and views */}
                      <div className="flex gap-3 border-b-2 py-2 mb-4">
                        <p className="flex items-center gap-1">3<GiSelfLove/></p>
                        <p className="flex items-center gap-1">45<TbEye/></p>
                        
                      </div>

                    </div>
                  ))}
                </div>
                )}

              </div>
            </div>

        </div>



      </div>

    </div>
  )
}

export default Profile
