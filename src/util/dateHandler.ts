export const months_pt = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

export const formatDate = (date: Date, language = 'pt') => {
    return ((date.getDay() + " " + months_pt[(date.getMonth())] + " " + date.getFullYear()));
}
