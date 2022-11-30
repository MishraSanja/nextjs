
import Link from 'next/link'
import React from 'react';
import { useState, useEffect } from 'react';
import Footer from '../components/footer'
import Header from '../components/header'
// import useSWR from 'swr'
//stale while revalidating
//Generally we fetch the data  with fetch function instead we can use SWR 
// Light weight and it has out of box features
// It will store data locally - cache building. no need to fetch again and again

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const UserPage = () => {
    const [users, setUsers] = useState([]);
    console.log("users", users)
    useEffect(() => {
        async function fetchUsers() {
            const data = await fetch("https://dummyjson.com/users");
            setUsers(await data.json());
        }
        fetchUsers()
    }, []);

    // Swr Approach Currently facing issue with my current node version
    // const {data , error} = useSWR('https://dummyjson.com/users', fetcher);
    // if(error){
    //     return <h1>Error happend</h1>
    // }
    // if(!data) return <h1>Loading...</h1>
    return (
        <div>
            <Header></Header>
            <div className='container col-10'>
                <Link href="/">
                    <span className='btn btn-dark mt-2'>Back to Home page</span>
                </Link>

                <div className="jumbotron mb-2">
                    <h3 className="mt-3">CSR Client Side Data Fetching</h3>
                    <p>Client-side data fetching is useful when your page doesn't require SEO indexing, when you don't need to pre-render your data, or when the content of your pages needs to update frequently. Unlike the server-side rendering APIs, you can use client-side data fetching at the component level.</p>
                </div>
                <h4> List of Users</h4>
                <div>
                </div>
                <table className=' table-striped table table-bordered text-center col-8'>
                <thead className="thead-dark">
                    <tr className="bg-info">
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.users &&
                        users.users.map((user) => (
                            <tr>
                                <td>
                                    <Link href={`/users/${user.id}`} key={user.id}>
                                      
                                    <button type="button" class="btn btn-dark  btn-sm">{user.id}</button>   
                                    </Link>
                                </td>
                                <td>  {user.firstName}</td>
                                <td>  {user.lastName}</td>
                                <td>  {user.age}</td>
                                <td>  {user.email}</td>

                            </tr>
                        ))}
                </tbody>
            </table>
            </div>
            {/* <h1>Users</h1>
            {users.users &&
                users.users.map((user) => (
                    <Link href={`/users/${user.id}`} key={user.id}>
                        <div>{user.firstName} </div>
                    </Link>
                ))} */}

            
            <Footer></Footer>
        </div>
    );
}
export default UserPage;