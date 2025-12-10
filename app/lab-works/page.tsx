import { FileText, ArrowUpRight } from 'lucide-react';
import { LAB_WORKS } from '@/components/constants/constants';

export default function LabWorksPage() {
  return (
    <div className="my-12 mx-4 sm:mx-8 md:mx-14 lg:mx-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Lab Works
          </h1>
          <p className="text-lg text-muted-foreground">
            A curated collection of my laboratory works, experiments, and research projects.
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-muted/20">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Document
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {LAB_WORKS.map((lab) => (
                  <tr key={lab.id} className="hover:bg-accent/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-foreground">{lab.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {lab.filePath.split('/').pop()}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href={lab.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                        title="Open PDF"
                      >
                        <span className="mr-1">View</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
