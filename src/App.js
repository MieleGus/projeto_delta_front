import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import axios from 'axios'
import Header from './components/elements/Header'
import TableAlunos from './components/Aluno/TableAlunos'
import AddAlunoForm from './components/Aluno/AddAlunoForm'
import EditAluno from './components/Aluno/EditAluno'
import GetAlunoId from './components/Aluno/GetAlunoId'
import DeleteAluno from './components/Aluno/DeleteAluno'


const url ='https://teste-delta.herokuapp.com/api/alunos/'

function App() {
  
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      axios
        .get('https://cors-anywhere.herokuapp.com/'+url)
        .then(res => {
          setData(res.data)
          setLoading(false)
        })
    }, [])

  
  return (
    
    <Router>
      <Header/>
      <div className="container text-center">
        <h2 className="mb-2">Alunos</h2>
        {loading && 
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
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
    
  );
}

export default App;
