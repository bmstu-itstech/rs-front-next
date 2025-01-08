export interface NewsInputModel {
    title: string;
    description: string;
    caption: string;
    text: string;
    actionLink: string;
    coverUrl: string;
    isDraft: boolean;
};

export interface INews extends NewsInputModel {
    id: string;
};
