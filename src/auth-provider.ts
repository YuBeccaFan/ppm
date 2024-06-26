import { User } from './components/projectList/searchPanel'


const localStorageKey = `__auth_provider_token__`
const apiUrl = process.env.REACT_APP_API_URL

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({ user }: { user: User }) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user;
}

export const login = (data: {username: string, password: string}) => {
    return fetch(`/api/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async (response: Response) => {
        if (response.ok) {
            return handleUserResponse(await response.json())
        }else{
            return Promise.reject(data)
        }
        
    })
}

export const register = (data: {username: string, password: string}) => {
    return fetch(`/api/register `,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async (response: Response) => {
        if (response.ok) {
            return handleUserResponse(await response.json())
        }else{
            return Promise.reject(data)
        }
    })
}

export const logout = async () => window.localStorage.removeItem(localStorageKey)