import Footer from '../../components/footer'
import Header from '../../components/header'
import Link from 'next/link'
const UsersPage = (props) => {
    return (
        <div>
            <Header></Header>

            <div className='container col-10 mt-2 '>
                <Link href="/">
                    <span className='btn btn-dark mt-2'>Back to Home page</span>
                </Link>
                <div className="jumbotron mb-2 mt-4">
                    <h4>Users Page(Static Site Generation)</h4>
                    {/* <p>Static Generation is a method of pre-rendering where the HTML pages are generated at built time.
                        The Pre-rendered static pages can be pushed to a cdn, cached and served to clients across the globe almost instantly
                        Static content is faster and better for SEO as they are immediately indexed by search engines
                        Static generation with getStaticProps for data fetching and getStaticPaths for dynamic pages seems like a really good apporach to a wide variety of applications in production.</p> */}
                </div>
                   

<h5 className='mt-3 mb-3'>List of Users Data</h5>
            <div className='custom-table mb-5 mb-2'>
                <table className='  table-striped  table table-bordered text-center col-5'>
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
                    {props.data.users.map((user) => (
                            <tr>
                                <td>
                                    <Link href={`users/${user.id}`} key={user.id}>
                                      
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
                {/* {props.data.users.map(user =>
                    <li key={user.id}>{user.firstName} {user.lastName}</li>
                )
                }  */}
                 <h4>Common Issues  and Issues with build </h4>
     <ul className='mb-5'>
                        <li>The Build time is proportional to the number of pages in the application
A page, once generated, can contain stale data till the time you rebuild the application</li>
<li>The build time is proportional to number of pages in the application.</li>
<br/>
<h5>Example Scenario</h5>
<li>Assume, a page takes 100ms to build the appliaction</li>
<li>For E-commerce app with 100 products takes 10 seconds to build.</li>
<li>E-commerce app with 100,000 prodcuts takes more than 2.5 hours to build.</li>
<li>Its not just the time, There are cost implications as well.</li>
<li>The problem only get worse with more products you add to the system as every new page increases the overall build time.</li>
 </ul>
                </div>
                <br/><br/>
            <Footer></Footer>
        </div>
    )
}

export const getStaticProps = async () => {
    //getStaticProps() 
//this is async static funciton, when you export this function from any particular page then  page will be treated as a static page

    const data = await (await fetch("http://dummyjson.com/users")).json()
    return {
        props: {
            data,
        },
    };
}
export default UsersPage;







//getStaticProps() 
// this is async static funciton, when you export this function from any particular page then that page will be treated as a static page
// When you give a build then it will,
// then go to .next > server > pages > static > user.html.
// you can see the stale data there 
// now you see the data stored in the file.

// So when we give a build it will store data locally. 
// you can check the performance in Lighthouse for three 

// So for stored more details information we can use 
// getstaticPaths 