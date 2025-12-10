export default function CertificationsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Certifications & Awards</h1>
      <p className="text-lg text-muted-foreground mb-8">
        My professional certifications and recognitions.
      </p>
      <div className="grid gap-6">
        <div className="border rounded-lg p-6 hover:bg-accent/50 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Certification/Award Name</h2>
          <p className="text-muted-foreground">Issuing Organization, Year</p>
          <p className="mt-2">Description of the certification or award.</p>
        </div>
      </div>
    </div>
  );
}
