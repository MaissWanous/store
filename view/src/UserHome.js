import React from 'react';

export default function UserHome(params) {
    return (
        <div className="container">
            <div className="text-center">
                <h1>Bootstrap Card Tiled Layout</h1>
            </div>
            <div className="container">
                <div className="card-columns">
                    {[
                        {
                            imgSrc: "https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80",
                            title: "Lorem ipsum dolor sit amet.",
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque...",
                            date: "Jan 20, 2018",
                        },
                        {
                            imgSrc: "https://images.unsplash.com/photo-1472076638602-b1f8b1ac0b4a?ixlib=rb-0.3.5&s=63c9de7246b535be56c8eaff9b87dd89&auto=format&fit=crop&w=500&q=80",
                            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, doloremque!",
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto maxime nemo omnis praesentium similique.",
                            date: "Jan 20, 2018",
                        },
                        {
                            imgSrc: "https://images.unsplash.com/photo-1535086181678-5a5c4d23aa7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34c86263bec2c8f74ceb74e9f4c5a5fc&auto=format&fit=crop&w=500&q=80",
                            title: "Lorem ipsum dolor sit amet, consectetur.",
                            text: "Amet commodi deleniti enim laboriosam odio placeat praesentium quis ratione rerum suscipit.",
                            date: "Jan 20, 2018",
                        },
                        {
                            imgSrc: "https://images.unsplash.com/photo-1535074153497-b08c5aa9c236?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2aaf944a59f16fe1fe72f5057b3a7dd&auto=format&fit=crop&w=500&q=80",
                            title: "Lorem ipsum dolor sit amet, consectetur.",
                            text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
                            date: "Jan 20, 2018",
                        }
                    ].map((card, index) => (
                        <div className="card" key={index}>
                            <a href="#">
                                <img className="card-img-top" src={card.imgSrc} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            <i className="fas fa-eye"></i> 1000
                                            <i className="far fa-user"></i> admin
                                            <i className="fas fa-calendar-alt"></i> {card.date}
                                        </small>
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
