import React from 'react'
import { CompanyCard } from './CompanyCard'

 const TrustedCompanies = () => {
    return (
        <section className="py-10 border-t border-b">
        <h4 className="text-center text-lg md:text-2xl font-semibold">
            Trusted by companies of all sizes
        </h4>

        <div className='flex justify-center w-10/12 mx-auto md:w-full items-center my-6'>
        
            <CompanyCard src="assets/udemy-b1.svg" />
            <CompanyCard src="assets/udemy-b2.svg" resize />
            <CompanyCard src="assets/udemy-b3.svg" />
            <CompanyCard src="assets/udemy-b4.svg" resize />
            <CompanyCard src="assets/udemy-b5.svg" />
            

            

        </div>

    </section>
    )
}

export default TrustedCompanies;
