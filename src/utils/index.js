export function importAll(r) {
    let arr = []
    r.keys().forEach((file) => {
        let fileName = file.substr(2).split('.vue')[0]
        if (fileName != 'Start') {
        let firstLetter = fileName.charAt(0)
        let lowerCase = fileName.replace(firstLetter, firstLetter.toLowerCase())
        arr.push({
            path: `/${lowerCase}`,
            name: lowerCase,
            // component: () => import(`@/views/${fileName}.vue`)
            component: (resolve) =>
            require([`@/components/${fileName}.vue`], resolve)
        })
        }
    })
    return arr;
}
  
export function deepCopy(target) {
    if (typeof target == 'object') {
        const result = Array.isArray(target)? [] : {}
        for (const key in target) {
            if (typeof target[key] == 'object') {
                result[key] = deepCopy(target[key])
            } else {
                result[key] = target[key]
            }
        }

        return result
    }
    
    return target
}
