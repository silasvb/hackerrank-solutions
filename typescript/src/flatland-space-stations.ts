'use strict';

/**
 * Flatland is a country with a number of cities, some of which have space stations. 
 * Cities are numbered consecutively and each has a road of $1km$ length connecting it 
 * to the next city. It is not a circular route, so the first city doesn't connect with
 * the last city. Determine the maximum distance from any city to it's nearest space 
 * station.
 */

/**
 * 
 * @param n The number of cities
 * @param c The indices of cities with a space station
 * @returns The maximum distance any city is from a space station
 */
export function flatlandSpaceStations(n: number, c: number[]): number {
    let cities = c.sort();
    let nextCityIdx = 0;

    const distances = Array.from({ length: n }, (u, v) => v).map(city => {
        if (nextCityIdx == 0) {
            return cities[nextCityIdx] - city;
        }
        if (nextCityIdx == cities.length - 1) {
            return city - cities[nextCityIdx];
        }

        return Math.min(cities[nextCityIdx] - city, city - cities[nextCityIdx + 1]);
    }
    );

    return Math.max(...distances);

}