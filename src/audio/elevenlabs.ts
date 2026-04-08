
export async function generateSpeech(
  text: string,
  apiKey: string,
  voiceId: string
) {

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text
      })
    }
  )

  return await response.arrayBuffer()

}
