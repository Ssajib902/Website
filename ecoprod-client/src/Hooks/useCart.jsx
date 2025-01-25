


import { useQuery } from "@tanstack/react-query"
import useAxiosSecure, { axiosSecure } from "./useAxiosSecure"
import useAuth from "./useAuth";


const useCart = () => {
//   Tan stack query
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();
    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            if (!user) return []; 
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        },
        enabled: !loading && !!user?.email,
    })
    return [cart, refetch]
}

export default useCart;



