import { PRESENTATIONS } from "@/components/constants/constants";
import { ArrowUpRight, FileText } from "lucide-react";

export default function PresentationsPage() {
  return (
    <div className="my-20 mx-4 sm:mx-8 md:mx-14 lg:mx-20">
      <h1 className="text-4xl font-bold mb-6">Presentations</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Slides and materials from my talks and presentations.
      </p>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-muted/20">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                >
                  Document
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {PRESENTATIONS.map((pres) => (
                <tr
                  key={pres.id}
                  className="hover:bg-accent/30 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-foreground">
                          {pres.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {pres.filePath.split("/").pop()}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href={pres.filePath}
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
  );
}
