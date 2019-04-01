import memoryCache from 'memory-cache';

export default  () => {
  return (req, res, next) => {
    let key = 'culturesquad__' + req.originalUrl || req.url;
    let cachedBody = memoryCache.get(key);

    if (cachedBody) {
      return res.status(200).send(cachedBody);
    } else {
      next();
    }
  };
};

export const saveToCache = (key, data, duration) => {
  if (duration === undefined) {
    duration = process.env.CACHE_DURATION;
  }

  duration = typeof duration === 'string' ? Number(duration) : duration;
  memoryCache.put(key, data, duration * 1000);
};
