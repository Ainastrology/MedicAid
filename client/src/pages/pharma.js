// import React, { useState, useEffect } from 'react';
// import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';




// const pharmaciesData = [
//     {
//         id: 1,
//         name: 'Pharmacy One',
//         latitude: 31.3871292,
//         longitude: 74.1905642,
//         medicines: ['Aspirin', 'Tylenol', 'Ibuprofen']
//     },
//     {
//         id: 2,
//         name: 'Pharmacy Two',
//         latitude: 31.6157847,
//         longitude: 74.2904677,
//         medicines: ['Aspirin', 'Vitamin C']
//     },
//     {
//         id: 3,
//         name: 'Pharmacy Three',
//         latitude: 31.54972,
//         longitude: 74.34361,
//         medicines: ['Ibuprofen', 'Paracetamol']
//     }
// ];

// const PharmacyPage = () => {
//     const [viewport, setViewport] = useState({
//         longitude: 74.3587,
//         latitude: 31.5204,
//         zoom: 12,
//         width: "100vw",
//         height: "100vh",
//         DragEvent: true
//     });

//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedPharmacy, setSelectedPharmacy] = useState(null);
//     const [filteredPharmacies, setFilteredPharmacies] = useState([]);

//     const handleSearch = () => {
//         const filtered = pharmaciesData.filter(pharmacy =>
//             pharmacy.medicines.includes(searchTerm)
//         );
//         setFilteredPharmacies(filtered);
//     };

//     useEffect(() => {
//         const listener = (e) => {
//             if (e.key === 'Escape') {
//                 setSelectedPharmacy(null);
//             }
//         };
//         window.addEventListener('keydown', listener);
//         return () => {
//             window.removeEventListener('keydown', listener);
//         };
//     }, []);

//     return (
//         <div>
//             <Box display="flex" justifyContent="center" alignItems="center" marginTop={4}>
//                 <TextField
//                     label="Search Medicine"
//                     variant="outlined"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     style={{ marginRight: '10px' }}
//                 />
//                 <Button variant="contained" color="primary" onClick={handleSearch}>
//                     Search
//                 </Button>
//             </Box>

//             <ReactMapGL
//                 {...viewport}
//                 mapboxAccessToken={process.env.REACT_APP_MAP_API_TOKEN}
//                 style={{ width: 600, height: 400} }

//                 mapStyle="mapbox://styles/quratulain132/cm05frr7e00hd01qth107gh0d"
//                 onViewportChange={(newViewport) => setViewport(newViewport)}
//             >
//                 {filteredPharmacies.map(pharmacy => (
//                     <Marker 
//                         key={pharmacy.id}
//                         latitude={pharmacy.latitude}
//                         longitude={pharmacy.longitude}
//                     >
//                         <Button onClick={() => setSelectedPharmacy(pharmacy)}>
//                             {pharmacy.name}
//                         </Button>
//                     </Marker>
//                 ))}

//                 {selectedPharmacy && (
//                     <Popup
//                         latitude={selectedPharmacy.latitude}
//                         longitude={selectedPharmacy.longitude}
//                         onClose={() => setSelectedPharmacy(null)}
//                         closeOnClick={false}
//                     >
//                         <div>
//                             <h3>{selectedPharmacy.name}</h3>
//                             <p>Available Medicines: {selectedPharmacy.medicines.join(', ')}</p>
//                         </div>
//                     </Popup>
//                 )}
//             </ReactMapGL>
//         </div>
//     );
// };

// export default PharmacyPage;





























