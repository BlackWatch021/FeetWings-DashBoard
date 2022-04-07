import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';         //In page Editor API
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; //In page Editor API
import './CareerDashBoard.css'

const CareerDashBoard = () => {
    let navigate = useNavigate();
    let [jobData, setJobData] = useState({ title: '', employmentType: '', location: '', jobs: '', workplaceType: '', pay: '', short_description: '' })

    let dispatch = useDispatch();





    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setJobData({ ...jobData, [name]: value });
    }


    const addToStore = (e) => {
        e.preventDefault();
        dispatch({
            type: 'store',
            payload: jobData
        });
        setJobData({ title: '', employmentType: '', location: '', jobs: '', workplaceType: '', pay: '', short_description: '' });
        navigate('/dashboard')

    }


    return (
        <>
            <div className="dashboard_wrapper">
                <div className="dashboard_container">
                    <h1>Career DashBoard</h1>
                    <div className="form_wrapper">
                        <form action="" onSubmit={addToStore}>
                            <div className="input_row1">
                                <input type="text" name="title" placeholder='Title' value={jobData.title} onChange={handleChange} className='input1' required />


                                <input type="text" name='employmentType' list='employmentType' placeholder='Employment Type' value={jobData.employmentType} onChange={handleChange} className='input2' required />
                                <datalist name="" id="employmentType">
                                    <option value="Full-time" />
                                    <option value="Part-time" />
                                    <option value="Contract" />
                                    <option value="Temporary" />
                                    <option value="Volunteer" />
                                    <option value="Internship" />
                                </datalist>
                            </div>

                            <div className="input_row2">
                                <input type="text" name='location' placeholder='Location' value={jobData.location} onChange={handleChange} className='input3' required />


                                <input type="text" name='jobs' list='jobs' value={jobData.jobs} placeholder='Job Section' onChange={handleChange} className='input4' required />
                                <datalist name="jobs" id="jobs">
                                    <option value="Business Systems">Business Systems</option>
                                    <option value="Design" />
                                    <option value="Engineering" />
                                    <option value="Finace" />
                                    <option value="Human Resources" />
                                    <option value="Legal" />
                                    <option value="Marketing" />
                                    <option value="Operations" />
                                    <option value="Product" />
                                    <option value="Sales" />
                                    <option value="Security" />
                                    <option value="Support" />
                                </datalist>


                                <input type="text" name='workplaceType' list='workplaceType' placeholder='Workplace Type' value={jobData.workplaceType} onChange={handleChange} className='input5' required />
                                <datalist name="workplaceType" id="workplaceType">
                                    <option value="On-Site">Employees come to work in-person</option>
                                    <option value="Hybrid">Employees work on-site and off-site</option>
                                    <option value="Remote">Employees work off-site</option>
                                </datalist>


                                <input type="text" name="pay" list='pay' placeholder='Pay' value={jobData.pay} onChange={handleChange} className='input6' required />
                                <datalist name="pay" id="pay">
                                    <option value="Paid" />
                                    <option value="Gratis" />
                                </datalist>
                            </div>

                            <input type="text" placeholder='Short Description( 150 words )' name='short_description' className='short_description' value={jobData.short_description} onChange={handleChange} required />

                            <div className="paraInfo">
                                <CKEditor
                                    editor={ClassicEditor} />
                            </div>
                            <input type="submit" className='submit' />
                        </form>
                    </div>
                    <Link to='DashBoard' className='listing_link'>Listing</Link>
                </div>
            </div>
        </>
    )
}

export default CareerDashBoard