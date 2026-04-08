
export function normalizeCharacter(name: string) {

  return name
    .trim()
    .toUpperCase()
    .replace(/\s+/g, " ")

}

export function extractCharacters(elements: any[]) {

  const characters = new Set<string>()

  elements.forEach(el => {

    if (el.type === "Character") {

      characters.add(
        normalizeCharacter(el.text)
      )

    }

  })

  return Array.from(characters)

}
