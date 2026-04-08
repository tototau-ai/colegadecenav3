export default function Home() {
  return (
    <main style={{padding:40,fontFamily:"sans-serif"}}>
      <h1>ColegaDeCena V3</h1>

      <p>
        AI rehearsal tool for actors and screenwriters.
      </p>

      <h2>Upload Script</h2>

      <input type="file" />

      <p style={{marginTop:30}}>
        Supported formats: FDX, PDF, TXT
      </p>
    </main>
  );
}
