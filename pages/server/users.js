
import Link from 'next/link'

const UserPage = (props) => {
  console.log("props", props);
  return (

    <div>
      <header className="header-container">
      <h5 className='text-white'>Logo</h5> 
      </header>
      <div className='container-sm col-10 mt-1'>

      <Link href="/">
                    <span className='btn btn-dark mt-2'>Back to Home page</span>
                </Link>
        {/* <div >{JSON.stringify(Users)} </div>  */}

        <div className="jumbotron mb-5">

          <h3 className="mt-3">SSR Server-side Rendering</h3>
    
          
          <div className="alert alert-primary" role="alert">
            <b>export async function getServerSideProps(){<br />
            }</b>

          </div>
        </div>
      </div>


      {/* {
                props.data.users.map(user=>
                    
                    <li key={user.id}>{user.firstName}</li>
                    )
             } */}

      <div className='container col-10 '>
        <table className=' table-striped table table-bordered text-center '>
          <thead className="thead-dark">
            <tr className="bg-info">
              <th>User ID</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
            {props.data.users.map((user) => (
              <tr>
                <td>
                  {/* <Link href={`/pokemon/${user.id}`}>   */}
                  {user.id}
                  {/* </Link> */}
                </td>
                <td>{user.firstName}</td>
              </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const data = await (await fetch("http://dummyjson.com/users")).json()
  return {
    props: {
      data,
    },
  };
};
export default UserPage