// // // import Map, { Marker } from "react-map-gl";   //Ahmad Code
// // // import "mapbox-gl/dist/mapbox-gl.css"; 
// // // function Root() 
// // // { return ( 
// // // <Map 
// // // initialViewState={{ 
// // //     latitude: 37.8, 
// // //     longitude: -122.4, 
// // //     zoom: 14 }} 
// // //     style={{ 
// // //         width: "100vw", 
// // //         height: "100vh", 
// // //         // backgroundColor: "#333"
// // //     }}
// // //     //  https://basemaps.cartocdn.com/gl/positron-gl-style/style.json
// // //         mapStyle="https://api.mapbox.com/styles/v1/quratulain132/cm05frr7e00hd01qth107gh0d.html?title=view&access_token=pk.eyJ1IjoicXVyYXR1bGFpbjEzMiIsImEiOiJjbTA1YXZ2bmcwZW50MmpyMHZsdDB1bDFqIn0.siyQttCkvzDDRtcKBUJDiw&zoomwheel=true&fresh=true#0.25/0/0" > 
// // //         <Marker 
// // //         longitude={-122.4} 
// // //         latitude={37.8} 

// // //         color="red" /> </Map> ); }


// // //Ahmad Code














// import React, { useState, useEffect } from 'react';
// import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';

// const pharmaciesData = [
//     {
//         id: 1,
//         name: 'Pharmacy One',
//         latitude: 31.3871292,
//         longitude: 74.1905642,
//         medicines: ['Aspirin', 'Tylenol', 'Ibuprofen'],
//         contact: '123-456-7890',
//         website: 'https://pharmacyone.com',
//         address: '123 Main St, City'
//     },
//     {
//         id: 2,
//         name: 'Pharmacy Two',
//         latitude: 31.6157847,
//         longitude: 74.2904677,
//         medicines: ['Aspirin', 'Vitamin C'],
//         contact: '098-765-4321',
//         website: 'https://pharmacytwo.com',
//         address: '456 Elm St, City'
//     },
//     {
//         id: 3,
//         name: 'Pharmacy Three',
//         latitude: 31.54972,
//         longitude: 74.34361,
//         medicines: ['Ibuprofen', 'Paracetamol'],
//         contact: '456-789-1230',
//         website: 'https://pharmacythree.com',
//         address: '789 Oak St, City'
//     },
//     {
//         id: 4,
//         name: 'Bashir Sons Pharmacy Master City Gujranwala',
//         latitude: 32.3322207,
//         longitude: 74.3544914,
//         medicines: ['Panadol', 'Neubral Forte'],
//         contact: '+92 320 3247914',
//         website: 'https://www.bashirsonspharmacy.com/',
//         address: 'Shop # 1, Royal Shopping Center, College Rd, opposite Gourmet Bakery, Daska, Sialkot, Punjab, Pakistan'
//     }
// ];

// const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371; // Radius of the Earth in km
//     const dLat = (lat2 - lat1) * (Math.PI / 180);
//     const dLon = (lon2 - lon1) * (Math.PI / 180);
//     const a = 
//         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
//         Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     return R * c; // Distance in km
// };

// const PharmacyPage = () => {
//     const [viewport, setViewport] = useState({
//         longitude: 74.3587,
//         latitude: 31.5204,
//         zoom: 12,
//         width: "100vw",
//         height: "100vh",
//         DragEvent: true
//     });

//     const [searchTerm, setSearchTerm] = useState('');
//     const [location, setLocation] = useState({ latitude: '', longitude: '' });
//     const [selectedPharmacy, setSelectedPharmacy] = useState(null);
//     const [filteredPharmacies, setFilteredPharmacies] = useState([]);
//     const [nearestPharmacies, setNearestPharmacies] = useState([]);

//     const handleSearch = () => {
//         const filtered = pharmaciesData.filter(pharmacy =>
//             pharmacy.medicines.includes(searchTerm)
//         );
//         setFilteredPharmacies(filtered);
//     };

//     const findNearestPharmacies = () => {
//         const { latitude, longitude } = location;
//         const nearbyPharmacies = pharmaciesData
//             .map(pharmacy => ({
//                 ...pharmacy,
//                 distance: calculateDistance(latitude, longitude, pharmacy.latitude, pharmacy.longitude)
//             }))
//             .sort((a, b) => a.distance - b.distance)
//             .slice(0, 5); // Top 5 nearest pharmacies
//         setNearestPharmacies(nearbyPharmacies);
//     };

