import { useState } from "react";
import type { FunctionComponent } from "react";
import type { Employee, Days } from "./types";

export default function NoteIndexPage() {
  const employees: Employee[] = [
    { id: 0, name: "Alex", days: {} },
    { id: 1, name: "Lora", days: {} },
    { id: 2, name: "Snowby", days: {} },
    { id: 3, name: "Clooney Herrmann", days: {} },
    { id: 3, name: "Clooney Herrmann", days: {} },
  ];

  const [userEmployee, setUserEmployee] = useState<Employee>({
    name: "alex",
    days: {},
  });

  return (
    <div className="">
      <div className="w-md border-collapse rounded border-2 border-slate-500">
        <div className="font-bol grid grid-flow-row grid-cols-6 border-b-2 bg-slate-100 p-4 shadow-md">
          <div className="text-left">Name</div>
          <div className="text-center">Mon</div>
          <div className="text-center">Tue</div>
          <div className="text-center">Wed</div>
          <div className="text-center">divu</div>
          <div className="text-center">Fri</div>
        </div>
        <div className="flex flex-col">
          {employees.map(({ id, name }) => (
            <div
              key={id}
              className="grid h-16 grid-flow-row grid-cols-6 items-center border-b-2  border-slate-800 bg-slate-50 p-4 last:border-b-0"
            >
              <div className="text-left">{name}</div>
              <Field value="x" />
              <Field value="x" />
              <Field value="x" />
              <Field value="x" />
              <Field value="x" />
            </div>
          ))}
          <CurrentUserRow
            userEmployee={userEmployee}
            setUserEmployee={setUserEmployee}
          />
        </div>
      </div>
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
    <div className="grid h-16 grid-flow-row grid-cols-6 items-center  border-b-2 border-slate-800 bg-slate-50 p-4 last:border-b-0">
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
      <Field value={userEmployee.days[day] ? "in" : "-"} />
    </div>
  );
};

interface FieldProps {
  value: string;
}

const Field: FunctionComponent<FieldProps> = ({ value }) => {
  return (
    <div className="border-r-2 border-slate-300 text-center first:border-l-2 last:border-r-0">
      {value}
    </div>
  );
};
