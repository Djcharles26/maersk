import * as validator from 'email-validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
    let errors = {};

    

    if(isEmpty(data.email)){
        errors.email = 'This field is required';
    }else if(!validator.validate(data.email)){
        errors.email = 'This is not the correct format'
    }

    const regex = /(.*[0-9].*)/
    if(isEmpty(data.password)){
       errors.password = 'This field is required';
    }else if(data.password.length < 8){
        errors.password = 'Password must be 8 characters min.';
    }else if(!regex.test(data.password)){
        errors.password = 'Password must contain one number';
    }

    return {
        errors, isValid: isEmpty(errors)
    }
}