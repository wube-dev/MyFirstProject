import { useState } from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import './css/styles.css'
import Macpro from './component/Macpro/Macpro'
import Iphone from './component/Iphone  11 pro/Iphone 11 pro'  
import IPhone from './component/iPhone 11/IPhone'
import Watch from './component/Watch/Watch'
import Tv from './component/Tv/Tv'
import Macbook from './component/Macpro2/Macbook'
Macbook
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />  
      <Macpro />
      <Iphone />
      <IPhone />
      <Watch />
      <Tv />
      <Macbook/>
      <Footer /> 
    </>
  )
}

export default App;