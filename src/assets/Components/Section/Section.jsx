import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card'; // Import your Card component
import styles from './Section.module.css';

function Section({ title, apiEndpoint }) {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [collapsed, setCollapsed] = useState(false); // State for collapse button

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get(apiEndpoint);
                setAlbums(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
                console.error("Error fetching albums:", err);
            }
        };

        fetchAlbums();
    }, [apiEndpoint]);

    if (loading) {
        return <div className={styles.loading}>Loading {title}...</div>;
    }

    if (error) {
        return <div className={styles.error}>Error: {error.message}</div>;
    }

    const displayedAlbums = collapsed ? albums.slice(0, 7) : albums; // Show 7 or all based on collapsed state

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <button
                    className={styles.collapseButton}
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? 'Show All' : 'Collapse'}
                </button>
            </div>
            <div className={styles.gridContainer}>
                {displayedAlbums.map(album => (
                    <Card
                        key={album.id}
                        image={album.image}
                        follows={album.follows}
                        title={album.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Section;