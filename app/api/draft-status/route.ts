import { draftMode } from 'next/headers'

export async function GET() {
  const { isEnabled } = await draftMode()
  return Response.json({
    draftMode: isEnabled,
    note: isEnabled
      ? 'Draft mode is ACTIVE — previewModeId bypass cookie is valid.'
      : 'Draft mode is inactive.',
  })
}
