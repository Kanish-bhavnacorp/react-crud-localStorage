import React, { useEffect, useState } from 'react';
import { EmployeeItem } from './EmployeeItem'

export const EmployeeList = ({ getData }) => {

    const [employees, setEmployees] = useState(getData());

    const deleteEmployee = (employee) => {
        const deletedEmployee = employees.filter((element) => {
          return element.id !== employee;
        });
        setEmployees(deletedEmployee);
    }

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    return (
        <div>
            <h1 className='my-5 text-center'>Manage Employees</h1>

            {
                employees.length > 0 ? (
                    <div className='card bg-secondary p-3'>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Role</th>
                                </tr>
                            </thead>

                            <tbody>
                                {employees.map(employee => <EmployeeItem employee={employee} key={employee.id} deleteEmployee={deleteEmployee} />)}     
                            </tbody>

                        </table>
                    </div>
                ) : (
                    <h3 className='text-center'>No Employees</h3>
                )
            }

        </div>
    )
}
