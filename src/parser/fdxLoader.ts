
import { extractCharacters } from "./fdxParser"

export async function loadFDX(file: File) {

  const text = await file.text()

  const parser = new DOMParser()

  const xml = parser.parseFromString(
    text,
    "text/xml"
  )

  const nodes = Array.from(
    xml.querySelectorAll("Paragraph")
  )

  const elements = nodes.map(node => {

    return {
      type: node.getAttribute("Type"),
      text: node.textContent || ""
    }

  })

  const characters =
    extractCharacters(elements)

  return {
    elements,
    characters
  }

}
