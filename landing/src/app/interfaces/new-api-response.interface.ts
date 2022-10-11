// export interface NewsApiResponse {
//   totalResults: number;
//   articles: {
//     title: string;
//     url: string;
//   }[];
// }

import { Article } from "./article.interface";

export interface NewsApiResponse {
  totalResults: number;
  articles: Article[];
}
