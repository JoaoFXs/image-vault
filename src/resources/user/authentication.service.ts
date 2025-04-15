// Importing necessary types and a function to decode JWT tokens
import { AccessToken, Credentials, User, UserSessionToken } from './user.resource';
import jwt from 'jwt-decode';

// AuthService handles authentication-related operations
class AuthService {
    // Base URL for user-related backend endpoints
    baseURL: string = 'http://localhost:8080/v1/users'; 

    // Static variable used to store the session token in the browser's localStorage
    static AUTH_PARAM: string = "_auth"; 

    // Method to authenticate a user with given credentials (email and password)
    async authenticate(credentials: Credentials): Promise<AccessToken> {
        console.log(credentials);
        
        const response = await fetch(this.baseURL + "/auth", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // If credentials are invalid, throw an error
        if (response.status == 401) {
            throw new Error("User or password are incorrect!");
        }

        // Otherwise, return the access token
        return await response.json();
    }

    // Method to save a new user (user registration)
    async save(user: User): Promise<void> {
        const response = await fetch(this.baseURL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }           
        });

        console.log("Response Auth.save: ", response);

        // If user already exists (conflict), throw an error with the backend message
        if (response.status == 409) {
            const responseError = await response.json();
            throw new Error(responseError.error);
        }
    }

    // Initializes a session by decoding the token and storing session data
    initSession(token: AccessToken) {
        if (token.accessToken) {
            // Decode the token to extract user info
            const decodedToken: any = jwt(token.accessToken);
            console.log("Decoded Token: ", decodedToken);

            // Create a session object using decoded token data
            const userSessionToken: UserSessionToken = {
                accessToken: token.accessToken,
                email: decodedToken.sub,
                name: decodedToken.name,
                expiration: decodedToken.exp
            };

            // Save the session in the browser's localStorage
            this.setUserSession(userSessionToken);
        }
    }

    // Stores the user session in the browser's localStorage using a json in string format
    // This is used to persist the session across page reloads
    setUserSession(userSessionToken: UserSessionToken) {
        localStorage.setItem(AuthService.AUTH_PARAM, JSON.stringify(userSessionToken));
    }
}

// Exporting a custom hook to create a new AuthService instance
export const useAuth = () => new AuthService();
