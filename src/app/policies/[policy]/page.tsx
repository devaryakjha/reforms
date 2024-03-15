export default function Policy(props: any) {
  return (
    <main>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </main>
  );
}
