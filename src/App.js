import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import axios from 'axios'
import Header from './components/elements/Header'
import TableAlunos from './components/Aluno/TableAlunos'
import AddAlunoForm from './components/Aluno/AddAlunoForm'
import EditAluno from './components/Aluno/EditAluno'
import GetAlunoId from './components/Aluno/GetAlunoId'
const url ='http://localhost/projeto_delta2/api/alunos/'

function App() {
  
    const [data, setData] = useState({})
    useEffect(() => {
      axios
        .get(url)
        .then(res => {
          setData(res.data)
        })
    }, [])
     console.log(data)


  
  
  
  return (
    <>
    <Header/>
    <div className="container text-center">
      <h2 className="mb-2">Alunos</h2>
      
      <Router>
        <Switch>    
            <Route exact path='/alunos' render={props => <TableAlunos {...props} alunos={data}/>}/> 
            <Route  path='/alunos/:id' render={props => <GetAlunoId {...props} alunos={data}/>}/> 
            <Route path='/editAluno' component={EditAluno} />   
            <Route path='/addaluno' component={AddAlunoForm} />    
        </Switch> 
        
      </Router>
     
        
    </div>
    </>
  );
}

export default App;
