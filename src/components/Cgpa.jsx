
import {motion} from 'framer-motion' 


const Cgpa = () => {
  return (
    <div className=" lg:p-5 p-5 rounded-2xl" id='cgpa'>
      <h1 className="font-bold mb-1 lg:mb-[-5] lg:text-[2rem] text-[1.5rem]">calculate cgpa</h1>

      <div className="lg:flex  lg:items-center">
        <div>

      <motion.p
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{
        type: 'tween',
        delay: 0.7,
        duration: 1.5,
        ease: "easeIn",
      }}
      >calculate your cgpa and keep track of your accademic progress</motion.p>
      <p className="hidden lg:block text-2xl">
        record your grades for each semester, dont wait till its too late to find out where you stand accademically </p>

        {/* <button className="bg-slate-400 px-7 mt-5 py-3 rounded-lg">
        Start calculating</button> */}
        </div>


        <motion.img 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{
          type: 'tween',
          delay: 0.3,
          duration: 1.5,
          ease: "easeIn",
        }}
        className="lg:w-[40%] w-[80%] rounded-lg m-auto"
        src='https://img.freepik.com/free-vector/calculator-floating-cartoon-vector-icon-illustration-finance-business-icon-concept-isolated-flat_138676-9297.jpg?size=626&ext=jpg&ga=GA1.1.1091888721.1700682718&semt=ais'
        />
      </div>
      
    </div>
  )
}

export default Cgpa
