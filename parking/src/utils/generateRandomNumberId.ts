export function generateRandomNumberId(): number {
    const min = 100000; // Valeur minimale (100000)
    const max = 999999; // Valeur maximale (999999)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}