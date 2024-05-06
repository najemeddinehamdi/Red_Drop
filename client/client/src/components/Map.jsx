import React, { useState, useEffect, } from 'react';
import bloodDonationCenters from './BloodDonationCenters';
import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const Map = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        // Clear timeout on component unmount
        return () => clearTimeout(timeout);
    }, []);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter blood donation centers based on search query
    const filteredBloodDonationCenters = bloodDonationCenters.filter(center =>
        center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='map'>
            <Link to={"/"} className='btn'>Back</Link>
            <div className='map-p'>
                {isLoading ? (
                    <div className="loader">
                        <FaSpinner className="icon-spin" />
                    </div>
                ) : (
                    <iframe title='map' src="https://maps.google.com/maps?q=Nefel+Education%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                )}          <p className='para'>
                    To find the nearest donation center, individuals can utilize various resources such as online blood donation platforms, mobile applications, or simply search engines. These platforms often provide users with the ability to locate nearby donation centers based on their current location or inputted address. Additionally, blood donation organizations frequently host blood drives at community centers, schools, or workplaces, allowing individuals to conveniently donate within their local area. By leveraging these resources, donors can easily locate the nearest donation center and contribute to lifesaving efforts within their community.
                </p>
            </div>

            <div className='all'>
                <div className='search'>
                    <input
                        className='search-map'
                        type="search"
                        placeholder='Find the nearest donation center'
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                    <button className='btn-s'>Search</button>
                </div>
                {searchQuery && (
                    <div className="blood-donation-centers">

                        {filteredBloodDonationCenters.map(center => (
                            <div key={center.id} className="center">
                                <h3>{center.name}</h3>
                                <p><strong>Location:</strong> {center.location}</p>
                                <p><strong>Contact:</strong> {center.contact}</p>
                                <p><strong>Hours:</strong> {center.hours}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
export default Map;
