/** Keep the same Roman ampersand in both Roman and italic display headings. */
export function DisplayText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(&)/).map((part, index) =>
        part === "&" ? <span key={index} className="display-ampersand">{part}</span> : part,
      )}
    </>
  );
}
