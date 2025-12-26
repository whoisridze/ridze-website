export const glitchChars = "█▓▒░█▀▄▌▐░▒▓■□●○%$#@!&*()_+-=[]{}|;:<>,./?\\~`";
export const voidChars = "█▓▒░";
export const redactionChar = "█";

export function getRandomGlitchChar(): string {
  return glitchChars.charAt(Math.floor(Math.random() * glitchChars.length));
}

export function getRandomVoidChar(): string {
  return voidChars.charAt(Math.floor(Math.random() * voidChars.length));
}

export function corruptText(text: string, probability: number = 0.2): string {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (Math.random() < probability) {
      result += getRandomGlitchChar();
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}
