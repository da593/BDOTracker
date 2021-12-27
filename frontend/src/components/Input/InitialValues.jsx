
export function getInitialValues(type) {
  switch (type) {
    case ("/cooking"):
      return getImperialInitialValues()
    case ("/alchemy"):
      return getImperialInitialValues()
    case ("/farming"):
      return getFarmingInitialValues()
    default:
      return ""
    }
  }


export function getImperialInitialValues(){
    const initialValues = {
        mastery:400,
        cp:300,
      };
      return initialValues
}

export function getFarmingInitialValues() {
    const initialValues = {
        origin:"grana",
        cratesPerTask:4,
        pSelect:7,
        pLevel:10,
        fame:4000,
        vp:"yes",
        ring:"no",
        hours:16,
        cycle:4,
        slots:100,
        fertilizer: "no",
      };
    return initialValues
}