//     useEffect(() => {
//         const listener = (e) => {
//             if (e.key === 'Escape') {
//                 setSelectedPharmacy(null);
//             }
//         };
//         window.addEventListener('keydown', listener);
//         return () => {
//             window.removeEventListener('keydown', listener);
//         };
//     }, []);

//     return (
//         <div>
//             <Box display="flex" justifyContent="center" alignItems="center" marginTop={4}>
//                 <TextField
//                     label="Search Medicine"
//                     variant="outlined"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     style={{ marginRight: '10px' }}
//                 />
//                 <Button variant="contained" color="primary" onClick={handleSearch}>
//                     Search
//                 </Button>
//             </Box>

//             <Box display="flex" justifyContent="center" alignItems="center" marginTop={4}>
//                 <TextField
//                     label="Enter Latitude"
//                     variant="outlined"
//                     value={location.latitude}
//                     onChange={(e) => setLocation({ ...location, latitude: e.target.value })}
//                     style={{ marginRight: '10px' }}
//                 />
//                 <TextField
//                     label="Enter Longitude"
//                     variant="outlined"
//                     value={location.longitude}
//                     onChange={(e) => setLocation({ ...location, longitude: e.target.value })}
//                     style={{ marginRight: '10px' }}
//                 />
//                 <Button variant="contained" color="secondary" onClick={findNearestPharmacies}>
//                     Find Nearest Pharmacies
//                 </Button>
//             </Box>

//             <Box display="flex" justifyContent="center" alignItems="center" marginTop={4}>
//                 <List>
//                     {nearestPharmacies.map(pharmacy => (
//                         <ListItem key={pharmacy.id}>
//                             <ListItemText
//                                 primary={pharmacy.name}
//                                 secondary={`Distance: ${pharmacy.distance.toFixed(2)} km | Contact: ${pharmacy.contact} | Website: ${pharmacy.website} | Address: ${pharmacy.address}`}
//                             />
//                         </ListItem>
//                     ))}
//                 </List>
//             </Box>

//             <ReactMapGL
//                 {...viewport}
//                 mapboxAccessToken={process.env.REACT_APP_MAP_API_TOKEN}
//                 style={{ width: 600, height: 400 }}
//                 mapStyle="mapbox://styles/quratulain132/cm05frr7e00hd01qth107gh0d"
//                 onViewportChange={(newViewport) => setViewport(newViewport)}
//             >
//                 {filteredPharmacies.map(pharmacy => (
//                     <Marker
//                         key={pharmacy.id}
//                         latitude={pharmacy.latitude}
//                         longitude={pharmacy.longitude}
//                     >
//                         <Button onClick={() => setSelectedPharmacy(pharmacy)}>
//                             {pharmacy.name}
//                         </Button>
//                     </Marker>
//                 ))}

//                 {selectedPharmacy && (
//                     <Popup
//                         latitude={selectedPharmacy.latitude}
//                         longitude={selectedPharmacy.longitude}
//                         onClose={() => setSelectedPharmacy(null)}
//                         closeOnClick={false}
//                     >
//                         <div>
//                             <h3>{selectedPharmacy.name}</h3>
//                             <p>Available Medicines: {selectedPharmacy.medicines.join(', ')}</p>
//                             <p>Contact: {selectedPharmacy.contact}</p>
//                             <p>Website: <a href={selectedPharmacy.website} target="_blank" rel="noopener noreferrer">{selectedPharmacy.website}</a></p>
//                             <p>Address: {selectedPharmacy.address}</p>
//                         </div>
//                     </Popup>
//                 )}
//             </ReactMapGL>
//         </div>
//     );
// };

// export default PharmacyPage;










import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Geocode from 'react-geocode';

