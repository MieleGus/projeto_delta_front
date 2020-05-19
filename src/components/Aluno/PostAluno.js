import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { usePost } from '../../services/api'
import '../Aluno/PostAluno'

const PostAluno = () => {   
    
    const [aluno, setAluno] = useState({nome: '', endereco: '', numero: '', bairro: '', cidade: '', aluno: '', uf: '', foto: '' });  
    const history = useHistory()
    const url ='http://teste-delta.herokuapp.com/api/alunos'

    const InsertAluno = async (e) => {
        e.preventDefault()
        const data = {nome: aluno.nome, endereco: aluno.endereco, numero: aluno.numero, bairro: aluno.bairro, cidade: aluno.cidade, uf: aluno.uf, foto: aluno.foto}
        try {
            await axios.post('https://cors-anywhere.herokuapp.com/'+url, data)
             .then((res) => {
               console.log(res)
               history.push('/alunos')
             })
         } catch(err) {
           console.log(err);
         }
    }

    const onChange = (e) => {
        e.persist();  
        setAluno({...aluno, [e.target.name]: e.target.value});  
    }  
  
    return (
        <form onSubmit={InsertAluno} encType="multipart/form-data">
        
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
                    <input type="file" className="custom-file-input" name="customFile"/>
                    <label className="custom-file-label" htmlFor="customFile">Escolher arquivo</label>
                </div>
                <button type="submit" className="btn btn-primary mt-2"><span>Salvar</span></button> 

            </div>
    
        </form>
)
}

export default PostAluno