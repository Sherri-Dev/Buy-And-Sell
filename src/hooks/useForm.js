import qs from "qs"
import useFetch from "./useFetch"
const useForm = ({ slug }) => {
    const strapiQuery = qs.stringify({
        filters: {
            slug: {
                $eq: slug
            }
        },
        populate: 'deep'
    })
    const { data } = useFetch(`${process.env.REACT_APP_API_URL}/forms/?${strapiQuery}`);
    const formData = data?.length && data[0];
    return (
        { formData: formData?.attributes, slug: formData?.attributes?.slug }
    )
}

export default useForm