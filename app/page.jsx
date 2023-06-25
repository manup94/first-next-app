import Users from "@/components/Users"
import 'tailwindcss/tailwind.css';



async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()

  return data.data
}



async function IndexPage() {
  const users = await fetchUsers()

  return (
    <div>
      <h1>Index Page</h1>
      <Users users={users}></Users>

    </div>
  )
}

export default IndexPage