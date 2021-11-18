import { Platform } from 'react-native';

export function isAndroidVersion21Upper() {
  return Platform.OS === 'android' && Platform.Version >= 21;
}

export function capitalizeFirstLetter(line: string) {
  return line.charAt(0).toUpperCase() + line.slice(1);
}
