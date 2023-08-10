import style from './Meals.module.css';

export default function ({ title, description, price }) {
    return (
        <div className={style.item}>
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>{price}</h3>
        </div>
    )
}