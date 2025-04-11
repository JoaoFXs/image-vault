import { AccessToken, Credentials, User, UserSessionToken} from './user.resource';

class AuthService{
    baseURL: string = 'http://localhost:8080/v1/users'; 
    static AUTH_PARAM: string = "_auth"; // Variable that will be launched in the browser when you want to recover the session

    async authenticate(credentials: Credentials): Promise<AccessToken>{
        console.log(credentials)
        const response = await fetch(this.baseURL + "/auth", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.status == 401){
            throw new Error("User or password are incorrects!")
        }
        return await response.json();
    }

    async save(user: User) : Promise<void>{
        const response = await fetch(this.baseURL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }           
        });

        console.log("Response Auth.save: ", response);

        if(response.status == 409){
            throw new Error('User alredy exists!';)
        }
        return await response.json();
    }
}

export const useAuth = () => new AuthService();
    