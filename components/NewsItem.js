'use client'
import React from 'react'
import styles from '../styles/newsitem.module.css'
import Image from 'next/image'

const NewsItem = ( { title, description, url, urlToImage }) => {
    return (
        <>
        <div className={styles.newsapp}>
            <div className={styles.newsitem}>
                <Image className={styles.newsimg} src={urlToImage} alt={urlToImage}/>
                <h3><a className={styles.link} href={url}>{title}</a></h3>
            </div>
        </div></>
    )
    
}

export default NewsItem