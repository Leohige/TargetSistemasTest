export default class StringReverser {
    static reverse(str: string): string {
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }

        return reversed;
    }
}
