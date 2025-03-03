import s from './Stiker.module.css'
export const StikerItem = ({img, label, choose})=>{
    return <li className={s.item} onClick={()=>{choose(img)}}>
        <img src={img} alt="" />
        <p className={s.label}>{label}</p>
    </li>
}