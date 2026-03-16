import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
  try {
    const manifestPath = join(process.cwd(), '.next', 'prerender-manifest.json')
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'))
    const preview = manifest.preview

    return Response.json({
      previewModeId: preview?.previewModeId ?? null,
      previewModeSigningKey: preview?.previewModeSigningKey ?? null,
      previewModeEncryptionKey: preview?.previewModeEncryptionKey ?? null,
    })
  } catch {
    return Response.json(
      { error: 'Could not read prerender manifest. Is the app built?' },
      { status: 500 }
    )
  }
}
