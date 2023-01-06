export const getSiteIdentity = (data) => {
  // console.log(data?.siteIdentity?.data?.attributes?.siteIdentity);
  return (
    data?.siteIdentity?.data?.attributes?.siteIdentity || {
      siteTitle: "Site Title",
      logo: null,
      tagline: null,
    }
  );
};

export const removeComponentName = (arr) => {
  return arr?.map((obj) => {
    let newObj = { ...obj };
    const compName = obj.__component.split(".").pop();
    delete newObj.__component;
    return { [compName]: newObj };
  });
};

export const getContent = (props, schema) => {
  let contentName = Object.keys(props.content)[0];
  let sectionSchema = schema(contentName, props);

  return sectionSchema[contentName];
};

export const getImg = (data, variant = "full") => {
  let url = "";
  let alt = data?.data?.attributes?.alternativeText;
  switch (variant) {
    case "full":
      url = data?.data?.attributes?.url;
      break;
    case "thumbnail":
      url = data?.data?.attributes?.formats?.thumbnail?.url;
      break;
    default:
      break;
  }
  return { url, alt };
};
export const getImages = (data, variant = "full") => {
  let dataArr = [];

  switch (variant) {
    case "full":
      dataArr = data?.data?.map((img) => ({
        url: img?.attributes?.url,
        alt: img?.attributes?.alternativeText,
      }));
      break;
    case "thumbnail":
      dataArr = data?.data?.map((img) => ({
        url: img?.attributes?.formats?.thumbnail?.url,
        alt: img?.attributes?.formats?.thumbnail?.alternativeText,
      }));
      break;
    default:
      break;
  }
  return dataArr;
};
