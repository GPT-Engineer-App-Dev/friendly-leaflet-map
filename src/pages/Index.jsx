import LeafletMap from '../components/LeafletMap';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Leaflet Map Example</h1>
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <LeafletMap />
      </div>
      <p className="mt-4 text-gray-600">
        This map shows a default view of London. You can zoom and pan the map to explore.
      </p>
    </div>
  );
};

export default Index;
