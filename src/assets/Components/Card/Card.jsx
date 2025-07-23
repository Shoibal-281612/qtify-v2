// src/components/Card/Card.js (or .jsx)
import React from 'react';
import styles from './Card.module.css';
import { Chip } from '@mui/material'; // Import Chip from Material UI

// Accept both 'follows' and 'likes' as props
function Card({ image, title, follows, likes }) {
    // Determine the label for the chip based on whether 'follows' or 'likes' is provided
    const chipLabel =
        follows !== undefined
            ? `${follows} Follows` // If 'follows' exists, use it
            : likes !== undefined
            ? `${likes} Likes`   // Else if 'likes' exists, use it
            : 'N/A';             // Fallback if neither is provided (shouldn't happen with correct data)

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
                    label={chipLabel} // Use the conditionally determined label
                    size="small"
                    className={styles.followsChip} // You might want to rename this style if it's generic
                />
            </div>
        </div>
    );
}

export default Card;