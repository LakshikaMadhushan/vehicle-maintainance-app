export const findObject  = async (array, value) => {
    await array.map(obj => {
        if (obj.value === value) {
            return obj
        }
    })
    return null;
}
