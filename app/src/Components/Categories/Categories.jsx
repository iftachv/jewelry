import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { category } from "../../Utils/Utils";
import "./Categories.css";
import CategoryCard from "./CategoryCard";
import Form from 'react-bootstrap/Form'
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Categories() {
  const PRICE = "PRICE";
  const ALPHABET = "ALPHABET";
  const DESC = false;

  const [openAll, setOpenAll] = useState(false);
  const [categoryChoosen, setCategoryChoosen] = useState({});
  const [sortby, setSortby] = useState({ desc: DESC, by: PRICE })
  console.log(categoryChoosen);

  const sorter = (a, b) => {
    if (sortby.by === ALPHABET) {
      if (a.description > b.description)
        return sortby.desc ? -1 : 1;
      if (a.description < b.description)
        return sortby.desc ? 1 : -1;
      return 0;
    }
    if (sortby.by = PRICE) {
      if (a.price > b.price)
        return sortby.desc ? -1 : 1;
      if (a.price < b.price)
        return sortby.desc ? 1 : -1;
      return 0;
    }
  }
  return (
    <div className="categories">

      <Form.Label>Sort By Price</Form.Label>
      <Form.Select value={sortby.by} onChange={e => setSortby(v => { return { ...v, by: e.target.value } })} >
        <option value={PRICE}>Price</option>
      </Form.Select>

      {
        openAll
          ? categoryChoosen.item.sort(sorter).map((elemnt) => {
            return (
              <CategoryCard
                setCategoryChoosen={setCategoryChoosen}
                setOpenAll={setOpenAll}
                url={elemnt.url}
                description={elemnt.description}
                type={elemnt.type}
                item={null}
                price={elemnt.price}
              />
            );
          })
          : category.map((item) => {
            return (
              <CategoryCard
                setCategoryChoosen={setCategoryChoosen}
                setOpenAll={setOpenAll}
                url={item.url}
                description={item.description}
                type={item.type}
                item={item.items}
              />
            );
          })
      }
    </div >
  );
}

export default Categories;
