import React from 'react'
import { useNavigate } from 'react-router-dom';

export const EmployeeItem = ({ employee, deleteEmployee }) => {
    const navigate = useNavigate();
    const { name, email, phone, role, id } = employee;

    return (
        <tr>
            <th>{name}</th>
            <th>{email}</th>
            <th>{phone}</th>
            <th>{role}</th>
            <th>
                <div className='d-flex gap-3'>
                    <span role='button' className='badge bg-success' onClick={() => navigate(`/edit-employee/${id}`)}>
                        Edit
                    </span>
                    <span role='button' className='badge bg-danger' onClick={() => deleteEmployee(id)}>
                        Delete
                    </span>
                </div>
            </th>
        </tr>
    )
}
