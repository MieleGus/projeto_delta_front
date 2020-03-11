import React, {useState, useEffect} from 'react'
import axios from 'axios'
const GetAlunoId = (props) => {

    const url =`http://teste-delta.herokuapp.com/api/alunos/${props.match.params.id}`
    console.log(props.match.params.id)

    const [data, setData] = useState({})
    // const [loading, setLoading] = useState(true)
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
    }, [])

    console.log()




    return(
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


export default GetAlunoId