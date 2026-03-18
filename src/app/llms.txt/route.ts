export async function GET() {
  const body = `# AI Divination
> AI guidance product for tarot, career, face, and palm readings.

## Main sections
- https://www.aidivination.app/: Homepage and mode overview
- https://www.aidivination.app/tarot: Tarot AI divination experience
- https://www.aidivination.app/career: Career AI divination experience
- https://www.aidivination.app/face: Face AI divination experience
- https://www.aidivination.app/palm: Palm AI divination experience
- https://www.aidivination.app/insights: Mode stories and explainers
- https://www.aidivination.app/help: Product usage support

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
