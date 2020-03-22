import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FormAlunoGetId from '../elements/FormAlunoGetId'
import { useGet } from '../../services/database'


const GetAlunoId = (props) => {

    // const [data,] = useGet(`http://teste-delta.herokuapp.com/api/alunos/${props.match.params.id}`)

const id = parseInt(props.match.params.id)

    return(
    <FormAlunoGetId id={id} />
    )
}


export default GetAlunoId