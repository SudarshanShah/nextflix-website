import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '49786b4f03msha0cf98c10ebe75dp1d3b0djsn3b02e6c473b7',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    console.log(data);


    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>

                    <h1>Series and Movies</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map(curElem => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;