import s from './Stiker.module.css'
export const Choice = ({img})=>{
    return <div >
        <img className={s.choiceList} src={img} alt="" />
    </div>
}