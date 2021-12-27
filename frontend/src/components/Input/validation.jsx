
//Checks if the inputted value follows the regex expression.
export function validateNumber(value,type) {
        
        //convert input string to number
        value = +value
        let re = getRegex(type)
       
        if ( re.test(value)) {
            
            return  true
        }
        else {
            return false
        }
    }

// Get the regex expression for the input field type. For example, integer does not allow decimals or text.
function getRegex(type) {
    switch (type) {
        case "integer":
            return /^-?\d*\.?\d*$/
        case "decimal":
            return /^(?:0*(?:\.\d*)?|1(\.0*)?)$/
        default:
            return /^-?\d*\.?\d*$/
    }   
}

//Return a value in the range
export function validateRange(value,min,max) {
  
    //Convert input string to numbers
    value = +value
    min = +min
    max = +max

    if (value > max) {
     
        return max
    }
    else if (value < min){
      
        return min
    }

    else {
       
        return value
    }
}



//Validates profession number is in its respective range of the selected value
export function validateProfessionNumber(value,select) {
    //Convert input string to numbers
    value = +value
    select = +select
    var min = 0
    var max = 50
    
    if (select >=1 && select <= 5) {
        max = 10
    }
    else if (select === 6) {
        max = 30
    }
  
    return validateRange(value,min,max)
}