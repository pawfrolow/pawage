export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type TChildrenProps = {
  children: React.ReactNode,
  style?: React.CSSProperties,
}

export type TUnits = 'years' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds'

export type TUnintsObject = Record<TUnits, string[]>
