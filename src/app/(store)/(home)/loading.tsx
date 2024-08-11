export default async function Loading() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return <h1>Loading...</h1>
}
