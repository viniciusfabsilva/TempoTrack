// src/components/NavBar/NavBar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WeatherNav.module.scss';

const WeatherNav: React.FC = () => {
    return (
        <>
            <nav className={styles.navBar}>
                <a href="/list"><h1>Tempo Track</h1></a>
                <a href="/search">Buscar Cidades</a>
                <a href="/list">Minhas Cidades</a>
            </nav>
        </>
    );
};

export default WeatherNav;
