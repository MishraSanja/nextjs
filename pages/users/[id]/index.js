import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Footer from '../../components/footer'
import Header from '../../components/header'

import Link from 'next/link'


const UserInfoPage = () => {
    const [userInfo, setUserInfo] = useState();
    const router = useRouter();

    console.log(userInfo);

    useEffect(() => {
        const id = router.query.id;
        async function getUserById(id) {
            const data = await fetch(`https://dummyjson.com/users/${id}`);
            setUserInfo(await data.json());
        }
        getUserById(id);
    }, [router.query.id])

    return (
        <div>
            <Header></Header>
            
            <div className='container-sm col-8'>
            <Link href="/">
                    <span className='btn btn-dark mt-2'>Back to Home page</span>
                </Link>
                <h4 className="mt-2"> User Details</h4>
                <ul class="list-group col-8">

                    <li class="list-group-item">{userInfo?.firstName}</li>
                    <li class="list-group-item">{userInfo?.lastName}</li>
                    <li class="list-group-item">{userInfo?.age}</li>
                    <li class="list-group-item">{userInfo?.email}</li>
                    <li class="list-group-item">{userInfo?.phone}</li>

                </ul>

            </div>

            <Footer></Footer>
        </div>
    )
}
export default UserInfoPage;