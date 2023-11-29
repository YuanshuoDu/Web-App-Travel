
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField, IconButton, Paper } from '@material-ui/core';
import searchStyles from './styles';
import React, { useState, useEffect } from "react";

{/*import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import searchStyles from './styles';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchStories, getStories } from "../../../redux/actions/stories";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const classes = searchStyles();
    const dispatch = useDispatch();




    const { stories, isLoading } = useSelector((state) => state.stories);

    useEffect(() => {
        // Filter and map storiesList when stories or searchTerm changes

        const filteredStories = stories
            .filter((val) => {

                if (

                    val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    isTag(searchTerm.toLowerCase(), val) ||
                    val.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.creator.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                    return val;
                };

            });

        if (searchTerm != "") {
            dispatch(searchStories(filteredStories));
        }


    }, [stories, searchTerm, dispatch]);

    const handleSearch = () => {

        try {
            dispatch(searchStories(storiesList));
        } catch (error) {
            alert(`Error: couldn't show search results.`);
        }
    }

    const isTag = (searchTag, val) => {
        val.tags.forEach((tag, i) => {
            console.log('tag is ' + tag);
            if (tag.includes(searchTag)) {
                console.log('search tag is ' + searchTag);
                return true;
            }
        });

        return false;
    }



    return (
        /*<Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ marginRight: '10px' }} />
            <Input
                placeholder={placeholder}
                onChange={onChange}
                sx={{width: searchBarWidth, color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
                disableUnderline
            />
        </Box>

        <div className={classes.templateContainer}>
            <div className={classes.searchInput_Container}>
                <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
                    setSearchTerm(event.target.value);


                }} />
            </div>

        </div>
    )
}

export default SearchBar;
*/}


const SearchBar = ({ stories, setSearchResults }) => {
    const classes = searchStyles();
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };



    const handleSearch = (e) => {
        if (!searchTerm) return setSearchResults(stories);
        
        const resultsArray = stories.filter(story => story.title.includes(searchTerm) || story.city.includes(searchTerm) || story.country.includes(searchTerm) || story.message.includes(searchTerm));

        setSearchResults(resultsArray);
    }

    return (
        <Paper className={classes.searchContainer}>
            <TextField
                className={classes.searchInput}
                variant="standard"
                placeholder="Search for a title/city/country"
                value={searchTerm}
                onChange={handleInputChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleSearch} edge="end">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Paper>
    )
}
export default SearchBar;