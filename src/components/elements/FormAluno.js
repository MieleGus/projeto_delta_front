import React from 'react'

const FormAluno = () => (
    
    <form>
        <div className="form">

            <div className="form-group row">
                <label htmlFor="name">Nome</label>
                <input type="text" name="nome" className="form-control" placeholder="Digite seu nome..."></input>
            </div>

            <div className="form-group row">
                <label htmlFor="name">Endereço</label>
                <input type="text" name="endereco" className="form-control" placeholder="Digite seu endereço..."></input>
            </div>

            <div className="form-group row">
                <label htmlFor="name">Número</label>
                <input type="text" name="numero" className="form-control" placeholder="Digite o número..."></input>
            </div>

            <div className="form-group row">
                <label htmlFor="name">Bairro</label>
                <input type="text" name="bairro" className="form-control" placeholder="Digite o bairro..."></input>
            </div>

            <div className="form-group row">
                <label htmlFor="name">Cidade</label>
                <input type="text" name="cidade" className="form-control" placeholder="Digite a cidade..."></input>
            </div>

            <div className="form-group row">
                <label htmlFor="name">UF</label>
                <input type="text" name="uf" className="form-control" placeholder="Digite a UF..."></input>
            </div>

            <div className="form-group row">
                <label htmlFor="foto">Foto</label>          
            </div>

            <div className="form-group custom-file">
                <input type="file" className="custom-file-input" id="customFile"/>
                <label className="custom-file-label" htmlFor="customFile">Escolher arquivo</label>
            </div>

       </div>
</form>
)

export default FormAluno
