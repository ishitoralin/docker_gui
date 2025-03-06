export const handleGetHorizonTableItems = (fields, data) => {
    const result = []
    for (const element of fields) {
        if (data[element["key"]]) {
            if (element["func"]) {
                const newValue = element["func"](data[element["key"]])
                result.push({ key: element["key"], label: element["label"], value: newValue })
            } else {
                result.push({ key: element["key"], label: element["label"], value: data[element["key"]] })
            }
            continue
        }
    }

    return result
}

export const handleGetVerticalTableItems = (fields, data) => {
    const result = []
    for (const item of data) {
        const object = {}
        for (const element of fields) {
            if (String(item[element["key"]])) {
                if (element["func"]) {
                    const value = item[element["key"]]
                    const newValue = element["func"](value)
                    object[element["key"]] = newValue
                } else {
                    object[element["key"]] = item[element["key"]]
                }
                continue
            }
        }
        result.push(object)
    }

    return result
}