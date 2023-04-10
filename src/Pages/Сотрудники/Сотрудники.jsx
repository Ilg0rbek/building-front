import './Sotrudnik.css'
import { Container_Fluid } from '../../Container_Fluid'
import { Header } from './Header'
import { Sotrudnik_Titles } from './Sotrudnik_Titles'
import { Sotrudniki_cards } from './Cotrudniki_cards'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Sotrudkiko = () => {
  const [data, setData] = useState([])

  const handleData = async () => {
    try {
      const data = await axios.get('http://localhost:8080/api/workers')
      setData(data.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    handleData()
  }, [data])

  return (
    <div style={{ width: '100%' }} className="sotrudniko">
      <Container_Fluid>
        <Header />
        <main>
          <Sotrudnik_Titles />
          <Sotrudniki_cards data={data.data} />
        </main>
      </Container_Fluid>
    </div>
  )
}
