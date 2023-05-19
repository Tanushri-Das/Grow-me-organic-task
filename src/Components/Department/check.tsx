import React, { useState } from "react";
import { Checkbox, List, ListItem, ListItemText} from "@mui/material";
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
    collapsed: true, // Initially collapse the sub-departments
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
    selected: false,
    collapsed: true, // Initially collapse the sub-departments
  },
];

const Department = () => {
  const [data, setData] = useState<Department[]>(initialData);

  const handleCollapseDepartment = (index: number) => {
    const newData = [...data];
    newData[index].collapsed = !newData[index].collapsed;
    setData(newData);
  };

  const handleSubDepartmentClick = (deptIndex: number, subDepIndex: number) => {
    const newData = [...data];
    const department = newData[deptIndex];
    const subDep = department.sub_departments[subDepIndex];

    department[subDep] = !department[subDep];

    updateParentDepartmentSelection(newData, deptIndex);

    setData(newData);
  };

  const updateParentDepartmentSelection = (
    newData: Department[],
    deptIndex: number
  ) => {
    const department = newData[deptIndex];

    const allSubDepartmentsSelected = department.sub_departments.every(
      (subDep) => department[subDep]
    );

    if (allSubDepartmentsSelected !== department.selected) {
      department.selected = allSubDepartmentsSelected;

      const parentDepartment = newData.find(
        (dept) => dept.sub_departments.includes(department.department)
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

  const handleSelectDepartment = (deptIndex: number) => {
    const newData = [...data];
    const department = newData[deptIndex];
    const selected = !department.selected;

    department.selected = selected;
    department.sub_departments.forEach((subDep) => {
      department[subDep] = selected;
    });

    updateParentDepartmentSelection(newData, deptIndex);

    setData(newData);
  };

  return (
    <List>
      {data.map((dept, deptIndex) => (
        <React.Fragment key={dept.department}>
          <ListItem button onClick={() => handleCollapseDepartment(deptIndex)}>
            {dept.collapsed ? <AddIcon /> : <RemoveIcon />}
            <Checkbox
              checked={dept.selected}
              indeterminate={
                !dept.selected &&
                dept.sub_departments.some((subDep) => dept[subDep])
              }
              onChange={() => handleSelectDepartment(deptIndex)}
              // Add the following line to fix the controlled/uncontrolled state error
              onClick={(event) => {
                event.stopPropagation();
              }}
            />
            <ListItemText primary={dept.department} />
          </ListItem>
          {!dept.collapsed && (
            <List component="div" disablePadding>
              {dept.sub_departments.map((subDep, subDepIndex) => (
                <ListItem
                  key={subDep}
                  sx={{ paddingLeft: 4 }}
                  dense
                  button
                  onClick={() =>
                    handleSubDepartmentClick(deptIndex, subDepIndex)
                  }
                >
                  <Checkbox
                    checked={dept[subDep]}
                    onChange={() =>
                      handleSubDepartmentClick(deptIndex, subDepIndex)
                    }
                    // Add the following line to fix the controlled/uncontrolled state error
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  />
                  <ListItemText primary={subDep} />
                </ListItem>
              ))}
            </List>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default Department;
