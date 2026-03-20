export async function GET() {
  const body = `# AI Divination
> AI guidance product for tarot, career, face, and palm readings.

## Main sections
- https://aidivination.net/: Homepage and mode overview
- https://aidivination.net/tarot: Tarot AI divination experience
- https://aidivination.net/career: Career AI divination experience
- https://aidivination.net/face: Face AI divination experience
- https://aidivination.net/palm: Palm AI divination experience
- https://aidivination.net/dream: Dream AI interpretation experience
- https://aidivination.net/stories: Eastern and Western themed story library
- https://aidivination.net/insights: Mode stories and explainers
- https://aidivination.net/help: Product usage support

## Contact
- Email: kuyadan136@gmail.com
- X: https://x.com/DanDan344479
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
