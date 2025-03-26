export const handleGetHorizonTableItems = (fields, data) => {
    const result = []
    for (const element of fields) {
        if (String(data[element["key"]])) {
            if (element["func"]) {
                const newValue = element["func"](data[element["key"]])
                result.push({ key: element["key"], swap: element["swap"], label: element["label"], value: newValue })
            } else {
                result.push({ key: element["key"], swap: element["swap"], label: element["label"], value: data[element["key"]] })
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

export const handleStringHeadToUpperCase = (string) => {
    if (!string || typeof string !== "string") return string

    const head = string[0].toUpperCase();
    const tail = string.slice(1).toLowerCase();
    return head + tail;
};

export const handleTruncateString = (string) => {
    if (typeof string !== "string") return string;

    if (string.length > 20) {
        return `${string.slice(0, 20)}...`;
    }
    return string;
}

export const handleDateTransform = (date) => {
    const newDate = new Date(date)

    return newDate
}