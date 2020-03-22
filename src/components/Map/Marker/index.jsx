import React, { Fragment } from 'react'
import styles from './marker.module.scss'

function Marker({ cases, recovered, deaths, todayCases, todayDeaths, active, critical, casesPerOneMillion }) {

    return (
        <Fragment>
            <span className={styles.marker}>
                <i className="fas fa-map-marker-alt"></i>
            </span>

            <section className={styles.description}>
                <p>All Cases: <span className={styles.info}>{cases}</span></p>
                <p>Recovered: <span className={styles.info}>{recovered}</span></p>
                <p>Deaths: <span className={styles.info}>{deaths}</span></p>
                <p>Today Cases: <span className={styles.info}>{todayCases}</span></p>
                <p>Today Deaths: <span className={styles.info}>{todayDeaths}</span></p>
                <p>Active: <span className={styles.info}>{active}</span></p>
                <p>Critical: <span className={styles.info}>{critical}</span></p>
                <p>Cases Per One Million: <span className={styles.info}>{casesPerOneMillion}</span></p>
            </section>
        </Fragment>
    )
}

export default Marker
