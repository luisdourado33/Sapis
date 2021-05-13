export type StatusBarStyle = 'default' | 'light-content' | 'dark-content';

export interface StackProps {
  theme?: StatusBarStyle | string | null;
}

export interface IUser {
  id?: number | null;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface IChannel {
  id?: number;
  name?: string;
  description?: string;
  latitude?: string;
  longitude?: string;
  field1?: string;
  field2?: string;
}

export interface IFeed {
  created_at?: any;
  field1?: any;
  field2?: any;
}
