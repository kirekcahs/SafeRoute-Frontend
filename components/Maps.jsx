import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

const getLeafletHTML = (lat, lng, zoom = 13) => `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body, #map { width: 100%; height: 100%; }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    const map = L.map('map', { zoomControl: true }).setView([${lat}, ${lng}], ${zoom});

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map);

    L.marker([${lat}, ${lng}])
      .addTo(map)
      .bindPopup('You are here')
      .openPopup();

    // Send tap coordinates back to React Native
    map.on('click', function(e) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ lat: e.latlng.lat, lng: e.latlng.lng })
      );
    });
  </script>
</body>
</html>
`;

export default function Maps({
  lat = 14.5995,
  lng = 120.9842,
  zoom = 17,
  onMapPress,
}) {
  const webViewRef = useRef(null);

  const handleMessage = (event) => {
    if (onMapPress) {
      const coords = JSON.parse(event.nativeEvent.data);
      onMapPress(coords);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        originWhitelist={["*"]}
        source={{ html: getLeafletHTML(lat, lng, zoom) }}
        style={styles.map}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onMessage={handleMessage}
        startInLoadingState={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
