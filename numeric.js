function numericals(s) {
    let string = ""
    let obj = {}
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] >= 1) {
            obj[s[i]] += 1
            string += obj[s[i]]
        } else {
            obj[s[i]] = 1
            string += obj[s[i]]
        }
    }
    return string
}