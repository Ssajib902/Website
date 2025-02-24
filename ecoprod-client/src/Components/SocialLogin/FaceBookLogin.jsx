import { FaFacebook, FaGoogle } from 'react-icons/fa'
import useAuth from '../../Hooks/useAuth'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const FaceBookLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then( res => {
                console.log(res.data);
                navigate('/')
            })
        })
    }
    return (
        <div className='p-8'>
            <button onClick={handleGoogleSignIn} className="btn bg-transparent border-red-50">
                <FaFacebook className='mr-2 text-blue-500' />
                Facebook
            </button>
        </div>
    )
}

export default FaceBookLogin;
