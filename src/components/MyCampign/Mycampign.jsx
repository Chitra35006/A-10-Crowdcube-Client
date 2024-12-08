import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mycampign = ({ camp, idx, camps, setcamp, refreshData }) => {
    const { _id, campaign, photo, title } = camp;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/campaigns/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Campaign has been deleted.",
                                icon: "success",
                            });

                            // After deletion, refresh the campaigns list
                            refreshData();
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "Failed to delete the campaign.",
                                icon: "error",
                            });
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting campaign:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong.",
                            icon: "error",
                        });
                    });
            }
        });
    };

    return (
        <>
            <tr>
                <td className="font-bold text-red-400">{idx + 1}</td>
                <td className="text-gray-500">{campaign}</td>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={photo}
                                    alt="Campaign Pic"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{title}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="flex gap-4">
                        <button className="bg-gradient-to-r font-bold from-rose-300 to-violet-400 text-indigo-900 hover:text-rose-500 px-4 py-2 rounded">
                            <Link to={`/update/1`}>UPDATE</Link>
                        </button>
                        <button onClick={() => handleDelete(_id)} className="font-bold bg-gradient-to-r from-red-300 to-rose-400 text-red-900 hover:text-rose-500 px-4 py-2 rounded">
                            DELETE
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default Mycampign;
