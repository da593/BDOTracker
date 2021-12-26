//Checks if the inputted value follows the regex expression.
export function validateNumber(value,re) {
        
        if ( re.test(value)) {
            return true
        }
        else {
            return false
        }
    }

// Get the regex expression for the input field type. For example, integer does not allow decimals or text.
export function getRegex(type) {
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