// import React, { useState } from "react";
// import {
//   Checkbox,
//   List,
//   ListItem,
//   ListItemText,
//   Collapse,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

// type Department = {
//   department: string;
//   sub_departments: string[];
//   selected?: boolean;
//   collapsed?: boolean;
//   [key: string]: any; // Index signature for dynamic properties
// };

// const initialData: Department[] = [
//   {
//     department: "customer_service",
//     sub_departments: ["support", "customer_success"],
//     selected: false,
//     collapsed: true, // Initially collapse the sub-departments
//   },
//   {
//     department: "design",
//     sub_departments: ["graphic_design", "product_design", "web_design"],
//     selected: false,
//     collapsed: true, // Initially collapse the sub-departments
//   },
// ];

// const Department = () => {
//   const [data, setData] = useState<Department[]>(initialData);

//   const handleCollapseDepartment = (index: number) => {
//     const newData = [...data];
//     newData[index].collapsed = !newData[index].collapsed;
//     setData(newData);
//   };

//   const handleSubDepartmentClick = (deptIndex: number, subDepIndex: number) => {
//     const newData = [...data];
//     const department = newData[deptIndex];
//     const subDep = department.sub_departments[subDepIndex];

//     department[subDep] = !department[subDep];

//     updateParentDepartmentSelection(newData, deptIndex);

//     setData(newData);
//   };

//   const updateParentDepartmentSelection = (
//     newData: Department[],
//     deptIndex: number
//   ) => {
//     const department = newData[deptIndex];

//     const allSubDepartmentsSelected = department.sub_departments.every(
//       (subDep) => department[subDep]
//     );

//     if (allSubDepartmentsSelected !== department.selected) {
//       department.selected = allSubDepartmentsSelected;

//       const parentDepartment = newData.find((dept) =>
//         dept.sub_departments.includes(department.department)
//       );

//       if (parentDepartment) {
//         const parentIndex = newData.findIndex(
//           (dept) => dept.department === parentDepartment.department
//         );

//         if (parentIndex !== -1) {
//           updateParentDepartmentSelection(newData, parentIndex);
//         }
//       }
//     }
//   };

//   const handleSelectDepartment = (deptIndex: number) => {
//     const newData = [...data];
//     const department = newData[deptIndex];
//     const selected = !department.selected;

//     department.selected = selected;
//     department.sub_departments.forEach((subDep) => {
//       department[subDep] = selected;
//     });

//     updateParentDepartmentSelection(newData, deptIndex);

//     setData(newData);
//   };

//   return (
//     <List>
//       {data.map((dept, deptIndex) => (
//         <React.Fragment key={dept.department}>
//           <ListItem button onClick={() => handleCollapseDepartment(deptIndex)}>
//             {dept.collapsed ? <AddIcon /> : <RemoveIcon />}
//             <Checkbox
//               checked={dept.selected}
//               indeterminate={
//                 !dept.selected &&
//                 dept.sub_departments.some((subDep) => dept[subDep])
//               }
//               onClick={(event) => {
//                 event.stopPropagation();
//                 handleSelectDepartment(deptIndex);
//               }}
//             />
//             <ListItemText primary={dept.department} />
//           </ListItem>
//           {!dept.collapsed && (
//             <List component="div" disablePadding>
//               {dept.sub_departments.map((subDep, subDepIndex) => (
//                 <ListItem
//                   key={subDep}
//                   sx={{ paddingLeft: 4 }}
//                   dense
//                   button
//                   onClick={() =>
//                     handleSubDepartmentClick(deptIndex, subDepIndex)
//                   }
//                 >
//                   <Checkbox
//                     checked={dept[subDep]}
//                     onChange={() =>
//                       handleSubDepartmentClick(deptIndex, subDepIndex)
//                     }
//                     // Add the following line to fix the controlled/uncontrolled state error
//                     onClick={(event) => {
//                       event.stopPropagation();
//                     }}
//                   />
//                   <ListItemText primary={subDep} />
//                 </ListItem>
//               ))}
//             </List>
//           )}
//         </React.Fragment>
//       ))}
//     </List>
//   );
// };

