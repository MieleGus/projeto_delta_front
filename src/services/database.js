import { useState, useEffect } from 'react'
import axios from 'axios'

// const baseUrl='https://teste-delta.herokuapp.com/'
// const url ='https://teste-delta.herokuapp.com/api/alunos/'

 export const useGet = url => {

    const [data, setData] = useState({})
     const [loading, setLoading] = useState(true)
    useEffect(() => {
      axios
        .get(`https://cors-anywhere.herokuapp.com/${url}`)
        .then(res => {
          setData(res.data)
           setLoading(false)
        })
    }, [])
    
    return [data, loading] 
}

