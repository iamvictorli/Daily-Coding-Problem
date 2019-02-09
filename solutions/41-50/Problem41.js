// Problem 41
//
// This problem was asked by Facebook.
//
// Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary.
// If no such itinerary exists, return null.
// If there are multiple possible itineraries, return the lexicographically smallest one. All flights must be used in the itinerary.
//
// For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].
//
// Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.
//
// Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport 'A',
// you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first one is lexicographically smaller.
//
// https://leetcode.com/problems/reconstruct-itinerary/description/
//
// O(E log E) Time complexity
// O(E) Space Compleixty
// E is the number of edges for flights

import Heap from '../Data-Structures/Heap';

/**
 * Returns the persons' itinerary
 * @param {string[][]} flights
 * @param {string} startingFlight
 * @return {string[]?}
 */
function constructItinerary(flights, startingAirport) {
  const flightsMap = new Map();
  // maps origin to a priority queue of destination to keep the lexicographically order

  for (let i = 0; i < flights.length; i++) {
    const flight = flights[i];
    const [origin, destination] = flight;
    if (!flightsMap.has(origin))
      flightsMap.set(origin, new Heap((a, b) => b.localeCompare(a)));
    flightsMap.get(origin).add(destination);
  }

  const itinerary = [];
  visit(startingAirport, flightsMap, itinerary);

  const keys = Array.from(flightsMap.keys());
  for (let i = 0; i < keys.length; i++) {
    const pq = flightsMap.get(keys[i]);
    if (pq.size() !== 0) return null;
  }

  return itinerary;
}

/**
 * Perform dfs. When we are done visiting every neighbor in nodes, add to the front of itinerary
 * @param {string} airport
 * @param {Map<string, Heap>} flightsMap
 * @param {string[]} itinerary
 */
function visit(airport, flightsMap, itinerary) {
  const pq = flightsMap.get(airport);
  if (pq !== undefined && pq.size() !== 0) {
    visit(pq.poll(), flightsMap, itinerary);
  }
  itinerary.unshift(airport);
}

export default constructItinerary;
