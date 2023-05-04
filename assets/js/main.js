const listItems = document.querySelectorAll(".sidebar-list li")


listItems.forEach(item =>{
  item.addEventListener("click", ()=>{
    let isActive = item.classList.contains('active');
    
    listItems.forEach(el=>{
      el.classList.remove('active')
    })

    if(isActive) item.classList.remove('active')
    else item.classList.add("active");

  })
})

// import React, { useState } from "react";
// import { ListItemButton, MenuItem, MenuList } from "@mui/material";
// import routes from "../router/_nav";
// import { useLocation, useNavigate } from "react-router-dom";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// const SideBarItems = () => {
//   const [toggle, setToggle] = useState("");
//   const location = useLocation();
//   // const [col, setCol] = useState(false)

//   const toggoleFunc = (name: any) => {
//     setToggle(name);
//     // console.log("click");
//   };

//   const navigate = useNavigate();

//   const navItem = (item = { icon: null, name: "", path: "" }, idx: number) => {
//     return (
//       <MenuItem
//         className={`${location.pathname === item.path ? "bg-slate-600" : ""}`}
//         onClick={() => navigate(item.path)}
//         key={idx}
//         sx={{ display: "flex", alignItems: "center", paddingY: "0.75rem" }}
//       >
//         <div className="flex items-center">{item.icon}</div>
//         <div className="px-3 text-slate-50">{item.name}</div>
//       </MenuItem>
//     );
//   };

//   const navGroup = (
//     item = { name: " ", children: [], icon: null, path: "" },
//     idx: number
//   ) => {
//     // console.log(item);
//     return (
//       <MenuList sx={{ paddingY: 0 }} key={idx}>
//         <MenuItem
//           onClick={() => {
//             toggoleFunc(!toggle && item.name);
//           }}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             paddingY: "0.50rem",
//           }}
//         >
//           <div className={`flex items-center`}>
//             <span className="flex items-center">{item.icon}</span>
//             <span className="ps-3 text-slate-50">{item.name}</span>
//           </div>
//           <div className="flex items-center">
//             {toggle === item.name ? (
//               <ExpandLessIcon fontSize="small" sx={{ color: "#fff" }} />
//             ) : (
//               <ExpandMoreIcon fontSize="small" sx={{ color: "#fff" }} />
//             )}
//           </div>
//         </MenuItem>

//         {toggle === item.name &&
//           item.children.map(
//             (
//               item: { name: ""; icon: null; path: ""; location: any },
//               idx: number
//             ) => {
//               return (
//                 <ListItemButton
//                   className={`${
//                     location.pathname === item.path ? "bg-slate-600" : ""
//                   }`}
//                   onClick={() => navigate(item.path)}
//                   key={idx}
//                   sx={{ display: "flex", alignItems: "center" }}
//                 >
//                   <div className="flex lg:ml-5 ">
//                     <div className="flex items-center">{item.icon}</div>
//                     <div className="px-3 text-slate-50">{item.name}</div>
//                   </div>
//                 </ListItemButton>
//               );
//             }
//           )}
//       </MenuList>
//     );
//   };
//   // console.log(location);

//   return (
//     <React.Fragment>
//       {routes &&
//         routes
//           .filter((item) => item.isMenuItem)
//           .map((item: any, index) =>
//             item.children ? navGroup(item, index) : navItem(item, index)
//           )}
//     </React.Fragment>
//   );
// };

// export default SideBarItems;
