import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const IconsList = (props) => {
  return {
    facebook: <FacebookIcon color={props?.color} sx={props?.sx} />,
    linkedIn: <LinkedInIcon color={props?.color} sx={props?.sx} />,
    twitter: <TwitterIcon color={props?.color} sx={props?.sx} />,
  };
};
const getIcon = (name, props) => {
  const iconsList = IconsList(props);
  return iconsList[name];
};
