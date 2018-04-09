export interface Project{
    id?: string;
    name?: string;
    code?: Code;
}

interface Code{
    html?: string;
    js?: string;
    css?: string;
}