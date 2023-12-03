import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Tutor from "../components/Tutor"
import {  users } from "../constants"


const AllArticles = () => {
  return (
    <div>
        <Navbar/>

        <div className="mt-20 m-5">

            {/* top */}
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold my-3  text-xl">meet Rabbi tutors</h1>
                <p className="my-8 text-center text-lg font-[250]">connect and share ideas with fellow students</p>
            </div>

            {/* bottom */}
            <div className="lg:flex flex-wrap  justify-center gap-3  lg:gap-2">
                {users.map((user, index) => (
                    // eslint-disable-next-line react/jsx-key
                  <div> 
                   <Tutor user={user} key={index}/>
                  </div>
                    
                ))}
            </div>

        </div>
      
            {/* footer */}
            <Footer/>
    </div>
  )
}

export default AllArticles
