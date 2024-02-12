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
