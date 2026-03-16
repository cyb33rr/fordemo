import { updatePost } from './actions'

export default function Home() {
  return (
    <main>
      <h1>previewModeId Leak Demo</h1>
      <hr />
      <h2>Trigger Server Action</h2>
      <p>This form calls a Server Action that does <code>revalidateTag()</code> + <code>redirect()</code>.</p>
      <form action={updatePost}>
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Update Post (revalidateTag + redirect)
        </button>
      </form>
      <hr />
      <h2>Endpoints</h2>
      <ul>
        <li><a href="/posts">/posts</a> — public page (redirect target)</li>
        <li><a href="/admin">/admin</a> — protected by auth middleware (should return 401)</li>
        <li><a href="/api/draft-status">/api/draft-status</a> — shows draft mode status</li>
      </ul>
    </main>
  )
}
