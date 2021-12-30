
export function getDefaultValues(type) {
  switch (type) {
    case ("/cooking"):
      return getCookingDefaultValues()
    case ("/alchemy"):
      return getAlchemyDefaultValues()
    case ("/farming"):
      return getFarmingDefaultValues()
    default:
      return ""
    }
  }


export function getCookingDefaultValues(){
    const defaultValues = {
        "mastery":400,
        "cp":300,
      };
      
      return defaultValues
}

export function getAlchemyDefaultValues(){
  const defaultValues = {
      "mastery":400,
      "cp":300,
    };
    return defaultValues
}

export function getFarmingDefaultValues() {
    const defaultValues = {
        "origin":"grana",
        "cratesPerTask":4,
        "pSelect":7,
        "pLevel":10,
        "fame":4000,
        "vp":"yes",
        "ring":"no",
        "hours":16,
        "cycle":4,
        "slots":100,
        "fertilizer": "no",
      };
    return defaultValues
}

