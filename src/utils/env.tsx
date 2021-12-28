const hostname = window.location.hostname;
const protocol = hostname.includes('localhost') ? 'http' : 'https';

const globalVar = {
  apiUrl: `${protocol}://${window.location.host}/api`,
  hostname,
};

export default globalVar;
