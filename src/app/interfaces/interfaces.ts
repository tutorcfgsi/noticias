export interface RespuestaTopHeadlines {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface Article {
    source: Source;
    author?: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    category: string;
    publishedAt: string;
    content: string;
    language: string;
    country: string;
}

export interface Source {
    id: string;
    name: string;
}
