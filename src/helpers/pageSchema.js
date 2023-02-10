import Form from "../components/global/Form";
import FeaturedAds from "../slices/FeaturedAds";
import HomeBanner from "../slices/HomeBanner";
import Work from "../slices/Work";

const pageSchema = (contentName, { content, headerHeight }) => {
    return {
        "featured-ads": <FeaturedAds content={content[contentName]} />,
        "timeline": <Work content={content[contentName]} />,
        "hero": <HomeBanner headerHeight={headerHeight} content={content[contentName]} />,
        "form": <Form formData={content[contentName]?.form?.data?.attributes} />
    }
}

export default pageSchema;