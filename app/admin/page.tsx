export default function AdminPage() {
  return (
    <main>
      <h1>Admin Panel</h1>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        This page is protected by auth middleware.
        If you can see this without the auth token, middleware was bypassed.
      </p>
      <a href="/">Back</a>
    </main>
  )
}
