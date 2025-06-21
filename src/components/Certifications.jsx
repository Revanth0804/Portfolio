import React from "react";

function Certifications() {
    const certifications = [
        {
            title: "Azure Fundamentals (AZ-900)",
            issuer: "Microsoft",
            credentialId: "83ED4D166BC77F6D",
            link: "https://learn.microsoft.com/en-us/users/revanthkumarsuvvari-9659/credentials/83ed4d166bc77f6d"
        },
        {
            title: "MTA: Introduction to Programming Using Python",
            issuer: "Microsoft",   
            credentialId: "Not provided by issuer",             
            link: "https://www.credly.com/badges/b2a88b84-7c2a-4995-9d3a-d5e77145545d/public_url"
        },
        {
            title: "Programming in Java",
            issuer: "NPTEL",
            credentialId: "NPTEL22CS102S64120262",
            link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS102S6412026210021440"
        }
    ];

    return (
        <section id="Certifications">
            <h2 className="title">Certifications</h2>
            <div className="Contact">
                {certifications.map((certification, index) => (
                    <div className="card" key={index}>
                        <div className="info">
                            <p>
                                <strong>{certification.title}</strong>  <br /><br />
                                Issuer: {certification.issuer} <br />
                                Credential ID: {certification.credentialId} <br />
                                Link: <a href={certification.link}>Certificate</a>  <br />
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;
