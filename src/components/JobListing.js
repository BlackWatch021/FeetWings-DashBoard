import React from 'react'
import './JobListing.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const JobListing = () => {

    const state = useSelector((state) => state);


    return (
        <>
            <div className="joblisting_wrapper">
                <div className="joblisting_container">

                    <h2>Business Systems</h2>
                    {
                        state.reducer.map(el => {
                            return (el.title && <>
                                <div className="cards">
                                    <h2>{el.title} <span>({el.employmentType})</span> </h2>
                                    <p className='description'>{el.short_description}  (Short Description)</p>
                                    <p className='type'>{el.workplaceType}</p>({el.location})
                                </div>
                            </>)
                        })
                    }
                    <Link to='/' className='listing_link'>Home</Link>
                </div>
            </div>
        </>
    )
}

export default JobListing