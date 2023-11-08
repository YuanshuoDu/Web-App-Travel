import jwt from 'jsonwebtoken';

// Get the JWT token from local storage
const token = localStorage.getItem('jwtToken');

const checkTokenValidity = () => {
    if (token) {
        try {
            const decodedToken = jwt.decode(token);
            const currentTime = Math.floor(Date.now() / 1000); // Current timestamp

            if (decodedToken.exp < currentTime) {
                // Token has expired
                // Handle the expiration scenario, e.g., require the user to log in again
                console.log('JWT token has expired. Please log in again.');
            } else {
                // Token is still valid, and you can continue to use it
                console.log('JWT token is valid.');
            }
        } catch (error) {
            // Token is invalid or decoding error
            console.error('Invalid JWT token:', error);
        }
    } else {
        // No JWT token found
        console.log('No JWT token found. Please log in.');
    }
};

export default checkTokenValidity;

