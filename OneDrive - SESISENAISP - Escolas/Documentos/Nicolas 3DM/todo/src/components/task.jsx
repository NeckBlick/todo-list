import './style.css'
import {BsTrash3Fill} from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai'

const task = ({title, isCompleted, onDelete}) => {
  return (
    <div className='container-task'>
        {isCompleted ? <AiFillCheckCircle/> :  <div className='complete'> </div>}
            <h1 className='title'>Concluir o código</h1>
        <div className='delete'>
            <BsTrash3Fill/>
        </div>
    </div>
  )
}

export default task