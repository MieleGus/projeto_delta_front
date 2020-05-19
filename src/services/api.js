import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export const useGet = (url) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      try {
          setLoading(true)
          await axios
            .get(`https://cors-anywhere.herokuapp.com/${url}`)
            .then(res => {
              console.log(res)
              setData(res.data)
              setLoading(false)
            })  
      } catch(err) {
        console.log(err);
      }
    }

    getData()
  }, [])

  return [data, loading]
}
 
  export const usePost = (url, data) => {
    const history = useHistory()
    try {
       axios.post(url, data)
        .then((res) => {
          console.log(res)
          history.push('/alunos')
        })
    } catch(err) {
      console.log(err);
    }
}

