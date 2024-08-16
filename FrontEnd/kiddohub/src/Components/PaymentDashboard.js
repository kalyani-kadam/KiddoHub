import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import PaymentService from "../service/PaymentService";

import '../Style/sidebar.css'
import '../Style/table.css'

const PaymentDashboard = () => {
    const [arr, setarr] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);

    const navigate = useNavigate();

    const fetchdata = () => {
        PaymentService.getallpayments()
            .then((result) => {
                console.log(result.data);
                setarr(result.data);
                console.log("database data")
                console.log(arr);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    const deletePayment = (tId) => {
        PaymentService.deletepayment(parseFloat(tId))
            .then((result) => {
                alert("Payment delete succcessful")
                console.log(result)
                navigate("/paymentdashboard")
            })
            .catch((err) => {
                alert("Payment delete unsucccessful")
                console.log(err);
                // navigate("/home")
            })
    }
    return (
        <div>
            <br />
            <h2>Payment Dashboard</h2>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            {/* <!-- sidebar CSS--> */}
            <link href="Style/sidebar.css" rel="stylesheet" media="all" />
            <link href="Style/tables.css" rel="stylesheet" media="all" />

            <br />
            <Link to="/payment">
                <button type="button" name="btn" id="btn" className="btn btn-primary">Add Payment</button>
            </Link>&nbsp;&nbsp;
            <Link to="/login">
                <button type="button" name="btn" id="btn" className="btn btn-danger">Logout</button>
            </Link>
            <br></br><br></br>
            <div>
                <body>
                    <div class="sidebar">
                        <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
                        <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
                        <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                        <a href="/parenttable"><i class="fa fa-fw fa-user"></i> Parents </a>
                        <a href="/childdashboard"><i class="fa fa-fw fa-child"></i> Children </a>
                        <a href="/doctordashboard"><i class="fa fa-fw fa-user-md"></i> Doctors</a>
                        <a href="/staffdashboard"><i class="fa fa-fw fa-id-badge"></i> Staffs </a>
                        <a href="/activitydashboard"><i class="fa fa-fw fa-calendar"></i> Activities</a>
                        <a href="/paymentdashboard"><i class="fa fa-fw fa-credit-card"></i> Payments</a>
                    </div>
                </body>
            </div>
            <div class="container">
                <table border='2'>
                    <thead>
                        <tr>
                            <th>TransactionId</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Payment Type</th>
                        </tr>
                    </thead>
                    <tbody>


                        {arr.map(payment => <tr key={payment.tId}>
                            <td>{payment.tId}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.date}</td>
                            <td>{payment.pType}</td>


                            <td>
                                <button type="button" name="btn" id="btn" className="btn btn-danger" onClick={() => { deletePayment(payment.tId) }}>Delete</button>
                                &nbsp;&nbsp;
                                <Link to={`/update/${payment.tId}`} state={{ paymentdata: payment }}>
                                    <button type="button" name="btn" id="btn" className="btn btn-info">Edit</button>
                                </Link>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default PaymentDashboard;