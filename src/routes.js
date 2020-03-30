import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';  
import Header from './components/elements/Header'
import MenuAluno from './components/Aluno/MenuAluno'
import PostAluno from './components/Aluno/PostAluno'
import EditAluno from './components/Aluno/EditAluno'
import GetAlunoId from './components/Aluno/GetAlunoId'
import DeleteAluno from './components/Aluno/DeleteAluno'

import { useGet } from './services/api'

const Routes = () => {

    const [data, loading] = useGet('https://teste-delta.herokuapp.com/api/alunos/')
   
    return (
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
                    {/* <Route path='/alunos' exact render={props => <MenuAluno {...props} alunos={data}/>}/>  */}
                    <Route path='/alunos' exact component={MenuAluno}/> 
                    <Route  path='/alunos/:id' component={GetAlunoId}/> 
                    <Route path='/editAluno/:id'  component={EditAluno} />   
                    <Route path='/DeleteAluno/:id'  component={DeleteAluno}/>   
                    <Route path='/addaluno' component={PostAluno} />    
                </Switch>
            </div>
        </Router> 
    )
}

export default Routes