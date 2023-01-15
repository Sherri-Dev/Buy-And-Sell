import {
  Box,
  TextField,
  Typography,
  alpha,
  Autocomplete,
  SvgIcon,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext } from "react";
import Btn from "../components/shared/Btn";
import Categories from "../components/shared/Categories";
import { getImg } from "../helpers/formatApi";
import ReactHtmlParser from "react-html-parser";
import { FiltersContext } from "../contexts/filtersContext";
import { useNavigate } from "react-router-dom";

const HomeBanner = ({ content, headerHeight }) => {
  const { state: filtersState, dispatch: dispatchFilter } =
    useContext(FiltersContext);
  const navigate = useNavigate();
  return (
    <Box
      component={"section"}
      sx={{
        height: "100%",
        background: `rgb(0,0,0, 60%) url(${process.env.REACT_APP_BACKEND_URL}${getImg(content.bgImage).url
          }) center center/cover`,
        backgroundBlendMode: "overlay",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid grey",
        }}
      >
        <Container>
          <Box
            sx={{
              paddingTop: `${headerHeight}px`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: {
                xs: `${headerHeight + 60}px 0 60px 0`,
                md: `${headerHeight + 100}px 0 100px 0`,
                lg: `${headerHeight + 140}px 0 140px 0`,
              },
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: "750px", lg: "900px" },
                textAlign: "center",
              }}
            >
              <Typography
                color="white"
                variant="h6"
                sx={{ fontSize: { xs: "16px", sm: "20px" } }}
                fontWeight={"normal"}
                gutterBottom
              >
                {content.heading.subTitle}
              </Typography>
              <Typography
                color="white"
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "25px",
                    mob: "30px",
                    sm: "45px",
                    md: "60px",
                    lg: "75px",
                  },
                }}
                fontWeight={"600"}
                gutterBottom
              >
                {content.heading.title}
              </Typography>
              <Box
                sx={{
                  backgroundColor: alpha("#000", 0.5),
                  borderRadius: "10px",
                  padding: { xs: "0.5rem", mob: "1rem" },
                  boxShadow: "0 0 1px 2px white",
                  mt: { xs: "1.5rem", sm: "2.5rem" },
                }}
              >
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    gap: "0.6rem",
                    borderRadius: "8px",
                    height: { md: "4.5rem" },
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      paddingRight: { md: "1.5rem" },
                      borderRight: { md: "1px solid white" },
                    }}
                  >
                    <SvgIcon
                      sx={{
                        mr: 1,
                        color: "primary.main",
                        alignSelf: "center",
                      }}
                    >
                      {ReactHtmlParser(
                        content?.searchForm?.input.icon?.data.attributes.path
                      )}
                    </SvgIcon>
                    <TextField
                      label={content?.searchForm?.input?.label}
                      defaultValue={filtersState.searchText}
                      inputProps={{
                        placeholder: content?.searchForm?.input?.placeholder,
                        sx: {
                          height: "100%",
                          color: "white",
                          borderBottom: "2px solid grey",
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          fontSize: "20px",
                          top: "-0.5rem",
                          color: "white",
                        },
                      }}
                      onChange={(e) =>
                        dispatchFilter({
                          type: "TEXT",
                          payload: e.target.value,
                        })
                      }
                      fullWidth
                      variant="standard"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <SvgIcon
                      sx={{
                        mr: 1,
                        color: "primary.main",
                        alignSelf: "center",
                      }}
                    >
                      {ReactHtmlParser(
                        content?.searchForm?.selectBox.icon?.data.attributes
                          .path
                      )}
                    </SvgIcon>
                    <Autocomplete
                      options={content?.searchForm?.selectBox?.options?.data?.map(
                        (item) => item.attributes.city
                      )}
                      value={filtersState.searchLoc}
                      onChange={(e, value) =>
                        dispatchFilter({ type: "LOC", payload: value })
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          inputProps={{
                            ...params.inputProps,
                            sx: {
                              height: "100%",
                              color: "white",
                              borderBottom: "2px solid grey",
                            },
                          }}
                          label={content?.searchForm?.selectBox?.label}
                          variant="standard"
                          InputLabelProps={{
                            ...params.InputLabelProps,
                            sx: {
                              fontSize: "20px",
                              top: "-0.5rem",
                              color: "white",
                            },
                          }}
                          sx={{
                            button: {
                              color: "white",
                            },
                          }}
                          fullWidth
                        />
                      )}
                      fullWidth
                    />
                  </Box>

                  <Btn
                    text={content?.searchForm?.submitBtn?.label}
                    sx={{
                      fontSize: "18px",
                      paddingInline: "2rem",
                      width: { xs: "100%", md: "30%" },
                    }}
                    variant="contained"
                    type={"submit"}
                    onClick={(e) => {
                      navigate("/search-results")
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Categories variant={"tabs"} content={content?.categories?.data} />
      </Container>
    </Box>
  );
};

export default HomeBanner;
