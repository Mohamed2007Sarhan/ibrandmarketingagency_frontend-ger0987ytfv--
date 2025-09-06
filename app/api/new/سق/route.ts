import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(
  _req: Request,
  context: { params: Promise<{ path: string[] }> }
) {
  // In Next.js 15 dynamic APIs, params is now async. Await it before usage.
  const awaitedParams = await context.params
  const segments = awaitedParams?.path || []
  // Prevent path traversal
  const safeSegments = segments.filter((seg) => typeof seg === "string" && !seg.includes(".."))
  const absolute = path.join(process.cwd(), "new", ...safeSegments)
  try {
    const stat = fs.statSync(absolute)
    if (!stat.isFile()) {
      return new NextResponse("Not Found", { status: 404 })
    }
    const ext = path.extname(absolute).toLowerCase()
    const type =
      ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" :
      ext === ".png" ? "image/png" :
      ext === ".webp" ? "image/webp" :
      ext === ".gif" ? "image/gif" :
      ext === ".mp4" ? "video/mp4" :
      ext === ".mp3" ? "audio/mpeg" :
      ext === ".wav" ? "audio/wav" :
      ext === ".m4a" ? "audio/mp4" :
      ext === ".aac" ? "audio/aac" :
      "application/octet-stream"

    const data = fs.readFileSync(absolute)
    return new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": type,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch {
    return new NextResponse("Not Found", { status: 404 })
  }
}