// export default Department;

// import React, { useState } from "react";
// import { Checkbox, List, ListItem, ListItemText, Collapse } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

// type Department = {
//   department: string;
//   sub_departments: string[];
//   selected?: boolean;
//   collapsed?: boolean;
//   [key: string]: any; // Index signature for dynamic properties
// };

// const initialData: Department[] = [
//   {
//     department: "customer_service",
//     sub_departments: ["support", "customer_success"],
//     selected: false,
//     collapsed: true, // Initially collapse the sub-departments
//   },
//   {
//     department: "design",
//     sub_departments: ["graphic_design", "product_design", "web_design"],
//     selected: false,
//     collapsed: true, // Initially collapse the sub-departments
//   },
// ];

// const Department = () => {
//   const [data, setData] = useState<Department[]>(initialData);

//   const handleCollapseDepartment = (index: number) => {
//     const newData = [...data];
//     newData[index].collapsed = !newData[index].collapsed;
//     setData(newData);
//   };

//   const handleSubDepartmentClick = (deptIndex: number, subDepIndex: number) => {
//     const newData = [...data];
//     const department = newData[deptIndex];
//     const subDep = department.sub_departments[subDepIndex];

//     department[subDep] = !department[subDep];

//     updateParentDepartmentSelection(newData, deptIndex);

//     setData(newData);
//   };

//   const updateParentDepartmentSelection = (
//     newData: Department[],
//     deptIndex: number
//   ) => {
//     const department = newData[deptIndex];

//     const allSubDepartmentsSelected = department.sub_departments.every(
//       (subDep) => department[subDep]
//     );

//     if (allSubDepartmentsSelected !== department.selected) {
//       department.selected = allSubDepartmentsSelected;

//       const parentDepartment = newData.find(
//         (dept) => dept.sub_departments.includes(department.department)
//       );

//       if (parentDepartment) {
//         const parentIndex = newData.findIndex(
//           (dept) => dept.department === parentDepartment.department
//         );

//         if (parentIndex !== -1) {
//           updateParentDepartmentSelection(newData, parentIndex);
//         }
//       }
//     }
//   };

//   const handleSelectDepartment = (deptIndex: number) => {
//     const newData = [...data];
//     const department = newData[deptIndex];
//     const selected = !department.selected;

//     department.selected = selected;
//     department.sub_departments.forEach((subDep) => {
//       department[subDep] = selected;
//     });

//     updateParentDepartmentSelection(newData, deptIndex);

//     setData(newData);
//   };

//   return (
//     <List>
//       {data.map((dept, deptIndex) => (
//         <React.Fragment key={dept.department}>
//           <ListItem button onClick={() => handleCollapseDepartment(deptIndex)}>
//             {dept.collapsed ? <AddIcon /> : <RemoveIcon />}
//             <Checkbox
//               checked={dept.selected}
//               indeterminate={
//                 !dept.selected &&
//                 dept.sub_departments.some((subDep) => dept[subDep])
//               }
//               onChange={() => handleSelectDepartment(deptIndex)}
//               // Add the following line to fix the controlled/uncontrolled state error
//               onClick={(event) => {
//                 event.stopPropagation();
//               }}
//             />
//             <ListItemText primary={dept.department} />
//           </ListItem>
//           {!dept.collapsed && (
//             <List component="div" disablePadding>
//               {dept.sub_departments.map((subDep, subDepIndex) => (
//                 <ListItem
//                   key={subDep}
//                   sx={{ paddingLeft: 4 }}
//                   dense
//                   button
//                   onClick={() =>
//                     handleSubDepartmentClick(deptIndex, subDepIndex)
//                   }
//                 >
//                   <Checkbox
//                     checked={dept[subDep]}
//                     onChange={() =>
//                       handleSubDepartmentClick(deptIndex, subDepIndex)
//                     }
//                     // Add the following line to fix the controlled/uncontrolled state error
//                     onClick={(event) => {
//                       event.stopPropagation();
//                     }}
//                   />
//                   <ListItemText primary={subDep} />
//                 </ListItem>
//               ))}
//             </List>
//           )}
//         </React.Fragment>
//       ))}
//     </List>
//   );
// };

