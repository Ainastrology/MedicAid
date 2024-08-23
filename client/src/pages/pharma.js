import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';




const pharmaciesData = [
    {
        id: 1,
        name: 'Pharmacy One',
        latitude: 31.3871292,
        longitude: 74.1905642,
        medicines: ['Aspirin', 'Tylenol', 'Ibuprofen']
    },
    {
        id: 2,
        name: 'Pharmacy Two',
        latitude: 31.6157847,
        longitude: 74.2904677,
        medicines: ['Aspirin', 'Vitamin C']
    },
    {
        id: 3,
        name: 'Pharmacy Three',
        latitude: 31.54972,
        longitude: 74.34361,
        medicines: ['Ibuprofen', 'Paracetamol']
    }
];

const PharmacyPage = () => {
    const [viewport, setViewport] = useState({
        longitude: 74.3587,
        latitude: 31.5204,
        zoom: 12,
        width: "100vw",
        height: "100vh"
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPharmacy, setSelectedPharmacy] = useState(null);
    const [filteredPharmacies, setFilteredPharmacies] = useState([]);

    const handleSearch = () => {
        const filtered = pharmaciesData.filter(pharmacy =>
            pharmacy.medicines.includes(searchTerm)
        );
        setFilteredPharmacies(filtered);
    };

    useEffect(() => {
        const listener = (e) => {
            if (e.key === 'Escape') {
                setSelectedPharmacy(null);
            }
        };
        window.addEventListener('keydown', listener);
        return () => {
            window.removeEventListener('keydown', listener);
        };
    }, []);

    return (
        <div>
            <Box display="flex" justifyContent="center" alignItems="center" marginTop={4}>
                <TextField
                    label="Search Medicine"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <Button variant="contained" color="primary" onClick={handleSearch}>
                    Search
                </Button>
            </Box>

            <ReactMapGL
                {...viewport}
                mapboxAccessToken={process.env.REACT_APP_MAP_API_TOKEN}
                style={{ width: 600, height: 400} }

                mapStyle="mapbox://styles/quratulain132/cm05frr7e00hd01qth107gh0d"
                onViewportChange={(newViewport) => setViewport(newViewport)}
            >
                {filteredPharmacies.map(pharmacy => (
                    <Marker 
                        key={pharmacy.id}
                        latitude={pharmacy.latitude}
                        longitude={pharmacy.longitude}
                    >
                        <Button onClick={() => setSelectedPharmacy(pharmacy)}>
                            {pharmacy.name}
                        </Button>
                    </Marker>
                ))}

                {selectedPharmacy && (
                    <Popup
                        latitude={selectedPharmacy.latitude}
                        longitude={selectedPharmacy.longitude}
                        onClose={() => setSelectedPharmacy(null)}
                        closeOnClick={false}
                    >
                        <div>
                            <h3>{selectedPharmacy.name}</h3>
                            <p>Available Medicines: {selectedPharmacy.medicines.join(', ')}</p>
                        </div>
                    </Popup>
                )}
            </ReactMapGL>
        </div>
    );
};

export default PharmacyPage;





























// // import Map, { Marker } from "react-map-gl";   //Ahmad Code
// // import "mapbox-gl/dist/mapbox-gl.css"; 
// // function Root() 
// // { return ( 
// // <Map 
// // initialViewState={{ 
// //     latitude: 37.8, 
// //     longitude: -122.4, 
// //     zoom: 14 }} 
// //     style={{ 
// //         width: "100vw", 
// //         height: "100vh", 
// //         // backgroundColor: "#333"
// //     }}
// //     //  https://basemaps.cartocdn.com/gl/positron-gl-style/style.json
// //         mapStyle="https://api.mapbox.com/styles/v1/quratulain132/cm05frr7e00hd01qth107gh0d.html?title=view&access_token=pk.eyJ1IjoicXVyYXR1bGFpbjEzMiIsImEiOiJjbTA1YXZ2bmcwZW50MmpyMHZsdDB1bDFqIn0.siyQttCkvzDDRtcKBUJDiw&zoomwheel=true&fresh=true#0.25/0/0" > 
// //         <Marker 
// //         longitude={-122.4} 
// //         latitude={37.8} 

// //         color="red" /> </Map> ); }


// //Ahmad Code

