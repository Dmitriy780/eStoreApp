const API_BASE_URL = __DEV__
  ? 'https://estoreapp.dev/api/' // development url
  : 'https://estoreapp/api/'; // production url

const API_END_POINTS = {
  SIGN_IN: API_BASE_URL + 'login',
};

export {API_END_POINTS};
