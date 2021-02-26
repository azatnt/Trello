import React from 'react'
import CardItem from './CardItem'

const CardsList = ({data}) => {
    return (
        <div style={{display:'flex',flexWrap:'wrap',margin:40}}>
            {data && data.map((el,index)=>(
                <CardItem key={index} info={el}/>
            ))}
        </div>
    )
}
export default CardsList
