import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {searchByCountry} from "../../../../config.ts";
import {IoArrowBack} from "react-icons/io5";
import Button from "./Button.tsx";
import Info from "./Info.tsx";

const DetailsPage = () => {
    const navigate = useNavigate();
    const {name} = useParams();

    const [country, setCountry] = useState('');

    console.log(country)

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({data}) => setCountry(data[0]))
    }, [name])

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack/> Back
            </Button>
            {country && (
                <Info
                    {...country}
                    navigate={navigate}
                />
            )}
        </div>
    );
};

export default DetailsPage;