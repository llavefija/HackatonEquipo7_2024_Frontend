/* eslint-disable react/prop-types */

const MapFormComponent = ({ dateTime, setDateTime }) => {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log("Selected Date and Time:", dateTime); 
    };

    const handleChange = (event) => {
        setDateTime(event.target.value);
    };

    return (
        <form className="absolute z-20 top-0 left-1/2" onSubmit={handleSubmit}>
            <input 
                type="datetime-local" 
                id="start" 
                name="trip-start" 
                value={dateTime} 
                min="2024-01-01T00:00" 
                max="2027-12-31T23:59" 
                className="absolute z-20 top-0 left-1/2" 
                onChange={handleChange} 
            />
            <button type="submit" className="absolute z-20 top-10 left-1/2">Submit</button>
        </form>
    );
};

export default MapFormComponent;