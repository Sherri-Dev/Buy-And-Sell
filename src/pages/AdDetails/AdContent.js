import Container from '@mui/material/Container'
import React, { useMemo } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { getComponentsFromDZ } from '../../helpers/formatApi';
import useFetch from '../../hooks/useFetch';
import SideBarLayout from '../../components/shared/SideBarLayout';
import MainContent from './MainContent';
import AsideContent from './AsideContent';

const AdContent = ({ content, offset }) => {
    const { data: singleAdContent } = useFetch(`${process.env.REACT_APP_API_URL}/single-ad?populate=deep`);
    const { 'related-ads': relatedAds, edito: adDesc } = useMemo(() => getComponentsFromDZ(content?.attributes?.details), [content]);
    const { icon: iconList, edito: sideDesc } = useMemo(() => getComponentsFromDZ(singleAdContent?.attributes?.content), [singleAdContent]);
    return (
        <Container sx={{ mt: `calc(${offset} + 3rem)` }}>
            <SideBarLayout
                mainContent={adDesc?.desc && <MainContent content={adDesc?.desc && ReactHtmlParser(adDesc.desc)} />}
                asideContent={
                    <AsideContent
                        content={content}
                        relatedAds={relatedAds}
                        iconList={iconList}
                        sideDesc={sideDesc}
                    />}
            />
        </Container >
    )
}

export default AdContent