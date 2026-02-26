export interface FileItem {
    name: string,
    value: string | undefined,
    language: string,
}

export interface Files {
    [key: string]: FileItem,
}



