import React from "react";

import type { FunctionComponent } from "react";
import type { Employee, Days } from "~/types";
import type { LoaderFunction } from "@remix-run/node";

import { weekDays } from "~/utils";
import Button from "~/components/Button";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

import { Firestore } from "firebase/firestore/lite";

export const loader: LoaderFunction = async () => {
  const employees: Employee[] = [
    { id: 0, name: "Alex", days: { monday: true } },
    { id: 1, name: "Lora", days: { tuesday: true } },
    { id: 2, name: "Snowby", days: {} },
    { id: 3, name: "Clooney Herrmann", days: {} },
  ];

  return json({ employees });
};

export default function NoteIndexPage() {
  const loaderData = useLoaderData<{ employees: Employee[] }>();

  const [employees, setEmployees] = React.useState(loaderData.employees);
  const [userEmployee, setUserEmployee] = React.useState<Employee>({
    name: "alex",
    days: {},
  });

  return (
    <div>
      <div className="w-md my-6 border-collapse rounded border-2 border-slate-500">
        <div className="font-bol grid grid-flow-row grid-cols-6 border-b-2 bg-slate-100 p-4 shadow-md">
          <div className="text-left">Name</div>
          <div className="text-center">Mon</div>
          <div className="text-center">Tue</div>
          <div className="text-center">Wed</div>
          <div className="text-center">divu</div>
          <div className="text-center">Fri</div>
        </div>
        <div className="flex flex-col">
          {employees.map(({ id, name, days: userDays }) => (
            <div
              key={id}
              className="grid h-16 grid-flow-row grid-cols-6 items-center border-b-2  border-slate-800 bg-slate-50 p-4 last:border-b-0"
            >
              <div className="text-left">{name}</div>
              {weekDays.map((day, index) => {
                const status: Boolean = userDays[day];
                return <Field key={index} status={status} />;
              })}
            </div>
          ))}
          <CurrentUserRow
            userEmployee={userEmployee}
            setUserEmployee={setUserEmployee}
          />
        </div>
      </div>
      <Button
        onClick={() => {
          setEmployees([
            ...employees,
            { ...userEmployee, id: Math.floor(Math.random() * 10000) },
          ]);
          setUserEmployee({ name: "", days: {} });
        }}
      >
        Add new employee
      </Button>
    </div>
  );
}

interface CurrentUserRowProps {
  userEmployee: Employee;
  setUserEmployee: Function;
}

const CurrentUserRow: FunctionComponent<CurrentUserRowProps> = ({
  userEmployee,
  setUserEmployee,
}) => {
  return (
    <div className="grid h-16 grid-flow-row grid-cols-6 items-center  border-b-2 border-slate-800 bg-blue-200 p-4 last:border-b-0">
      <input
        type="text"
        value={userEmployee.name}
        onChange={(e) =>
          setUserEmployee({ ...userEmployee, name: e.target.value })
        }
        className="shadow-xs ml-[-2] rounded bg-slate-200 px-2 text-left transition-all hover:bg-slate-300 hover:shadow-sm focus:bg-slate-300"
      />
      <EditableField
        userEmployee={userEmployee}
        setUserEmployee={setUserEmployee}
        day="monday"
      />
      <EditableField
        userEmployee={userEmployee}
        setUserEmployee={setUserEmployee}
        day="tuesday"
      />
      <EditableField
        userEmployee={userEmployee}
        setUserEmployee={setUserEmployee}
        day="wednesday"
      />
      <EditableField
        userEmployee={userEmployee}
        setUserEmployee={setUserEmployee}
        day="thursday"
      />
      <EditableField
        userEmployee={userEmployee}
        setUserEmployee={setUserEmployee}
        day="friday"
      />
    </div>
  );
};
interface EditableFieldProps {
  userEmployee: Employee;
  setUserEmployee: Function;
  day: keyof Days;
}

const EditableField: FunctionComponent<EditableFieldProps> = ({
  userEmployee,
  setUserEmployee,
  day,
}) => {
  return (
    <div
      className="cursor-pointer select-none"
      onClick={() =>
        setUserEmployee({
          ...userEmployee,
          days: {
            ...userEmployee.days,
            [day]: !userEmployee?.days?.[day],
          },
        })
      }
    >
      <Field status={userEmployee.days[day]} />
    </div>
  );
};

interface FieldProps {
  status?: Boolean;
}

const Field: FunctionComponent<FieldProps> = ({ status }) => {
  const inOffice = status;
  const onHoliday = false;

  const backgroundColor = onHoliday
    ? "bg-orange-200"
    : inOffice
    ? "bg-green-200"
    : "bg-yellow-200";

  return (
    <div
      className={`border-r-2 border-slate-300 text-center first:border-l-2 last:border-r-0 ${backgroundColor}`}
    >
      {status ? "Office" : "WFH"}
    </div>
  );
};
