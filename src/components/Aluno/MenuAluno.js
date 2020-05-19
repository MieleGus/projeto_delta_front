import React, { useState, useEffect } from 'react'
import {  Link } from 'react-router-dom'  
import { useGet } from '../../services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const MenuAluno = () => {
  const url = 'http://teste-delta.herokuapp.com/api/alunos'

  const [data] = useGet(url)
  return(
    <>
  <table className="table table-hover">
    <thead>
          <tr>
            <th>Alunos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(aluno => (
              <tr key={aluno.id}>
                <td>{aluno.nome}</td>
                <td>
                    <Link to={`/alunos/${aluno.id}`}>     
                        <button className="btn mr-5"><FontAwesomeIcon icon={faEye}/></button>
                    </Link>

                    <Link to={`/EditAluno/${aluno.id}`}>
                        <button className="btn mr-5"><FontAwesomeIcon icon={faEdit}/></button>  
                    </Link>

                    <Link to={`DeleteAluno/${aluno.id}`}>
                        <button className="btn"><FontAwesomeIcon icon={faTrashAlt}/></button>  
                    </Link>  
                </td>
              </tr>
            ))
            ) : (
                <tr>
                    <td>Sem alunos cadastrados</td>
                </tr>
            )}   
                   
        </tbody>     
  </table>
  <Link to='/addaluno'>     
      <button className="btn btn-primary mt-4">Adicionar aluno</button>
  </Link>

    </>
    )
}

export default MenuAluno