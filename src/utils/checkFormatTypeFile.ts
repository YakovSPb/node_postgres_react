const acceptableFormatsForComments = [
    'jpg',
    'png',
    'jpeg'
]
export const checkFormatTypeFile = (formatType: string): boolean => {
    const formatTypeArr = formatType.toLowerCase().split('.')
    const type = formatTypeArr[formatTypeArr.length - 1]
    return acceptableFormatsForComments.includes(type)
}
