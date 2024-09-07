import React from 'react';
import '../style/Fee.css';

const FeePage = () => {
    return (
        <div className="fee-page">
            <h1>Fee Structure</h1>
            <table className="fee-table">
                <thead>
                    <tr>
                        <th>Grade</th>
                        <th>Term 1</th>
                        <th>Term 2</th>
                        <th>Term 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Grade 1</td>
                        <td>$1000</td>
                        <td>$900</td>
                        <td>$900</td>
                    </tr>
                    <tr>
                        <td>Grade 2</td>
                        <td>$1100</td>
                        <td>$1000</td>
                        <td>$1000</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
            <button className="pay-button">Pay Now</button>
        </div>
    );
};

export default FeePage;
