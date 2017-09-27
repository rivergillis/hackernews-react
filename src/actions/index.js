import axios from 'axios';

const TOP_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json';
const POST_URL = 'https://hacker-news.firebaseio.com/v0/item/';

export const FETCH_IDS = 'FETCH_IDS';
export const FETCH_POST = 'FETCH_POST';

export function fetchTopPostIds() {
  const url = TOP_STORIES_URL;
  const request = axios.get(url);

  return {
    type: FETCH_IDS,
    payload: request
  };
}

export function fetchPost(postId) {
  const url = `${POST_URL}${postId}.json`;
  const request = axios.get(url);

  return {
    type: FETCH_POST,
    payload: request
  }
}