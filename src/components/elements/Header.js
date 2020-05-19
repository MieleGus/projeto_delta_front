import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'  

const Header = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={'/addaluno'} className="nav-link" >Adicionar aluno</Link>   
                  {/* link não está funcionando, não sei porque :/ */}
                </li>
                <li className="nav-item">
                  <Link to={'/alunos'} className="nav-link">Alunos cadastrados</Link>
                </li>
              </ul>
            </div>
          </nav>    
      </>
    )
  }

export default Header