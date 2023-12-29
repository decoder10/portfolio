type Nullable<T> = T | null;
type Undefined<T> = T | undefined;
type Unknown<T> = T | unknown;
type TKeyOf<T> = keyof T;

type TEvent = MouseEvent | TouchEvent;

type TDayState = 'light-theme' | 'dark-theme' | '';
