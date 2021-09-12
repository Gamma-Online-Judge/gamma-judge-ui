export const customCompare = <T>(a:T, b:T) => {
    if(a < b) return -1;
    if(b < a) return 1;
    return 0;
}