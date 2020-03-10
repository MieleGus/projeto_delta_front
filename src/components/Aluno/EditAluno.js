import React, { useState, useEffect } from 'react'
import axios from 'axios'


const EditAluno = props => {

    
    const [aluno, setAluno] = useState({nome: '', endereco: '', numero: '', bairro: '', cidade: '', aluno: '', uf: '', foto: '' })  
    const url =`http://localhost/projeto_delta2/api/alunos/${props.match.params.id}`  

    useEffect(() => {  
        const GetData = async () => {  
          const result = await axios(url)
          setAluno(result.data)
          console.log(result.data)
        }
      
        GetData(); 
      }, [])

      const EditAluno = (e) => {  
        e.preventDefault();  
        const data = {Id:props.match.params.id, nome: aluno.nome, endereco: aluno.endereco, numero: aluno.numero, bairro: aluno.bairro, cidade: aluno.cidade, uf: aluno.uf, foto: aluno.foto};  
        axios.post('http://localhost/projeto_delta2/api/alunos'+props.match.params.id, data)  
          .then((result) => {  
            props.history.push('/alunos')  
          })
      }

      const onChange = (e) => {  
        e.persist();  
        setAluno({...aluno, [e.target.name]: e.target.value});  
      }  


    return (

        <form onSubmit={EditAluno}>
    
    <div className="form">

        <div className="form-group row">
            <label htmlFor="name">Nome</label>
            <input type="text" name="nome" className="form-control" placeholder="Digite seu nome..." value={aluno.nome} onChange={onChange}></input>
        </div>

        <div className="form-group row">
            <label htmlFor="name">Endereço</label>
            <input type="text" name="endereco" className="form-control" placeholder="Digite seu endereço..."  value={aluno.endereco} onChange={onChange}></input>
        </div>

        <div className="form-group row">
            <label htmlFor="name">Número</label>
            <input type="text" name="numero" className="form-control" placeholder="Digite o número..."  value={aluno.numero} onChange={onChange}></input>
        </div>

        <div className="form-group row">
            <label htmlFor="name">Bairro</label>
            <input type="text" name="bairro" className="form-control" placeholder="Digite o bairro..."  value={aluno.bairro} onChange={onChange}></input>
        </div>

        <div className="form-group row">
            <label htmlFor="name">Cidade</label>
            <input type="text" name="cidade" className="form-control" placeholder="Digite a cidade..."  value={aluno.cidade} onChange={onChange}></input>
        </div>

        <div className="form-group row">
            <label htmlFor="name">UF</label>
            <input type="text" name="uf" className="form-control" placeholder="Digite a UF..."  value={aluno.uf} onChange={onChange}></input>
        </div>

        <div className="form-group row">
            <label htmlFor="foto"  value={aluno.foto} onChange={onChange}>Foto</label>          
        </div>

        <div className="form-group custom-file">
            <input type="file" className="custom-file-input" id="customFile"/>
            <label className="custom-file-label" htmlFor="customFile">Escolher arquivo</label>
        </div>
        <button type="submit" className="btn btn-primary mt-2" block><span>Salvar</span></button> 

   </div>
   
</form>


    )

}

export default EditAluno