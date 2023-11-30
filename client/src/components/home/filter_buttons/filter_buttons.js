import {
    Typography,
    Container,
    Button,
} from "@material-ui/core";
import filterStyles from './styles';

const FilterButtons = ({ handleClick }) => {
    const classes = filterStyles();
    return (
        <>

            <div className={classes.filterFlex}>

                <Button onClick={handleClick} variant="contained"
                >Recent</Button>
                <Button onClick={handleClick} variant="contained"
                >This week</Button>
                <Button onClick={handleClick} variant="contained"
                >This month</Button>
                <Button onClick={handleClick} variant="contained"
                >This year</Button>
                <Button onClick={handleClick} variant="contained"
                >All</Button>
            </div>
        </>
    );
};

export default FilterButtons;