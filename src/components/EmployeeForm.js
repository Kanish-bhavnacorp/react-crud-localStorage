import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import uuid from 'react-uuid';

export const EmployeeForm = ({ getData }) => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [employees, setEmployees] = useState(getData());

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        let employee = {
            name,
            email,
            phone,
            role,
            id: uuid()
        }

        if (id) {
            const updatedEmployee = {
                name, email, phone, role, id
            }
            const employeeIndex = employees.findIndex(
                (employee) => employee.id === id
            );

            if (employeeIndex !== -1) {
                employees[employeeIndex] = updatedEmployee;
            }
            setEmployees([...employees]);
        } else {
            setEmployees([...employees, employee]);
        }


        setName('');
        setEmail('');
        setPhone('');
        setRole('');

        e.preventDefault();
    }

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    useEffect(() => {
        if (id) {
            getEmployeeById(id);
        }
    }, [id]);

    const getEmployeeById = (id) => {
        const employees = getData();
        const employee = employees.find(employee => employee.id === id);
        const { name, email, phone, role } = employee;
        setName(name);
        setEmail(email);
        setPhone(phone);
        setRole(role);
    }

    return (
        <div>
            <div className='d-flex my-5 justify-content-between'>
                <button className='btn btn-outline-secondary' onClick={() => navigate('/')}>Back</button>
                <h1>{id ? 'Edit' : 'Add'} Employee</h1>
            </div>

            <div className='card border-primary p-5 m-5'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='form-label mt-2' htmlFor='name'>Name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='name'
                            placeholder='Enter Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label className='form-label mt-2' htmlFor='email'>Email</label>
                        <input type='email'
                            className='form-control'
                            id='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label className='form-label mt-2' htmlFor='phone'>Phone Number</label>
                        <input type='text'
                            className='form-control'
                            id='phone'
                            placeholder='Enter Phone Number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label className='form-label mt-2' htmlFor='role'>Role</label>
                        <input type='text'
                            className='form-control'
                            id='role'
                            placeholder='Enter Role'
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        />
                    </div>

                    <div className='d-grid gap-2 mt-3'>
                        <button type='submit' className='btn btn-outline-primary my-3'>{id ? 'Update' : 'Add'} Employee</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
