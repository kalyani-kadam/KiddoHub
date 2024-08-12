import React from 'react'

const About = () => {
    return (
        <>
            <div className="container">
                <h3 className="py-3">About Us</h3>
                <p>
                At Kiddohub, we believe in nurturing creativity, curiosity, and learning in every child. Our mission is to provide a safe, 
                engaging, and fun environment where children can explore their interests, develop new skills, and make lifelong memories</p>
                {/* <p> Some additional functionalities are - user can search a
                    doctor by area, specialization and can pay fees online through Razorpay, both user and doctor can manage their booked appointments.
                </p> */}
                <p className="text-muted">Regards, from creators:
                    <ul>
                        <li>Kalyani Kadam</li>
                        <li>Kshitija Kurhade</li>
                    </ul>
                </p>
            </div>
        </>
    )
}

export default About;