export default function TableList() {

    const clients = [
        { id: 1, name: "John Doe", email: "johndoe@gmail.com", job: "Engineer", rate: "100", isActive: true },
        { id: 2, name: "Jane Doe", email: "janedoe@gmail.com", job: "Designer", rate: "101", isActive: true },
        { id: 3, name: "Bob Smith", email: "bobsmith@gmail.com", job: "Developer", rate: "102", isActive: false },
        { id: 4, name: "Saurabh", email: "saurabhK@gmail.com", job: "Supply-Chain", rate: "103", isActive: true }
    ]

    return (

        <>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>E-mail</th>
                            <th>Rate</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="hover:bg-base-300">
                        {/* row 1 */}

                        {clients.map((client) => (

                            <tr>
                                <th>{client.id}</th>
                                <td>{client.name}</td>
                                <td>{client.job}</td>
                                <td>{client.email}</td>
                                <td>{client.rate}</td>
                                <td>
                                    <button className={`btn rounded-full w-20 ${client.isActive ? "btn-success" : "btn-error"} `}>
                                        {client.isActive ? "True" : "False"}

                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-secondary">Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-error">Delete</button>
                                </td>
                            </tr>
                        ))}



                    </tbody>
                </table>
            </div >
        </>
    )
}