import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


 export const useGet = (url) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
     useEffect(() => {
       setLoading(true)
        axios
          .get(`https://cors-anywhere.herokuapp.com/${url}`)
          .then(res => {
            // console.log(res)
            setData(res.data)
            setLoading(false)
          })  
    }, [])
    
    return [data, loading]
}
 
  export const usePost = (url, data) => {
    const history = useHistory()
    try {
       axios.post('https://cors-anywhere.herokuapp.com/'+url, data)
        .then((res) => {
          console.log(res)
          history.push('/alunos')
        })
    } catch(err) {
      console.log(err);
    }
}

