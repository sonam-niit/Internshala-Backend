class AuthService{
    isAuthenticated(){
        //Check if the user is AUthenticated

        return localStorage.getItem('token')!==null;
    }
}

export default new AuthService();