// export default Department;

// import React, { useState } from "react";
// import { Checkbox, List, ListItem, ListItemText, Collapse } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

// type Department = {
//   department: string;
//   sub_departments: string[];
//   selected: boolean;
//   collapsed: boolean;
//   [key: string]: any;
// };

// const initialData: Department[] = [
//   {
//     department: "customer_service",
//     sub_departments: ["support", "customer_success"],
//     selected: false,
//     collapsed: true,
//   },
//   {
//     department: "design",
//     sub_departments: ["graphic_design", "product_design", "web_design"],
//     selected: false,
//     collapsed: true,
//   },
// ];

// const Department = () => {
//   const [data, setData] = useState<Department[]>(initialData);

//   const handleCollapseDepartment = (index: number) => {
//     const newData = [...data];
//     newData[index].collapsed = !newData[index].collapsed;
//     setData(newData);
//   };

//   const handleSubDepartmentClick = (deptIndex: number, subDepIndex: number) => {
//     const newData = [...data];
//     const department = newData[deptIndex];
//     const subDep = department.sub_departments[subDepIndex];

//     department[subDep] = !department[subDep];

//     updateParentDepartmentSelection(newData, deptIndex);

//     setData(newData);
//   };

//   const updateParentDepartmentSelection = (
//     newData: Department[],
//     deptIndex: number
//   ) => {
//     const department = newData[deptIndex];
//     const parentDepartment = newData.find(
//       (dept) => dept.sub_departments.includes(department.department)
//     );

//     if (parentDepartment) {
//       const parentIndex = newData.findIndex(
//         (dept) => dept.department === parentDepartment.department
//       );

//       const allSubDepartmentsSelected = parentDepartment.sub_departments.every(
//         (subDep) => department[subDep]
//       );

//       parentDepartment.selected = allSubDepartmentsSelected;

//       if (allSubDepartmentsSelected) {
//         parentDepartment.collapsed = false;
//       } else {
//         const anySubDepartmentSelected = parentDepartment.sub_departments.some(
//           (subDep) => department[subDep]
//         );

//         if (!anySubDepartmentSelected) {
//           parentDepartment.collapsed = true;
//         }
//       }

//       newData[parentIndex] = parentDepartment;

//       updateParentDepartmentSelection(newData, parentIndex);
//     }
//   };

//   const handleSelectDepartment = (deptIndex: number) => {
//     const newData = [...data];
//     const department = newData[deptIndex];
//     const selected = !department.selected;

//     department.selected = selected;
//     department.sub_departments.forEach((subDep) => {
//       department[subDep] = selected;
//     });

//     updateParentDepartmentSelection(newData, deptIndex);

//     setData(newData);
//   };

//   return (
//     <List>
//       {data.map((dept, deptIndex) => (
//         <React.Fragment key={dept.department}>
//           <ListItem button onClick={() => handleCollapseDepartment(deptIndex)}>
//             {dept.collapsed ? <AddIcon /> : <RemoveIcon />}
//             <Checkbox
//               checked={dept.selected}
//               indeterminate={
//                 !dept.selected &&
//                 dept.sub_departments.some((subDep) => dept[subDep])
//               }
//               onChange={() => handleSelectDepartment(deptIndex)}
//               onClick={(event) => {
//                 event.stopPropagation();
//               }}
//             />
//             <ListItemText primary={dept.department} />
//           </ListItem>
//           {!dept.collapsed && (
//             <List component="div" disablePadding>
//               {dept.sub_departments.map((subDep, subDepIndex) => (
//                 <ListItem
//                   key={subDep}
//                   sx={{ paddingLeft: 4 }}
//                   dense
//                   button
//                   onClick={() =>
//                     handleSubDepartmentClick(deptIndex, subDepIndex)
//                   }
//                 >
//                   <Checkbox
//                     checked={dept[subDep]}
//                     onChange={() =>
//                       handleSubDepartmentClick(deptIndex, subDepIndex)
//                     }
//                     onClick={(event) => {
//                       event.stopPropagation();
//                     }}
//                   />
//                   <ListItemText primary={subDep} />
//                 </ListItem>
//               ))}
//             </List>
//           )}
//         </React.Fragment>
//       ))}
//     </List>
//   );
// };

