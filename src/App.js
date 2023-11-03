import React, { useState } from 'react'
import Loading from './Loading';

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
  }, [])
  
  if (loading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  if (tours.lenth === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn'>refresh</button>
        </div>
      </main>
    )
  }
  
  return (
    <main>
      <Tours tours={tours} />
    </main>
  )
}

export default App
