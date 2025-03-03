import { StikerItem } from "./Stiker"
import s from './Stiker.module.css'

export const StikerList = ({data, choose})=>{
    return<ul className={s.list}> {data.map((item)=>{
        return <StikerItem
        img={item.img}
        label={item.label}
        choose={choose}/>
        
    })} </ul>
} 