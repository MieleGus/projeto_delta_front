import React from 'react'
import { BrowserRouter as   Route, Link } from 'react-router-dom'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const TableAlunos = props => (
    <>

  <table className="table table-hover">
    <thead>
          <tr>
            <th>Alunos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
            
          {props.alunos.length > 0 ? (
            props.alunos.map(aluno => (
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

export default TableAlunos