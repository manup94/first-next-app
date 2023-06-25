'use client'
import { useRouter } from "next/navigation";


function Users({ users }) {

    const router = useRouter()

    return (
        <ul role="list" class="divide-y divide-gray-100" >

            {
                users.map((user) => {
                    return (

                        <li key={user.id}
                            class="flex justify-between gap-x-6 py-5"
                            onClick={() => {
                                router.push(`/users/${user.id}`)
                            }}>
                            <div class="flex gap-x-4">
                                <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={user.avatar} alt="img" />
                                <div class="min-w-0 flex-auto">
                                    <p class="text-sm font-semibold leading-6 text-gray-900">
                                        {user.id}
                                        {user.first_name}
                                        {user.last_name}

                                    </p>
                                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">{user.email}</p>
                                </div>
                            </div>

                        </li>


                    )

                })
            }
        </ul>
    )
}

export default Users