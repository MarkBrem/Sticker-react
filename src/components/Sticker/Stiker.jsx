import s from './Stiker.module.css'
export const StikerItem = ({img, label, newLabel, choose})=>{
    return <li className={s.item} onClick={()=>{choose(label)}}>
        <img src={img} alt="" />
        {newLabel === label && <p>{newLabel}</p>}
    </li>
}