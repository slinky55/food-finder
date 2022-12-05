
import Head from "next/head";

import FoodList from "../../components/FoodList"

import styles from "../../styles/Sort.module.css"

export default function QuickPage({ data })
{
    return (
        <>
            <Head>
                <title>Food Finder</title>
            </Head>

            <div className={styles.pageContainer}>
                <FoodList data={data.list} title="Quick" />

                <p>Time taken: {Number((data.time / 1000).toFixed(4))} seconds</p>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    try {
        const res = await fetch("http://159.223.115.107:5600/quickSortedData");
        const data = await res.json();

        return { props: { data } };
    } catch (err) {
        console.error(err);
        return { props: {} };
    }
}