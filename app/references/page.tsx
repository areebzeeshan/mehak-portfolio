const references = [
  {
    name: 'Engr. Dr. M. Sameer Ahmad',
    title: 'Assistant Professor',
    affiliation: 'Institute of Industrial Electronics Engineering (IIEE)',
    contact: 'Phone: +92 300 1234567'
  },
  {
    name: 'Dr. Ayesha Khan',
    title: 'Professor & Head of Department',
    affiliation: 'Department of Computer Science, NED University',
    contact: 'akhan@neduet.edu.pk'
  },
  {
    name: 'Prof. Ali Raza',
    title: 'Associate Professor',
    affiliation: 'Department of Electrical Engineering, NUST',
    contact: 'Phone: +92 321 9876543'
  }
];

export default function ReferencesPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">REFERENCES</h1>
        <div className="space-y-8">
          {references.map((ref, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-400/20 transition-shadow">
              <h2 className="text-2xl font-semibold text-cyan-300 mb-2">{ref.name}</h2>
              <p className="text-lg text-gray-300">{ref.title}</p>
              <p className="text-gray-400 mt-1">{ref.affiliation}</p>
              {ref.contact && (
                <p className="text-cyan-200 mt-2">{ref.contact}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
