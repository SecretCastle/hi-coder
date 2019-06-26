import * as path from 'path';

// ------------------------------ data request param ------------------------------ //
/**
 * appkey in jdcloud
 */
export const APP_KEY: string = '1cd461a104819e40dbea99ba8181f98d';
/**
 * jdcloud api host
 */
export const REQUEST_URL: string = 'https://way.jd.com/jisuapi';
/**
 * query weather
 */
export const REQUEST_WEATHER: string = '/weather';
/**
 * query cities
 */
export const REQUEST_CITIES: string = '/freecity';

// ------------------------------ data request param ------------------------------ //


// ------------------------------ data ------------------------------ //
/**
 * user data path
 */
export const LOCAL_LOG_DIR: string = path.resolve(__dirname, '../local');
/**
 * user data file name
 */
export const LOCAL_LOG_FILENAME: string = 'user.json';

export const LOCAL_LOG_REAL_PATH: string = path.join(LOCAL_LOG_DIR, LOCAL_LOG_FILENAME);