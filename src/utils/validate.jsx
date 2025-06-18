
export const checkValidation = (email, password) => {

    const isvalidateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isvalidatePassword= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(!isvalidateEmail){
        return "Email is not Valid"
    } 
    if(!isvalidatePassword){
        return "Password is not Valid"
    }
    
    return null;
}