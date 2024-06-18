import {useParams, useNavigate} from "react-router-dom";
import {IoArrowBack} from "react-icons/io5";

import Button from "./Button.tsx";
import CountryDetails from "../../../features/details/CountryDetails.tsx";


const DetailsPage = () => {
    const navigate = useNavigate();
    const {name} = useParams();

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack/> Back
            </Button>
            <CountryDetails name={name} navigate={navigate}/>
        </div>
    );
};

export default DetailsPage;