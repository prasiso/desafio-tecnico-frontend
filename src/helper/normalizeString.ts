export const normalizeString = (text: string) => {
    return text.toLowerCase().normalize('NFD').replace(/\s+/g, '')
}