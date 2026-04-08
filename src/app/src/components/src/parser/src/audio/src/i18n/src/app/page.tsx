"use client"

import { loadFDX } from "../parser/fdxLoader"

export default function Home() {

  async function handleFile(e:any){

    const file = e.target.files[0]

    if(!file) return

    const script =
      await loadFDX(file)

    console.log("Characters:", script.characters)

  }

  return (
    <main style={{padding:40,fontFamily:"sans-serif"}}>

      <h1>ColegaDeCena V3</h1>

      <p>
        AI rehearsal tool for actors and screenwriters.
      </p>

      <h2>Upload Script</h2>

      <input
        type="file"
        onChange={handleFile}
      />

      <p style={{marginTop:30}}>
        Supported formats: FDX, PDF, TXT
      </p>

    </main>
  )

}
