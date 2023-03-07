export interface comment{
    id: number;
    comment: string;
    author: string;
    date: Date
}

export interface post{
    id: number;
    title: string;
    content: string;
    author: string;
    date: Date;
    comments: comment[]
}