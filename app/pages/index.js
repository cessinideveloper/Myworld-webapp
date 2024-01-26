import Link from "next/link";

export default function Home() {
  return (
    <div>
      This is main app
      <Link href="/explore">
        <button>Go to explore</button>
      </Link>
      <Link href="/home">
        <button>Go to homepage</button>
      </Link>
      <Link href="http://localhost:3002/">
        <button>Go to notifications</button>
      </Link>
      <Link href="http://localhost:3003/">
        <button>Go to profile</button>
      </Link>
      <Link href="/search">
        <button>Go to search</button>
      </Link>
      <Link href="http://localhost:3005/">
        <button>Go to setting</button>
      </Link>
    </div>
  )
}
