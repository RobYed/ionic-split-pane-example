export interface Category {
    id: string;
    title: string;
    comment: string;
    dateCreated: Date;
}

export interface CategoryEntry {
    id: string;
    category: string;
    startedBy: string;
    dateStarted: Date;
}