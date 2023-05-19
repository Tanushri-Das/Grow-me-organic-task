import React, { useState } from "react";
import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
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
    newData.forEach((dep) => {
      if (dep.sub_departments.includes(department.department)) {
        dep.selected = department.selected;
        dep.sub_departments.forEach((subDep) => {
          dep[subDep] = department.selected;
        });
      }
    });

    // Update the selected state of parent departments
    updateParentDepartmentSelection(newData, index);

    setData(newData);
  };

  const handleSubDepartmentClick = (index: number, subDepIndex: number) => {
    const newData = [...data];
    const department = newData[index];
    const subDep = department.sub_departments[subDepIndex];

    department[subDep] = !department[subDep];

    // Update the selected state of sub-departments when the parent department is selected
    if (department.selected) {
      department.sub_departments.forEach((sub) => {
        department[sub] = true;
      });
    }

    // Update the selected state of parent departments
    updateParentDepartmentSelection(newData, index);

    const lastSubDepartmentSelected = department.sub_departments.every(
      (sub) => department[sub]
    );

    console.log(
      "Last Sub-Department Selected:",
      subDep,
      lastSubDepartmentSelected
    );

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "100px",
      }}
    >
      <div style={{ textAlign: "center" }}>
      <Typography
        gutterBottom
        variant="h5"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        All Department
      </Typography>
      <List>
        {data.map((dept, index) => (
          <React.Fragment key={dept.department}>
            <ListItem button onClick={() => handleCollapseDepartment(index)}>
              {dept.collapsed ? <AddIcon /> : <RemoveIcon />}
              <Checkbox
                checked={dept.selected}
                onChange={() => handleSelectDepartment(index)}
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
      </div>
    </div>
  );
};

export default Department;
