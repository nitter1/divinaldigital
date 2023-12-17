// Importe os módulos necessários
'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from '@/components/NewsItem';
import styles from 'styles/news.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function NewList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=Brasil%20economia&sortBy=popularity&pageSize=6&language=pt&apiKey=7125b23789204008980a41155c5ddeb0'
        );
        setArticles(response.data.articles.filter(article => article.title !== "[Removed]"));
      } catch (error) {
        setError('Erro ao carregar notícias');
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Principais Notícias</h1>
        <br />
        <div className={styles.container}>
          {articles.map(article => (
            <NewsItem
              key={article.title}
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          ))}
        </div>
        <Link className={styles.glowOnHover} href='/'>
          VOLTAR
        </Link>
      </main>
    </>
  );
}
