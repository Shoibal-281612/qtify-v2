import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card'; // Import your Card component
import Carousel from '../Carousel/Carousel'; // Import the new Carousel component
import styles from './Section.module.css';

// Import Material UI components for Tabs
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Section({ title, apiEndpoint, type }) { // Add 'type' to props
    const [data, setData] = useState([]); // Renamed from 'albums' to 'data' for generality
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [collapsed, setCollapsed] = useState(true); // Always true for songs section, toggled for albums
    const [genres, setGenres] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0); // 0 for 'All' genre by default

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiEndpoint);
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
                console.error("Error fetching data:", err);
            }
        };

        const fetchGenres = async () => {
            try {
                const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
                // Add 'All' genre at the beginning
                setGenres([{ key: "all", label: "All" }, ...response.data.data]);
            } catch (err) {
                console.error("Error fetching genres:", err);
            }
        };

        fetchData();
        if (type === "song") {
            fetchGenres();
        }
    }, [apiEndpoint, type]);

    if (loading) {
        return <div className={styles.loading}>Loading {title}...</div>;
    }

    if (error) {
        return <div className={styles.error}>Error: {error.message}</div>;
    }

    // Function to render a Card component, passed to the Carousel
    const renderCard = (item) => (
        <Card
            key={item.id}
            image={item.image}
            // Conditionally pass 'follows' or 'likes' based on type
            follows={type === "album" ? item.follows : undefined}
            likes={type === "song" ? item.likes : undefined}
            title={item.title}
        />
    );

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const filteredSongs = type === "song"
        ? (genres[selectedTab]?.key === "all"
            ? data
            : data.filter(song => song.genre.key === genres[selectedTab]?.key))
        : data; // For albums, just use the original data

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                {/* Conditionally render the "Show All" button */}
                {type === "album" && (
                    <button
                        className={styles.collapseButton}
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        {collapsed ? 'Show All' : 'Collapse'}
                    </button>
                )}
            </div>

            {/* Conditionally render Tabs for "Songs" section */}
            {type === "song" && (
                <Box sx={{ width: '100%', padding: '0 20px', marginBottom: '20px' }}>
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        aria-label="song genres tabs"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: '#34C94B', // Green indicator
                            },
                        }}
                        sx={{
                            '.MuiTab-root': {
                                color: '#FFFFFF', // Default tab text color
                                '&.Mui-selected': {
                                    color: '#34C94B', // Selected tab text color
                                },
                            },
                        }}
                    >
                        {genres.map((genre, index) => (
                            <Tab key={genre.key} label={genre.label} />
                        ))}
                    </Tabs>
                </Box>
            )}

            {/* Always render Carousel for songs, and conditionally for albums */}
            {collapsed || type === "song" ? (
                <Carousel data={filteredSongs} renderComponent={renderCard} />
            ) : (
                <div className={styles.gridContainer}>
                    {data.map(item => (
                        <Card
                            key={item.id}
                            image={item.image}
                            follows={type === "album" ? item.follows : undefined}
                            likes={type === "song" ? item.likes : undefined}
                            title={item.title}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Section;