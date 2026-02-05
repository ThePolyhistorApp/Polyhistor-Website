/**
 * Geolocation utility for detecting user's city and personalizing content
 * Uses ipapi.co for IP-based geolocation (client-side only, no data storage)
 */

export interface LocationData {
  city: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
}

const DEFAULT_LOCATION: LocationData = {
  city: "New York",
  region: "New York",
  country: "United States",
  latitude: 40.7128,
  longitude: -74.006,
};

/**
 * Fetch user's location based on IP address
 * Falls back to default (New York) if geolocation fails or is denied
 * 
 * @returns LocationData object with city, region, country, and coordinates
 */
export async function getUserLocation(): Promise<LocationData> {
  try {
    const response = await fetch("https://ipapi.co/json/");
    
    if (!response.ok) {
      console.warn("Geolocation API failed, using default location");
      return DEFAULT_LOCATION;
    }

    const data = await response.json();

    return {
      city: data.city || DEFAULT_LOCATION.city,
      region: data.region || DEFAULT_LOCATION.region,
      country: data.country_name || DEFAULT_LOCATION.country,
      latitude: data.latitude || DEFAULT_LOCATION.latitude,
      longitude: data.longitude || DEFAULT_LOCATION.longitude,
    };
  } catch (error) {
    console.warn("Geo location detection failed:", error);
    return DEFAULT_LOCATION;
  }
}

/**
 * Get personalized headline based on user's city
 * 
 * @param city - User's city name
 * @returns Personalized headline string
 */
export function getPersonalizedHeadline(city?: string): string {
  if (!city || city === DEFAULT_LOCATION.city) {
    return "Never Lose Your Friends";
  }

  return `Never Lose Your Friends in ${city}`;
}

/**
 * Check if browser supports geolocation
 * 
 * @returns true if geolocation is supported
 */
export function isGeolocationSupported(): boolean {
  return "geolocation" in navigator;
}
