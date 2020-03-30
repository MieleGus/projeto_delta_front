import { useHistory } from 'react-router-dom'
import axios from 'axios'


const DeleteAluno = async (props) => {
    const history = useHistory()
    try {
     const url =`http://teste-delta.herokuapp.com/api/alunos/${props.match.params.id}`  
     await axios.delete('https://cors-anywhere.herokuapp.com/'+url)
     
     history.push('/alunos') 
        
    } catch(err) {
        console.log(err)
    }
}

export default DeleteAluno
    