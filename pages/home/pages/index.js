import dynamic from "next/dynamic"

const Header = dynamic(()=>import('header/headerIndex'))
export default function Home() {
  return (
    <div>
    <Header/>
      <h1 style={{marginTop: 100}}>This is home page</h1>
    </div>
  )
}
