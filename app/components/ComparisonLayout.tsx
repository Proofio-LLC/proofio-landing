export default function ComparisonLayout({ leftTitle, rightTitle, left, right }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="p-4 border rounded">
        <h2>{leftTitle}</h2>
        <h3 className="mt-2">Pros</h3>
        <ul>
          {left.pros.map((p: string) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
        <h3 className="mt-2">Cons</h3>
        <ul>
          {left.cons.map((c: string) => (
            <li key={c}>• {c}</li>
          ))}
        </ul>
      </div>

      <div className="p-4 border rounded">
        <h2>{rightTitle}</h2>
        <h3 className="mt-2">Pros</h3>
        <ul>
          {right.pros.map((p: string) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
        <h3 className="mt-2">Cons</h3>
        <ul>
          {right.cons.map((c: string) => (
            <li key={c}>• {c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
