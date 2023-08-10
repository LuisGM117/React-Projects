import style from './Meals.module.css';
import MealItem from './MealItem';
import { DUMMY_MEALS } from './DummyMeals';

export default function Meals() {

    const mapping = DUMMY_MEALS.map(item => {
        return (
            <MealItem key={item.id}
                title={item.name}
                description={item.description}
                price={item.price} />
        )
    });

    return (
        <div className={style.container}>
            {mapping}
            <div>
                Meal Amount and Input
            </div>
        </div>
    )
}