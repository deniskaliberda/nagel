interface TechSpec {
  label: string;
  value: string;
  unit?: string;
}

interface TechSpecsTableProps {
  specs: TechSpec[];
}

export function TechSpecsTable({ specs }: TechSpecsTableProps) {
  if (specs.length === 0) {
    return null;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <caption className="sr-only">Technische Daten</caption>
        <thead>
          <tr className="border-b border-border bg-bg-alt">
            <th
              scope="col"
              className="px-4 py-2.5 text-left font-semibold text-primary"
            >
              Eigenschaft
            </th>
            <th
              scope="col"
              className="px-4 py-2.5 text-left font-semibold text-primary"
            >
              Wert
            </th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, index) => (
            <tr
              key={spec.label}
              className={index % 2 === 0 ? "bg-white" : "bg-bg-alt"}
            >
              <td className="px-4 py-2.5 font-medium text-primary">
                {spec.label}
              </td>
              <td className="px-4 py-2.5 text-text-muted">
                {spec.value}
                {spec.unit && (
                  <span className="ml-1 text-text-muted">{spec.unit}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
