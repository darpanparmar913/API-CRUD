import React, { useEffect, useState } from 'react'
import { Card, Container, } from 'react-bootstrap'
import axios from 'axios';
// import { Box, Typography } from '@mui/material';
import { Box, Button, Modal, Typography } from "@mui/material";


function BhagvatGita() {

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
    };

    const [BhagvatGita, setBhagvatGita] = useState([]);
    const [togal1, setTogal1] = useState(false);
    const [togal2, setTogal2] = useState(false);
    const [hindi, setHindi] = useState("");
    const [english, setEnglish] = useState("");





    const getDatacync = async () => {
        const options = {
            method: 'GET',
            url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/',
            params: { limit: '18' },
            headers: {
                'X-RapidAPI-Key': '77562d826dmsha1bafe7948bf672p12fab5jsnc7073f45ae95',
                'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            // console.log(response.data);
            setBhagvatGita(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const handleTogal = (id) => {
        setHindi(BhagvatGita.filter((val) => val.id === id));
        setTogal1(true);
    };
    const handleTogal1 = (id) => {
        setEnglish(BhagvatGita.filter((val) => val.id === id));
        setTogal2(true);
    };
    const handleClose = () => setTogal1(false);

    const handleClose1 = () => setTogal2(false);

    useEffect(() => {
        getDatacync();
    }, []);

    return (
        <>
            <Container className='mt-5'>
                <div className="d-flex flex-wrap">

                    {
                        BhagvatGita.map((val) => {
                            return (
                                <Card style={{ width: '18rem' }} className='m-3'>
                                    <Card.Body>
                                        <Card.Title>{val.chapter_number}</Card.Title>
                                        <Card.Text>
                                            {val.name}
                                        </Card.Text>
                                        <Button variant="contained" style={{ backgroundColor: "#62B9FF", border: 0, color:"#ffffff" }} className='me-3' onClick={() => handleTogal(val.id)}>Hindi</Button>
                                        <Button variant="contained" style={{ backgroundColor: "#FFA245", border: 0, color:"#ffffff" }} onClick={() => handleTogal1(val.id)}>English</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }

                </div>

       
                <div class="modal" id="modal-one" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-header">
                            <h2>Modal in CSS?</h2>
                            <a href="#modal-one" class="btn-close" aria-hidden="true">×</a>

                        </div>
                        <div class="modal-body">
                            <p>One modal example here! :D</p>
                        </div>
                        <div class="modal-footer"> <a href="#modal-one" class="btn">Nice!</a>

                        </div>
                    </div>
                </div>
                {/* <div class="wrap"> <a href="#" class="btn btn-big">Modal!</a> */}

                {/* </div> */}

                <Modal open={togal1} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            नाम : {hindi[0]?.name}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {hindi[0]?.chapter_summary_hindi}
                        </Typography>
                    </Box>
                </Modal>
                <Modal open={togal2} onClose={handleClose1} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Name : {english[0]?.name_translated}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {english[0]?.chapter_summary}
                        </Typography>
                    </Box>
                </Modal>

            </Container >

        </>
    )
}

export default BhagvatGita