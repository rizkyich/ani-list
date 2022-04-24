import { gql } from '@apollo/client';

export const LIST_ANIME = gql`
  query ($page: Int) {
    Page(page: $page, perPage: 10) {
      pageInfo {
        total
        currentPage
        perPage
      }
      media(type: ANIME) {
        id
        title {
          romaji
        }
        coverImage {
          medium
        }
        bannerImage
        averageScore
      }
    }
  }
`;

export const ANIME_DETAIL = gql`
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
      }
      startDate {
        year
        month
        day
      }
      seasonYear
      episodes
      coverImage {
        medium
      }
      bannerImage
      averageScore
      description(asHtml: true)
    }
  }
`;
