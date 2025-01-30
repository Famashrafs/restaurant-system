import React, { useEffect, useState } from "react";
import "../components/css/LocationChecker.css"

const LocationChecker = ({ children }) => {
  const [isAllowed, setIsAllowed] = useState(null); // null: not checked, true: allowed, false: blocked

  const RESTAURANT_LOCATION = {
    latitude: 27.264690, // Example: New York City
    longitude: 31.155993,
    radius: 10, // Radius in kilometers
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  useEffect(() => {
    // Reset state on every page refresh by checking session storage
    if (sessionStorage.getItem("locationChecked") !== "true") {
      setIsAllowed(null); // Reset state
      sessionStorage.setItem("locationChecked", "true"); // Set session storage flag
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;

          const distance = getDistance(
            userLat,
            userLon,
            RESTAURANT_LOCATION.latitude,
            RESTAURANT_LOCATION.longitude
          );

          if (distance <= RESTAURANT_LOCATION.radius) {
            setIsAllowed(true);
          } else {
            setIsAllowed(false);
          }
        },
        (error) => {
          console.error("Geolocation Error:", error);
          setIsAllowed(false); // Treat as blocked if location is unavailable
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
      setIsAllowed(false);
    }
  }, []); // Only run on page load or refresh

  if (isAllowed === null) {
    return <p>Checking your location...</p>; // Show loading state
  }

  if (!isAllowed) {
    return (
      <div className="alert">
        <p>Sorry, our service is not available in your location.</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default LocationChecker;
