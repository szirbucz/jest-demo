
export function sum (...args: number[]) {
    return args.reduce((sum, current) => sum + current, 0);
}