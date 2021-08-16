export function convertUrlToID(pathname) {
  const pathName = (pathname).split('/');

  const result = pathName[pathName.length - 1];

  return result;
}

export function manageDetailAPI(object) {
  if (typeof object === 'string') {
    return {
      meals: null,
    };
  }

  return object;
}

export function managePathname(pathname) {
  return pathname.split('/')[2];
}
