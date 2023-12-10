'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from '@/components/NewsItem';
import styles from 'styles/news.module.css'
import Link from 'next/link'

export default function NewList() {
    const [articles, setArticles] = useState([])

    useEffect( () => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=Brasil%20economia&sortBy=popularity&pageSize=6&language=pt&apiKey=7125b23789204008980a41155c5ddeb0');
            console.log(response)
            setArticles(response.data.articles)
        }
       getArticles()
    }, [])

    return (
        <>
        <main className={styles.main}>
        <h1 className={styles.title}>Principais Notícias</h1><br />
        <div className={styles.container}>
            
        {articles.map(article => {
            // Verificar se o título não é "Removed" antes de renderizar a notícia
            if (article.title !== "[Removed]") {
                return (
                    <NewsItem 
                        key={article.title} // Adicione uma chave única para cada item na lista
                        title={article.title}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                );
            }
            return null; // Não renderizar a notícia se o título for "Removed"
        })}
    </div>
    <Link className={styles.glowOnHover} href='/'>VOLTAR</Link>
    </main>
    </>
    )
}