import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import qs from "qs"
import LoadPage from '../../helpers/LoadPage';
import pageSchema from '../../helpers/pageSchema';

const Page = () => {
    const { slug } = useParams();

    const strapiQuery = qs.stringify({
        filters: {
            slug: {
                $eq: slug
            }
        },
        populate: 'deep'
    })


    return (
        <LoadPage url={`${process.env.REACT_APP_API_URL}/pages/?${strapiQuery}`} sluggified schema={pageSchema} />
    )
}

export default Page;