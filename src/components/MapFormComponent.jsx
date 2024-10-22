import { getCurrentDateTime } from "../utils/getCurrentDateTime";
import { Button } from "./Button";
import Input from "./Input";

const MapFormComponent = ({ dateTime, setDateTime, onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        onSubmit(); 
    };

    const handleChange = (event) => {
        setDateTime(event.target.value);  
    };

    const minDateTime = getCurrentDateTime();

    return (
        <form className="absolute z-20 top-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-4" onSubmit={handleSubmit}>
            <Input 
                type="datetime-local" 
                id="start" 
                name="trip-start" 
                value={dateTime} 
                min={minDateTime} 
                max="2027-12-31T23:59" 
                onChange={handleChange} 
            />
            <Button type="submit" content="Enviar"/>
        </form>
    );
};

export default MapFormComponent;