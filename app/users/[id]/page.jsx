import Loading from "@/app/loading";
import Layout from "./layout";

async function getUser(id) {

    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

async function UsersPages({ params }) {

    const user = await getUser(params.id)
    console.log(user);
    return (

        <Layout>

            <>
                {
                    user ?

                        <div>


                            <div>
                                <img src={user.avatar} alt="img" />
                                <div>
                                    <h3>{user.id} {user.first_name} {user.last_name}</h3>
                                    <p>{user.email}</p>

                                </div>
                            </div>


                        </div>

                        :

                        <Loading></Loading>

                }
            </>
        </Layout>


    )
}

export default UsersPages