import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const EditAluno = (props) => {
    const history = useHistory()
    
    console.log(props.match.params.id)
    const url =`http://teste-delta.herokuapp.com/api/alunos/${props.match.params.id}`  

    const [data, setData] = useState({nome: '', endereco: '', numero: '', bairro: '', cidade: '', aluno: '', uf: '', foto: ''})  

    useEffect(() => {
        axios
            .get('https://cors-anywhere.herokuapp.com/'+url)
            .then(res => {
            setData(res.data)
            console.log(res)
            //   setLoading(false)
            }).catch(err => {
                console.log(err)
            })
        }, [props.match.params.id])

        
      const EditAluno = async (e) => {  
        
        e.preventDefault();  
        const dataToSend = {Id:props.match.params.id, nome: data.nome, endereco: data.endereco, numero: data.numero, bairro: data.bairro, cidade: data.cidade, uf: data.uf, foto: data.foto};  
        await axios.put('https://cors-anywhere.herokuapp.com/'+url, dataToSend)  
          .then((res) => {  
            history.push('/alunos')
            console.log(res)
          }).catch(err => {
              console.log(err)
          })
      }

      const onChange = (e) => {  
        e.persist();  
        setData({...data, [e.target.name]: e.target.value});  
      }  

    return (

        <form onSubmit={EditAluno} encType="multipart/form-data">
    
            <div className="form">

                <div className="form-group row">
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="nome" className="form-control" placeholder="Digite seu nome..." value={data.nome} onChange={onChange}></input>
                </div>

                <div className="form-group row">
                    <label htmlFor="name">Endereço</label>
                    <input type="text" name="endereco" className="form-control" placeholder="Digite seu endereço..."  value={data.endereco} onChange={onChange}></input>
                </div>

                <div className="form-group row">
                    <label htmlFor="name">Número</label>
                    <input type="text" name="numero" className="form-control" placeholder="Digite o número..."  value={data.numero} onChange={onChange}></input>
                </div>

                <div className="form-group row">
                    <label htmlFor="name">Bairro</label>
                    <input type="text" name="bairro" className="form-control" placeholder="Digite o bairro..."  value={data.bairro} onChange={onChange}></input>
                </div>

                <div className="form-group row">
                    <label htmlFor="name">Cidade</label>
                    <input type="text" name="cidade" className="form-control" placeholder="Digite a cidade..."  value={data.cidade} onChange={onChange}></input>
                </div>

                <div className="form-group row">
                    <label htmlFor="name">UF</label>
                    <input type="text" name="uf" className="form-control" placeholder="Digite a UF..."  value={data.uf} onChange={onChange}></input>
                </div>

                <div className="form-group row">
                    <label htmlFor="foto"  value={data.foto} onChange={onChange}>Foto</label>          
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

export default EditAluno