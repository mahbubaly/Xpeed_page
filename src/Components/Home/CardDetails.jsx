import React, { useEffect, useState } from 'react';
import '../Shared/Style.css';
import { useParams } from 'react-router-dom';

const CardDetails = () => {

    const cardDetails = useParams();


    const [allData, setAllData] = useState([]);



    const { id } = cardDetails;





    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setAllData(data));


    }, [])

    const selectedData = allData.find((data) => data.id == id);









    return (
        <>

            <div className='mt-[100px] container mx-auto'>
                {
                    selectedData && <>

                        <h1>{selectedData.title}</h1>
                        <div className='mt-5 w-[762px] h-[762px]'>
                            <img src={selectedData.img} alt="" />
                        </div>


                    </>
                }

            </div>




        </>
    );
};

export default CardDetails;