// export default Department;

// import React, { useState } from "react";
// import {
//   Checkbox,
//   List,
//   ListItem,
//   ListItemText,
//   Collapse,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

// type Department = {
//   department: string;
//   sub_departments: string[];
//   selected?: boolean;
//   collapsed?: boolean;
//   [key: string]: any; // Index signature for dynamic properties
// };

// const initialData: Department[] = [
//     {
//       department: "customer_service",
//       sub_departments: ["support", "customer_success"],
//       selected: false,
//       collapsed: true, // Initially collapse the sub-departments
//     },
//     {
//       department: "design",
//       sub_departments: ["graphic_design", "product_design", "web_design"],
//       selected: false,
//       collapsed: true, // Initially collapse the sub-departments
//     },
//   ];

// const Department = () => {
//     const [data, setData] = useState<Department[]>(initialData);

//     const handleCollapseDepartment = (index: number) => {
//         const newData = [...data];
//         newData[index].collapsed = !newData[index].collapsed;
//         setData(newData);
//       };
//       const handleSelectDepartment = (index: number) => {
//         const newData = [...data];
//         const department = newData[index];
//         department.selected = !department.selected;
//         department.sub_departments.forEach((subDep) => {
//           department[subDep] = department.selected;
//         });
//         setData(newData);
//       };
//       const handleSubDepartmentClick = (deptIndex: number, subDepIndex: number) => {
//         const newData = [...data];
//         const department = newData[deptIndex];
//         const subDep = department.sub_departments[subDepIndex];
//         department[subDep] = !department[subDep];

//         // Check if all sub-departments are selected
//         const allSubDepartmentsSelected = department.sub_departments.every(
//           (subDep) => department[subDep]
//         );

//         // Update the selected state of the parent department
//         department.selected = allSubDepartmentsSelected;

//         // Update the selected state of the parent department for all other departments
//         updateParentSelection(newData, deptIndex, subDep);

//         setData(newData);
//       };

//       const updateParentSelection = (
//         newData: Department[],
//         deptIndex: number,
//         subDep: string
//       ) => {
//         const department = newData[deptIndex];

//         // Check if all sub-departments of the department are selected
//         const allSubDepartmentsSelected = department.sub_departments.every(
//           (subDep) => department[subDep]
//         );

//         // Update the selected state of the parent department
//         if (department.selected !== allSubDepartmentsSelected) {
//           department.selected = allSubDepartmentsSelected;

//           // Check if the parent department is included in the newData
//           const parentDeptIndex = newData.findIndex(
//             (dept) => dept.sub_departments.includes(department.department)
//           );

//           // Update the selected state of the parent department recursively
//           if (parentDeptIndex > -1) {
//             updateParentSelection(newData, parentDeptIndex, department.department);
//           }
//         }
//       };

//     return (
//         <List>
//         {data.map((dept, deptIndex) => (
//           <React.Fragment key={dept.department}>
//             <ListItem button onClick={() => handleCollapseDepartment(deptIndex)}>
//               {dept.collapsed ? <AddIcon /> : <RemoveIcon />}
//               <Checkbox
//                 checked={dept.selected}
//                 onChange={() => handleSelectDepartment(deptIndex)}
//                 indeterminate={
//                   !dept.selected &&
//                   dept.sub_departments.some((subDep) => dept[subDep])
//                 }
//               />
//               <ListItemText primary={dept.department} />
//             </ListItem>
//             <Collapse in={!dept.collapsed} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 {dept.sub_departments.map((subDep, subDepIndex) => (
//                   <ListItem
//                     key={subDep}
//                     sx={{ paddingLeft: 4 }}
//                     dense
//                     button
//                     onClick={() =>
//                       handleSubDepartmentClick(deptIndex, subDepIndex)
//                     }
//                   >
//                     <Checkbox
//                       checked={dept[subDep]}
//                       onChange={() =>
//                         handleSubDepartmentClick(deptIndex, subDepIndex)
//                       }
//                     />
//                     <ListItemText primary={subDep} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Collapse>
//           </React.Fragment>
//         ))}
//       </List>
//     );
//   };

