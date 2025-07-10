// Use this inside actions, fixtures, or helper utilities where you don’t want to rely directly on process.env.
export const config = {
  baseUrl: process.env.BASE_URL ?? 'https://bid2revrec-dev.syneoshealth.com/ords/f?p=368',
  loginUrl: process.env.LOGIN_URL ?? 'https://bid2revrec-dev.syneoshealth.com/ords/f?p=368:LOGIN',
  credentials: {
    username: process.env.B2RR_USERNAME ?? '',
    password: process.env.B2RR_PASSWORD ?? '',
  },
};
