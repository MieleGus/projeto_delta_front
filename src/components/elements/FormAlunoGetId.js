import React from 'react'
import { useGet } from '../../services/database'

const FormAlunoGetId = id => {
    
    const [data,] = useGet(`http://teste-delta.herokuapp.com/api/alunos/${id.id}`)

    return (
        <form>
            <div className="form">

                <div className="form-group row">
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="nome" className="form-control" placeholder="Digite seu nome..." value={data.nome} readOnly></input>
                </div>

                <div className="form-group row">
                    <label htmlFor="name">Endereço</label>
                    <input type="text" name="endereco" className="form-control" placeholder="Digite seu endereço..."  value={data.endereco} readOnly></input>
                </div>

                <div className="form-group row">
                    <label htmlFor="name">Número</label>
                    <input type="text" name="numero" className="form-control" placeholder="Digite o número..."  value={data.numero} readOnly></input>
                </div>

                <div className="form-group row">
                    <label htmlFor="name">Bairro</label>
                    <input type="text" name="bairro" className="form-control" placeholder="Digite o bairro..."  value={data.bairro} readOnly></input>
                </div>

                <div className="form-group row">
                    <label htmlFor="name">Cidade</label>
                    <input type="text" name="cidade" className="form-control" placeholder="Digite a cidade..."  value={data.cidade} readOnly></input>
                </div>

                <div className="form-group row">
                    <label htmlFor="name">UF</label>
                    <input type="text" name="uf" className="form-control" placeholder="Digite a UF..."  value={data.uf} readOnly></input>
                </div>

                <div className="form-group row">
                    <label htmlFor="foto"  value={data.foto} readOnly>Foto</label>          
                </div>

                <div className="form-group custom-file">
                    <input type="file" className="custom-file-input" id="customFile"/>
                    <label className="custom-file-label" htmlFor="customFile">Escolher arquivo</label>
                </div>
             </div>
         </form>

    )
    

}




export default FormAlunoGetId