// export default Department;

import React, { useState } from "react";
import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type Department = {
  department: string;
  sub_departments: string[];
  selected?: boolean;
  collapsed?: boolean;
  [key: string]: any; // Index signature for dynamic properties
};

const initialData: Department[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
    selected: false,
    collapsed: true,
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
    selected: false,
    collapsed: true,
  },
];

const Department = () => {
  const [data, setData] = useState<Department[]>(initialData);

  const handleCollapseDepartment = (index: number) => {
    const newData = [...data];
    newData[index].collapsed = !newData[index].collapsed;
    setData(newData);
  };
  const handleSelectDepartment = (index: number) => {
    const newData = [...data];
    const department = newData[index];
    department.selected = !department.selected;
    department.sub_departments.forEach((subDep) => {
      department[subDep] = department.selected;
    });

    // Update the selected state of sub-departments when the parent department is selected
    if (department.selected) {
      newData.forEach((dep) => {
        if (dep.sub_departments.includes(department.department)) {
          dep.selected = true;
          dep.sub_departments.forEach((subDep) => {
            dep[subDep] = true;
          });
        }
      });
    } else {
      updateParentDepartmentSelection(newData, index); // Update the selected state of parent departments
    }

    setData(newData);
  };

  const handleSubDepartmentClick = (index: number, subDepIndex: number) => {
    const newData = [...data];
    const department = newData[index];
    const subDep = department.sub_departments[subDepIndex];

    department[subDep] = !department[subDep];

    updateParentDepartmentSelection(newData, index);

    setData(newData);
  };

  const updateParentDepartmentSelection = (
    newData: Department[],
    index: number
  ) => {
    const department = newData[index];

    const allSubDepartmentsSelected = department.sub_departments.every(
      (subDep) => department[subDep]
    );

    if (allSubDepartmentsSelected !== department.selected) {
      department.selected = allSubDepartmentsSelected;

      const parentDepartment = newData.find((dept) =>
        dept.sub_departments.includes(department.department)
      );

      if (parentDepartment) {
        const parentIndex = newData.findIndex(
          (dept) => dept.department === parentDepartment.department
        );

        if (parentIndex !== -1) {
          updateParentDepartmentSelection(newData, parentIndex);
        }
      }
    }
  };
  return (
    <List>
      {data.map((dept, index) => (
        <React.Fragment key={dept.department}>
          <ListItem button onClick={() => handleCollapseDepartment(index)}>
            {dept.collapsed ? <AddIcon /> : <RemoveIcon />}
            <Checkbox
              checked={dept.selected}
              onChange={() => handleSelectDepartment(index)}
              indeterminate={
                !dept.selected &&
                dept.sub_departments.some((subDep) => dept[subDep])
              }
              onClick={(event) => {
                event.stopPropagation();
              }}
            />

            <ListItemText primary={dept.department} />
          </ListItem>
          <Collapse in={!dept.collapsed} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dept.sub_departments.map((subDep, subDepIndex) => (
                <ListItem
                  key={subDep}
                  sx={{ paddingLeft: 4 }}
                  dense
                  button
                  onClick={() => handleSubDepartmentClick(index, subDepIndex)}
                >
                  <Checkbox
                    checked={dept[subDep]}
                    onChange={() =>
                      handleSubDepartmentClick(index, subDepIndex)
                    }
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  />
                  <ListItemText primary={subDep} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default Department;
