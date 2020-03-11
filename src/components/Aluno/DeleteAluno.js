import React, { useState, useEffect } from 'react'
import axios from 'axios'


const DeleteAluno = (props) => {
     const url =`http://teste-delta.herokuapp.com/api/alunos/${props.match.params.id}`  
     console.log(props.match.params.id)
    useEffect(async () => {
    await axios
        .delete('https://cors-anywhere.herokuapp.com/'+url)
        .then(res => {
        props.history.push('/alunos') 
        console.log(res)
        }).catch(err => {
            console.log(err)
        })
          }, [])
        return (null)
        
}

export default DeleteAluno
    