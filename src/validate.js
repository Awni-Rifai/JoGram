export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(email==="")throw new Error('Email should not be empty');
    if(!re.test(String(email).toLowerCase()))throw new Error('Email is not valid')
}

export function validateMobile(num) {
    
    if(num==="" || num===0 || !num)throw new Error('Number should not be empty')
    if(!(/^[077|079|078]+[0-9]{7}$/gm).test(num))throw new Error('Number is not valid')
    
  
}

export function validateCountry(country) {
    return (/^[a-zA-Z ]/gm).test(country)
}

export function validateName(name) {
    if(name==="")throw new Error('The name should not be empty');
   
    const regex=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  if(!regex.test(name)){
      throw new Error('name is not valid')
  }
   

}

export function validatePassword(pass) {
    if(pass==="")throw new Error('Password should not be empty');
    if(!(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])/).test(pass))throw new Error('Password should be 8 char with upperCase special character');

    
}

export function validateUsername(username) {
    return /^[a-zA-Z0-9_.]{2,}[a-zA-Z]+[0-9]*$/.test(username);
}
export function confirmPassword(password,confirmPassword){
    if(password==="")throw new Error('confirm password should not be empty')
    if(password!==confirmPassword)throw new Error('passwords does not match')
}

