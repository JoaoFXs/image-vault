// Importing types used in the authentication service
import { AccessToken, Credentials, User, UserSessionToken } from './user.resource';

/**
 * Service responsible for user authentication.
 */
class AuthService {
    // Base URL of the user API
    baseURL: string = 'http://localhost:8080/v1/users';

    // Parameter used to store the auth token in the browser (e.g., in localStorage or cookies)
    static AUTH_PARAM: string = "_auth";

    /**
     * Authenticates a user with the provided credentials.
     * @param credentials An object containing the user's email/username and password.
     * @returns An access token (`AccessToken`) if authentication is successful.
     * @throws An error if the credentials are invalid (HTTP 401).
     */
    async authenticate(credentials: Credentials): Promise<AccessToken> {
        // Sends a POST request to the /auth endpoint with the user credentials
        const response = await fetch(this.baseURL + "/auth", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // If the response status is 401, throw an error indicating incorrect credentials
        if (response.status == 401) {
            throw new Error("User or password are incorrect!");
        }

        // Parse and return the response as JSON (should contain the access token)
        return await response.json();
    }
}

/**
 * Hook that returns a new instance of the AuthService.
 * Can be used in components or elsewhere to access authentication methods.
 */
export const useAuth =
