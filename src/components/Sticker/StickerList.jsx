import { StikerItem } from "./Stiker"
import s from './Stiker.module.css'

export const StikerList = ({data, newLabel, choose})=>{
    return<ul className={s.list}> {data.map((item)=>{
        return <StikerItem
        img={item.img}
        label= {item.label}
        newLabel={newLabel}
        choose={choose}/>
        
    })} </ul>
} 