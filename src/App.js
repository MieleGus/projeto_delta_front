import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';  
import Header from './components/elements/Header'
import TableAlunos from './components/Aluno/TableAlunos'
import AddAlunoForm from './components/Aluno/AddAlunoForm'
import EditAluno from './components/Aluno/EditAluno'
import GetAlunoId from './components/Aluno/GetAlunoId'
import DeleteAluno from './components/Aluno/DeleteAluno'

import { useGet } from './services/database'





// const url ='https://teste-delta.herokuapp.com/api/alunos/'

function App() {
  const [data, loading] = useGet('https://teste-delta.herokuapp.com/api/alunos/')


  return (
    <>
    <Router>
      <Header/>
      <div className="container text-center">
        <h2 className="mb-3 mt-3">Alunos</h2>
       
        
        {loading && 
          (<div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>)
        }
        
        <Switch>    
          <Route exact path='/alunos' render={props => <TableAlunos {...props} alunos={data}/>}/> 
          <Route  path='/alunos/:id' render={props => <GetAlunoId {...props} alunos={data}/>}/> 
          <Route path='/editAluno/:id'  render={props => <EditAluno {...props} alunos={data}/>} />   
          <Route path='/DeleteAluno/:id'  render={props => <DeleteAluno {...props} alunos={data}/>} />   
          <Route path='/addaluno' component={AddAlunoForm} />    
        </Switch>
      </div>
    </Router> 
     
    </>
  );
}

export default App;
