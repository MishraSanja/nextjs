
import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'
const UsersPage = (props) => {
    function refreshPage() {
        window.location.reload(false);
      }
    return (
        <div>
            <Header></Header>

            <div className='container col-10 mt-2 '>
                <Link href="/">
                    <span className='btn btn-dark mt-2'>Back to Home page</span>
                </Link>
                <div className="jumbotron mb-2 mt-4">
                    <h4>Incremental Static Regeneration</h4>
                    
                    <span className='spanRefresh'>Refresh: After every 10 seconds time will change
                    &nbsp; <button onClick={refreshPage}>Click to reload!</button>
                    </span>
                </div>
                   

 
            <div className='custom-table mb-5 mb-2'>
                <table className='  table-striped  table table-bordered text-center col-5'>
                <thead className="thead-dark">
                    <tr className="bg-info">
                        <th>User ID</th>
                        <th>Time</th>
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
                                    {/* <Link href={`users/${user.id}`} key={user.id}>
                                  
                                    </Link> */}
                                    <button type="button" class="btn btn-dark  btn-sm">{user.id}</button>   
                                </td>
                                <td>  {user.currentTime}</td>
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
                 
                </div>
                <br/><br/>
            <Footer></Footer>
        </div>
    )
}

export const getStaticProps = async () => {
    
     const data = await (await fetch("http://dummyjson.com/users")).json()
    
    data.users.forEach((user) => {
        
        user.currentTime = new Date().toLocaleTimeString()
       
    })
 
    return {
        props: {
            data,
        },
        revalidate: 10,
    };
}
export default UsersPage;





 