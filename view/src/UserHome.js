
import React, { useContext, useEffect, useState } from 'react';
import Card from './components/Card';
import Cookies from 'universal-cookie';
import axios from 'axios';


export default function UserHome() {
    // const cookie = new Cookies();
    // let tokenC = cookie.get("Bearer");
    // console.log(tokenC)
    const [cardsData, setCardsData] = useState([]);
    const [selectedClassification, setSelectedClassification] = useState('all');
    const [classifications, setClassifications] = useState(["all"]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsResponse = await axios.get('http://localhost:2000/getProducts');
                setCardsData(productsResponse.data);
                console.log(productsResponse.data)
            } catch (error) {
                console.error('Error fetching products data:', error);
            }

            try {
                const classificationResponse = await axios.get('http://localhost:2000/classification');
                setClassifications(["all", ...classificationResponse.data])
            } catch (error) {
                console.error('Error fetching classification data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(classifications)
    // const cardsData = [
    //     {
    //         imgSrc: "https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80",
    //         title: "اكواب حافظة ",
    //         text: "Lorem ipsum dolor sit amet,وووووووووووووووووووووووووووووووووووووووووووووووووو consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque...",
    //     },
    //     {
    //         imgSrc: "https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80",
    //         title: "اكواب حافظة ",
    //         text: "Lorem ipsum dolor sit amet,وووووووووووووووووووووووووووووووووووووووووووووووووو consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque...",
    //     },
    //     {
    //         imgSrc: "https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80",
    //         title: "اكواب حافظة ",
    //         text: "Lorem ipsum dolor sit amet,وووووووووووووووووووووووووووووووووووووووووووووووووو consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque...",
    //     },
    //     {
    //         imgSrc: "https://images.unsplash.com/photo-1472076638602-b1f8b1ac0b4a?ixlib=rb-0.3.5&s=63c9de7246b535be56c8eaff9b87dd89&auto=format&fit=crop&w=500&q=80",
    //         title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, doloremque!",
    //         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto maxime nemo omnis praesentium similique.",
    //     },
    //     {
    //         imgSrc: "https://images.unsplash.com/photo-1535086181678-5a5c4d23aa7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34c86263bec2c8f74ceb74e9f4c5a5fc&auto=format&fit=crop&w=500&q=80",
    //         title: "Lorem ipsum dolor sit amet, consectetur.",
    //         text: "Amet commodi deleniti enim laboriosam odio placeat praesentium quis ratione rerum suscipit.",
    //     },
    //     {
    //         imgSrc: "https://images.unsplash.com/photo-1535074153497-b08c5aa9c236?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2aaf944a59f16fe1fe72f5057b3a7dd&auto=format&fit=crop&w=500&q=80",
    //         title: "Lorem ipsum dolor sit amet, consectetur.",
    //         text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
    //     }
    // ];

    return (
        <div className="container">
            <div className="button_grp">
                <ul>
                    {classifications.map((classification) => (
                        <li
                            key={classification}
                            data-li={classification}

                            className={selectedClassification === classification ? 'btn active' : 'btn'}
                            onClick={() => setSelectedClassification(classification)}
                        >
                            {classification.charAt(0).toUpperCase() + classification.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>


            <div className="card-columns">
            {cardsData
                .filter(card => 
                    selectedClassification === 'all' || card.classifications.includes(selectedClassification)
                )
                .map((card, index) => (
                    <Card
                        key={index}
                        imgSrc={card.photos[0]}
                        title={card.name}
                        text={card.description}
                        price={card.price}
                        classf={card.classifications.map((classification, i) => (
                            <span key={i}>{classification}</span>
                        ))}
                    />
                ))}
        </div>
        </div>
    );
}