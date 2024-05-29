
import { styled,alpha,InputBase,Badge ,Stack} from "@mui/material";


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
    backgroundColor: alpha(theme.palette.background.paper, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
    },
  }));
  
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: -0.5,
        left: -1,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        // animation: "ripple 1.2s infinite ease-in-out",             //online Status Animation
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  
  const SlimScrollbarStack = styled(Stack)({
    /* Styling the scrollbar for WebKit-based browsers */
    "&::-webkit-scrollbar": {
      width: "0px" /* Adjust the width to make it slimmer */,
    },
  });

  export {Search,SearchIconWrapper,StyledInputBase,StyledBadge,SlimScrollbarStack}