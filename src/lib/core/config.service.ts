import { BehaviorSubject, Observable, ReplaySubject, Subject, map } from "rxjs";

export type Config = DashboardConfig & LayoutConfig;

export type Slice<X, T extends keyof X> = X[T];

export interface DashboardConfig {
  dashboard: {
    title: string;
    canEdit: boolean;
  };
}

export interface LayoutConfig {
  layout: {
    rows: {
      height: number;
    }[];
  };
}

export class ConfigService<T> {
  state!: T;
  state$ = new ReplaySubject<T>(1);

  constructor(initialValues: T) {
    this.init(initialValues);
  }

  private init(initialValues: T) {
    this.state = initialValues;
  }

  public updateState(value: Partial<T>) {
    this.state = { ...this.state, ...value };
    this.state$.next(this.state);
  }

  public static select(selector: (_state: T) => Observable<unknown>) {
    return () => state$.pipe(map());
  }
}

export function createRootState<T>(initialValue: T): BehaviorSubject<T> {
  return new BehaviorSubject<T>(initialValue);
}

export function createRootUpdater<T>(
  rootState$: BehaviorSubject<T>,
  updateFn: (state: T, newState: Partial<T>) => T
) {
  return (_newState: Partial<T>) => {
    const state = rootState$.getValue();
    const newState = updateFn(state, _newState);
    rootState$.next(newState);
  };
}

export function createFeatureState<T, V>(
  sourceState$: Observable<T>,
  selector: (state: T) => V
): Observable<V> {
  return sourceState$.pipe(map(selector));
}

export function updateState<T>() {}
