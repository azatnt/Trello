import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import Service from './service'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';



export default function CardDetail() {
    const { id } = useParams()
    const history = useHistory()

    const [data,setData] = useState(null)
    const [taskName,setTaskName] = useState('')
    const [taskList,setTaskList] = useState(null);

    useEffect(()=>{
       const response = new Service().getCurrentCardDetail(id)
       response.then(res=>{
           setData(res.data)
       }).catch(err=>{
           console.log(err)
       })
    },[])
    

    const tasklistRequest = () => {
        const response = new Service().getTaskList(id)
        response.then(res=>{
            setTaskList(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    const createTask=()=>{
        const response = new Service().createTask(id,taskName)
        response.then(res=>{
            console.log(res)
            setTaskName("")
            tasklistRequest()
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        tasklistRequest()
    },[])

    const deleteCard = () => {
        const response = new Service().deleteCard(id)
        response.then(res=>{
            console.log(res)
            history.push('/')
        }).catch(err=>{
            console.log(err)
        })
    }








    return (
        <div>
            {data ? (
                <div style={{marginTop: "40px"}}>
                    <div>{data.name}</div>
                    <div>
                    {/* <div><input value={taskName} onChange={(e)=>setTaskName(e.target.value)} type="text"/> */}
                    <TextField value={taskName} onChange={(e)=>setTaskName(e.target.value)} id="standard-basic" />
                    </div> 
                    <Button style={{marginTop: "30px"}} onClick={createTask} variant="contained" color="primary">
                        ADD
                    </Button>
                    <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={deleteCard} variant="contained" color="secondary">
                        DELETE
                    </Button>
                    <div>
                        {taskList && taskList.map((el,index)=>(
                            <div key={index}>
                                {el.taskText}
                            </div>
                        ))}
                    </div> 
                </div>
            ):(
                <div>Ошибка</div>
            )}
            
        </div>
    )
}
