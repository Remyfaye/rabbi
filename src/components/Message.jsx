/* eslint-disable react/prop-types */




const Message = ({message, userId}) => {
    
  return (
    <div  className={message.recieverId === userId ? 'm-5' 
    : 'flex items-end m-5 justify-end'}>
      <h1 
      className={message.recieverId === userId ? 'bg-slate-300 w-[50%] p-5 rounded-3xl' 
      : 'bg-slate-500 w-[50%] p-5 rounded-3xl margin-auto flex flex-end align-super'}
      >{message.message}</h1>
    </div>
  )
}

export default Message
