import { User } from '@firebase/auth-types';

export interface Project{
    id?: string;
    name?: string;
    date?: any;
    code?: Code;
    userId?: string;
}

interface Code{
    html?: string;
    js?: string;
    css?: string;
}