import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const Home = () => {
    const [prod , setProd] = useState([])
    const [search , setSearch] = useState("")
    const [menu , setMenu] = useState("")
    const [login , setLogin] = useState(null)
    
    const getProducts =()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProd(json))
            
    }
    useEffect(()=>{
        getProducts()
    },[])
    
  return (
    <div>
      <Navbar setSearch ={setSearch}/>
      <Menu setMenu={setMenu}/>
      <Products product = {prod} search ={search} menu={menu}/>
      <Footer/>
    </div>
  )
}

export default Home
