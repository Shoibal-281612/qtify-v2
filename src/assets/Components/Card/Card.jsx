// src/components/Card/Card.js (or .jsx)
import React from 'react';
import styles from './Card.module.css';
import { Chip } from '@mui/material'; // Import Chip from Material UI

function Card({ image, follows, title }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.albumImage} />
                {/* If the small green circle is a play icon, you can add it here.
                    For now, it's not part of the props, so leaving it out unless needed. */}
                {/* <div className={styles.playIcon}></div> */}
            </div>
            <div className={styles.cardTitleSection}>
                <p className={styles.albumTitle}>{title}</p>
            </div>
            <div className={styles.cardFollowsSection}>
                <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className={styles.followsChip}
                />
            </div>
        </div>
    );
}

export default Card;