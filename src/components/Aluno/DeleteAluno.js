
import axios from 'axios'


const DeleteAluno =  (props) => {
     const url =`http://teste-delta.herokuapp.com/api/alunos/${props.match.params.id}`  
     axios
        .delete('https://cors-anywhere.herokuapp.com/'+url)
        .then(res => {
        props.history.push('/alunos') 
        }).catch(err => {
            console.log(err)
        })
        
        return null
        
}

export default DeleteAluno
    