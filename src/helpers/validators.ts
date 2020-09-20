export const validatePhoneNumber = (value:string)=>{
    let phoneNumRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    if(value.match(phoneNumRegex)){
        return true;
    }
    return false;
}