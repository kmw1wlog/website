'use client';
import React from 'react';
import Map, { Source, Layer } from 'react-map-gl';

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 p-4 border-r">Filters</aside>
      <main className="flex-1">
        <Map
          initialViewState={{ latitude: 37.5665, longitude: 126.9780, zoom: 10 }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          style={{ width: '100%', height: '100%' }}
        />
      </main>
      <section className="w-96 p-4 border-l">Table</section>
    </div>
  );
}
