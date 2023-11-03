import React, { useState } from 'react'

const url =  'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);


  const fetchTours = async () => {
    setLoading(true);
    try {
      const reponse = await fetch(url)
      const tours = await reponse.json()
      setLoading(false)
      setTours(tours);
    } catch (error){
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  },[])
  
  return (
    <main>
      
    </main>
  )
}

export default App
