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