const pharmaciesData = [
    {
        id: 1,
        name: 'Pharmacy One',
        latitude: 31.3871292,
        longitude: 74.1905642,
        medicines: ['Aspirin', 'Tylenol', 'Ibuprofen'],
        contact: '+1234567890',
        website: 'http://pharmacyone.com',
        address: '123 Main St'
    },
    {
        id: 2,
        name: 'Pharmacy Two',
        latitude: 31.6157847,
        longitude: 74.2904677,
        medicines: ['Aspirin', 'Vitamin C'],
        contact: '+1234567891',
        website: 'http://pharmacytwo.com',
        address: '456 Elm St'
    },
    {
        id: 3,
        name: 'Pharmacy Three',
        latitude: 31.54972,
        longitude: 74.34361,
        medicines: ['Ibuprofen', 'Paracetamol'],
        contact: '+1234567892',
        website: 'http://pharmacythree.com',
        address: '789 Oak St'
    }
];

// Function to calculate the distance between two coordinates using the Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
};

const PharmacyPage = () => {
    const [viewport, setViewport] = useState({
        longitude: 74.3587,
        latitude: 31.5204,
        zoom: 12,
        // width: "100vw",
        // height: "100vh",
        DragEvent: true
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPharmacy, setSelectedPharmacy] = useState(null);
    const [filteredPharmacies, setFilteredPharmacies] = useState([]);
    const [nearestPharmacies, setNearestPharmacies] = useState([]);
    const [userLocation, setUserLocation] = useState(null);

    const handleSearch = () => {
        const filtered = pharmaciesData.filter(pharmacy =>
            pharmacy.medicines.includes(searchTerm)
        );
        setFilteredPharmacies(filtered);
    };

    const findNearestPharmacies = (location) => {
        const distances = pharmaciesData.map(pharmacy => {
            const distance = calculateDistance(location.latitude, location.longitude, pharmacy.latitude, pharmacy.longitude);
            return { ...pharmacy, distance };
        });

        distances.sort((a, b) => a.distance - b.distance);
        console.log("Sorted pharmacies by distance:", distances);

        setNearestPharmacies(distances.slice(0, 5)); // Get top 5 nearest pharmacies
    };

    const handleLocationSearch = () => {
        Geocode.setApiKey(process.env.REACT_APP_MAP_API_TOKEN);
        Geocode.fromAddress(searchTerm).then(
            (response) => {
                console.log("Geocode response:", response);
                const { lat, lng } = response.results[0].geometry.location;
                const location = { latitude: lat, longitude: lng };
                console.log("User location:", location);

                setUserLocation(location);
                setViewport((prevViewport) => ({
                    ...prevViewport,
                    latitude: lat,
                    longitude: lng,
                }));

                findNearestPharmacies(location);
            },
            (error) => {
                console.error("Geocode error:", error);
            }
        );
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
                    label="Enter Location"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <Button variant="contained" color="primary" onClick={handleLocationSearch}>
                    Search Location
                </Button>
            </Box>

            <ReactMapGL
                {...viewport}
                mapboxAccessToken={process.env.REACT_APP_MAP_API_TOKEN}
                style={{ width: 600, height: 400}}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={(newViewport) => setViewport(newViewport)}
            >
                {nearestPharmacies.map(pharmacy => (
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
                            <p>Contact: {selectedPharmacy.contact}</p>
                            <p>Website: <a href={selectedPharmacy.website} target="_blank" rel="noopener noreferrer">{selectedPharmacy.website}</a></p>
                            <p>Address: {selectedPharmacy.address}</p>
                        </div>
                    </Popup>
                )}
            </ReactMapGL>

            {nearestPharmacies.length > 0 && (
                <Box marginTop={4} padding={2} border="1px solid #ccc" borderRadius="8px">
                    <h2>Nearest Pharmacies</h2>
                    <ul>
                        {nearestPharmacies.map(pharmacy => (
                            <li key={pharmacy.id}>
                                <strong>{pharmacy.name}</strong><br />
                                Contact: {pharmacy.contact}<br />
                                Website: <a href={pharmacy.website} target="_blank" rel="noopener noreferrer">{pharmacy.website}</a><br />
                                Address: {pharmacy.address}<br />
                                Distance: {pharmacy.distance.toFixed(2)} km
                            </li>
                        ))}
                    </ul>
                </Box>
            )}
        </div>
    );
};

export default PharmacyPage;
