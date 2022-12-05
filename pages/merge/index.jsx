
import Head from "next/head";

import FoodList from "../../components/FoodList"

import styles from "../../styles/Sort.module.css"

export default function MergePage({ data })
{
    console.log(data);

    return (
        <>
            <Head>
                <title>Food Finder</title>
            </Head>

            <div className={styles.pageContainer}>
                <FoodList data={data.list} title="Merge" />

                <p>Time taken: {Number((data.time / 1000).toFixed(4))} seconds</p>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    try {
        const res = await fetch("http://159.223.115.107:5600/mergeSortedData");
        const data = await res.json();

        return { props: { data } };
    } catch (err) {
        console.error(err);
        return { props: {} };
    }
}