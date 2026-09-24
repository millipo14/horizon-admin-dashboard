type date = string | number

export const formatedDate = (date: date) => {
    return new Date(date).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    })
}