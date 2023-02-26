
import useAuth from '@/hooks/useAuth';



const Navbar = () => {

  const { user} = useAuth()

  const handleClick = () => {
    console.log('You clicked me!');
  }


  return (
    <div className=" mx-auto">
      <div>Navbar user:{user}</div>
      <div>       
      <button onMouseEnter={handleClick}>Click me</button>
      </div>
     
    </div>
  )
  
}

export default Navbar