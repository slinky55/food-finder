
import styles from "../styles/FoodList.module.css"

export default function FoodList({ data, title }) {
    return (
        <div className={styles.listContainer}>
            <h1>Top 10 {title} Sorted Food Items</h1>
            {
                data ? (
                data.map((item) => {
                    return (
                    <div key={item.id}>
                        <h3>{item.description} | Calories {item.labelNutrients.calories.value}</h3>
                    </div>
                    )
                })
                ) : (
                <>
                    <p>Failed to fetch data</p>
                </>
                )
            }
        </div>
    )
}