import {
  Box,
  Chip,
  Container,
  FormControl,
  Grid,
  ListSubheader,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NotFound from "../../slices/NotFound";
import qs from "qs";
import Heading from "../../components/shared/Heading";
import Ad from "../../components/global/Ad";

const ResultsFound = ({ query, params, dispatchFilter, icon }) => {
  const [selectVal, setSelectVal] = useState("publishedAt:desc");
  const { filteredCtgs, searchText, searchLoc, priceRange } =
    params.filtersState;
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState(null);
  const [meta, setMeta] = useState(null);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const perPage = 6;
  const strapiQuery = qs.stringify(
    {
      filters: {
        categories: {
          name: {
            $in: filteredCtgs,
          },
        },
        $or: [
          {
            title: {
              $contains: searchText,
            },
          },
          // {
          //   desc: {
          //     $contains: searchText,
          //   },
          // },
        ],
        price: {
          $and: [
            { value: { $gte: priceRange[0] } },
            { value: { $lte: priceRange[1] } },
          ],
        },
        location: {
          address: {
            $contains: searchLoc,
          },
        },
      },
      pagination: {
        page: pageNumber,
        pageSize: perPage,
      },
      sort: [
        `${selectVal}`,
      ],
      populate: "deep",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${query}?${strapiQuery}`)
      .then((response) => {
        setIsLoading(true);
        return response.json();
      })
      .then((response) => {
        if (response.data) {
          setData(response.data);
          setMeta(response.meta);
        } else {
          setErr(response.error);
        }
        setIsLoading(false);
        return response;
      })
      .catch((err) => {
        setIsLoading(false);
        return setErr(err);
      });
  }, [pageNumber, strapiQuery]);

  const handleChange = (event) => {
    setSelectVal(event.target.value)
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Container>
        <Stack
          sx={{
            padding: "15px 0px",
          }}
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Typography>Ads Foud: {meta?.pagination.total}</Typography>

          <FormControl
            sx={{ "& .MuiSelect-select": { p: "10px 45px 10px 14px" } }}
          >
            <Select
              value={selectVal}
              onChange={(e) => handleChange(e)}
              displayEmpty
              inputProps={{ "aria-label": "Filter By" }}
            >
              <ListSubheader>Sort By</ListSubheader>
              <MenuItem disabled> Date </MenuItem>
              <MenuItem value={"publishedAt:desc"}>Newest to Oldest</MenuItem>
              <MenuItem value={"publishedAt:asc"}>Oldest to Newest</MenuItem>
              <MenuItem disabled> Price </MenuItem>
              <MenuItem value={"[price][value]:desc"}>Hight to Low</MenuItem>
              <MenuItem value={"[price][value]:asc"}>Low to high</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Container>
      <Box
        sx={{
          backgroundColor: "#eee",
          pb: { xs: "20px", sm: "30px", md: "50px" },
          flexGrow: 1,
        }}
      >
        {data?.length ? (
          <Container>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.8rem",
                paddingBlock: "0.5rem",
                mb: "1.5rem",
              }}
            >
              {filteredCtgs.map((ctg, i) => (
                <Chip
                  key={i}
                  color="primary"
                  label={ctg}
                  size="medium"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1.025rem" },
                    padding: { xs: "1rem 0rem", sm: "1.05rem 0.1rem" },
                  }}
                  onDelete={(e) =>
                    dispatchFilter({
                      type: "CTG",
                      payload: filteredCtgs.filter(
                        (ctg, i) =>
                          ctg !== e.currentTarget.previousSibling.innerText
                      ),
                    })
                  }
                />
              ))}
            </Toolbar>
            <Heading mb={{ xs: "50px", sm: "70px" }} title="Found Ads " />
            <Grid
              container
              columnSpacing={{ xs: "1rem", md: "1.5rem" }}
              rowSpacing={{ xs: "1rem", md: "3.5rem" }}
            >
              {data?.map((ad, i) => {
                return (
                  <Grid item xs={12} mob={6} sm={12} md={6} lg={4} key={ad.id}>
                    <Ad variant={2} content={ad.attributes} />
                  </Grid>
                );
              })}
            </Grid>
            <Pagination
              onChange={(e, page) => {
                setPageNumber(page);
              }}
              count={meta?.pagination.pageCount || 5}
              boundaryCount={1}
              siblingCount={1}
              color="primary"
              size="large"
              shape="rounded"
              sx={{
                mt: "3rem",
                "& .MuiPagination-ul": {
                  justifyContent: "flex-end",
                  gap: { xs: "0rem", sm: "0.8rem" },
                  "& button": {
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    transform: { xs: "scale(0.)", sm: "scale(1.05)" },
                    backgroundColor: "white",
                    boxShadow: 1,
                    ":hover": {
                      backgoundColor: "rgba(0,0,0,0.9)",
                    },
                    "& svg": { transform: "scale(1.5)" },
                  },
                  ".Mui-selected": { backgroundColor: "primary.main" },
                },
              }}
            />
          </Container>
        ) : !isLoading ? (
          <NotFound icon={icon} />
        )
          : (<Typography>Loading...</Typography>)
        }
      </Box>
    </Box>
  );
};

export default ResultsFound;
