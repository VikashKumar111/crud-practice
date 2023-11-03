import React from "react";

const Tours = ({tours}) => {
    return (
        <section>
            <div>
                <h2>our tours</h2>
                <div className="underline"></div>
            </div>
            <div>{tours.map((tour) => {
                return <Tour key={tour.id} {...tour} />
            }) }</div>
        </section>
    )
}
export default Tours;